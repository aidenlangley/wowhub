<script lang="ts">
  import Tooltip from '$lib/content/Tooltip.svelte';
  import { set, state } from '$lib/store/dark';
  import Icon, { Moon, Sun } from 'svelte-hero-icons';
  import { fade } from 'svelte/transition';

  $: dark = $state.dark;
  const toggleDark = () => set(!dark);

  $: focused = false;
  const focus = () => (focused = true);
  const blur = () => (focused = false);

  $: text = `toggle ${!dark ? 'dark' : 'light'} mode on`;
</script>

<!--
  @component
  Handles toggling dark mode (via a `dark` store & local storage.)
-->
<Tooltip {text} left>
  <button
    aria-label={text}
    on:click={toggleDark}
    on:focus={focus}
    on:blur={blur}
    on:pointerover={focus}
    on:pointerleave={blur}
  >
    {#if !dark}
      <span
        class:text-blue-300={focused}
        aria-hidden="true"
        in:fade={{ duration: 100 }}
      >
        <Icon src={Moon} solid={focused} />
      </span>
    {:else}
      <span
        class:text-yellow-300={focused}
        aria-hidden="true"
        in:fade={{ duration: 100 }}
      >
        <Icon src={Sun} solid={focused} />
      </span>
    {/if}
  </button>
</Tooltip>
