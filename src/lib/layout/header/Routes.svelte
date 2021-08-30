<script lang="ts">
  import { page } from '$app/stores';
  import Tooltip from '$lib/content/Tooltip.svelte';
  import { routes } from '$lib/store/routes';
</script>

<!--
  @component
  Oredered list of `svelte:prefetch` `<a>` elements. Could be arranged
  vertically too.
-->
<nav>
  <ol
    class="grid grid-flow-col gap-x-1
      place-items-center place-content-center place-self-center
      text-22 font-medium tracking-tighter duration-100"
  >
    {#each $routes as { name, path, translation } (path)}
      <li>
        <Tooltip text={translation}>
          <a
            href={path}
            aria-label="{name} ({translation})"
            class:active={$page.path === path}
            sveltekit:prefetch
          >
            {name}
          </a>
        </Tooltip>
      </li>
    {/each}
  </ol>
</nav>

<style lang="postcss">
  li:hover,
  li:focus {
    @apply text-green-300 underline;
  }

  .active {
    @apply bg-white text-black font-bold tracking-tighter pointer-events-none;
    @apply text-24 border-b-4 border-green-300;
  }

  @screen tyd {
    ol {
      @apply text-base;
    }

    .active {
      @apply text-18 border-b-2;
    }
  }

  @screen ty {
    ol {
      @apply gap-x-2;
    }
  }

  @screen sm {
    ol {
      @apply text-26;
    }

    .active {
      @apply text-28;
    }
  }

  @screen md {
    ol {
      @apply text-28;
    }

    .active {
      @apply text-30;
    }
  }

  @screen lg {
    ol {
      @apply text-30;
    }

    .active {
      @apply text-32;
    }
  }

  @screen xl {
    ol {
      @apply text-38;
    }

    .active {
      @apply text-40;
    }
  }
</style>
