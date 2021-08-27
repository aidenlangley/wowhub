<script lang="ts">
  import Tooltip from '$lib/content/Tooltip.svelte';
  import { style } from '$lib/media/Icon.svelte';
  import { set, state } from '$lib/store/dark';
  import Icon, { Moon, Sun } from 'svelte-hero-icons';
  import { fade } from 'svelte/transition';

  // Marks property as reactive.
  $: dark = $state.dark;
  const toggleDark = () => set(!dark);

  $: focused = false;
  const focus = () => (focused = true);
  const blur = () => (focused = false);

  $: label = `toggle ${!dark ? 'dark' : 'light'} mode on`;
</script>

<!--
  @component
  Handles toggling dark mode (via a `dark` store & local storage.)
-->
<div class="items-center align-middle">
  <Tooltip text={label} left>
    <button on:click={toggleDark} aria-label={label}>
      {#if !dark}
        <slot name="dark">
          <div
            in:fade={{ duration: 300 }}
            on:focus={focus}
            on:blur={blur}
            on:pointerover={focus}
            on:pointerleave={blur}
            class:text-blue-300={focused}
            aria-hidden="true"
          >
            <Icon src={Moon} solid={focused} class={style} />
          </div>
        </slot>
      {:else}
        <slot name="light">
          <div
            in:fade={{ duration: 300 }}
            on:focus={focus}
            on:blur={blur}
            on:pointerover={focus}
            on:pointerleave={blur}
            class:text-yellow-300={focused}
            aria-hidden="true"
          >
            <Icon src={Sun} solid={focused} class={style} />
          </div>
        </slot>
      {/if}
    </button>
  </Tooltip>
</div>
