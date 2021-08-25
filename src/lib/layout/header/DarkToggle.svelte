<script lang="ts">
  import Tooltip from '$lib/content/Tooltip.svelte';
  import SvgMoon from '$lib/media/svg/SvgMoon.svelte';
  import SvgSun from '$lib/media/svg/SvgSun.svelte';
  import { set, state } from '$lib/store/dark';
  import { fade } from 'svelte/transition';

  // Marks property as reactive.
  $: dark = $state.dark;
  const toggle = () => set(!dark);

  $: label = `toggle ${!dark ? 'dark' : 'light'} mode on`;
</script>

<!--
  @component
  Handles toggling dark mode (via a `dark` store & local storage.)
-->
<div class="items-center align-middle">
  <Tooltip text={label} left>
    <button
      class="transition duration-300
        {!dark
        ? 'text-purple-50 hover:text-purple-300 focus:text-purple-300'
        : 'text-yellow-50 hover:text-yellow-300 focus:text-yellow-300'}
      "
      aria-label="toggle {!dark ? 'dark' : 'light'} mode on"
      on:click={toggle}
    >
      {#if !dark}
        <slot name="dark">
          <div in:fade={{ duration: 250 }}>
            <SvgMoon />
          </div>
        </slot>
      {:else}
        <slot name="light">
          <div in:fade={{ duration: 250 }}>
            <SvgSun />
          </div>
        </slot>
      {/if}
    </button>
  </Tooltip>
</div>
