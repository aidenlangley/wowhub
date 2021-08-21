<script lang="ts">
  import { state, set } from '$lib/store/dark';
  import SvgMoon from './media/svg/SvgMoon.svelte';
  import SvgSun from './media/svg/SvgSun.svelte';

  // Marks property as reactive.
  $: dark = $state.dark;
  const toggle = () => set(!dark);
</script>

<!--
    @component
    Handles toggling dark mode (via a `dark` store & local storage.)
-->
<div class="items-center align-middle">
  <button
    class={!dark
      ? 'text-indigo-50 hover:text-indigo-300'
      : 'text-yellow-50 hover:text-yellow-300'}
    aria-label={`toggle ${!dark ? 'dark' : 'light'} mode on`}
    on:click={toggle}
  >
    {#if !dark}
      <slot name="dark">
        <SvgMoon />
      </slot>
    {:else}
      <slot name="light">
        <SvgSun />
      </slot>
    {/if}
  </button>
</div>
