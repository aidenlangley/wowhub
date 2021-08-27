<script lang="ts">
  import Tooltip from '$lib/content/Tooltip.svelte';
  import { style } from '$lib/media/Icon.svelte';
  import { set, state } from '$lib/store/dark';
  import Icon, { Moon, Sun } from 'svelte-hero-icons';
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
      aria-label="toggle {!dark ? 'dark' : 'light'} mode on"
      on:click={toggle}
    >
      {#if !dark}
        <slot name="dark">
          <div in:fade={{ duration: 250 }}>
            <Icon src={Moon} solid class={style} />
          </div>
        </slot>
      {:else}
        <slot name="light">
          <div in:fade={{ duration: 250 }}>
            <Icon src={Sun} solid class={style} />
          </div>
        </slot>
      {/if}
    </button>
  </Tooltip>
</div>
