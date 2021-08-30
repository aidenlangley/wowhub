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
  <ol>
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
  nav > ol {
    display: grid;
    grid-auto-flow: column;

    place-items: center;
    place-content: center;
    place-self: center;

    column-gap: 0.25rem; /* 4px */
  }

  nav > ol > li a {
    font-weight: 500;
    letter-spacing: -0.05em;
    font-size: 1rem; /* 16px */
    line-height: 1.5rem; /* 24px */

    transition-duration: 150ms;
  }

  nav > ol > li:hover a:not(.active),
  nav > ol > li:focus a:not(.active) {
    text-decoration: underline;
    @apply text-green-300;
  }

  nav > ol > li a.active {
    font-weight: 700;
    letter-spacing: -0.05em;
    font-size: 1.125rem; /* 18px */
    line-height: 1.5rem; /* 24px */

    pointer-events: none;
    border-bottom-width: 2px;

    @apply text-black bg-white border-green-300;
  }

  @screen ty {
    nav > ol {
      column-gap: 0.5rem; /* 8px */
    }

    nav > ol > li a {
      font-size: 1.375rem; /* 22px */
      line-height: 1.75rem; /* 28px */
    }

    nav > ol > li a.active {
      font-size: 1.5rem; /* 24px */
      line-height: 1.75rem; /* 28px */

      border-bottom-width: 4px;
    }
  }

  @screen sm {
    nav > ol > li a {
      font-size: 1.625rem; /* 26px */
      line-height: 1.75rem; /* 28px */
    }

    nav > ol > li a.active {
      font-size: 1.75rem; /* 28px */
      line-height: 2rem; /* 32px */
    }
  }

  @screen md {
    nav > ol > li a {
      font-size: 1.75rem; /* 28px */
      line-height: 2rem; /* 32px */
    }

    nav > ol > li a.active {
      font-size: 1.875rem; /* 30px */
      line-height: 2rem; /* 32px */
    }
  }

  @screen lg {
    nav > ol > li a {
      font-size: 1.875rem; /* 30px */
      line-height: 2rem; /* 32px */
    }

    nav > ol > li a.active {
      font-size: 2rem; /* 32px */
      line-height: 2.25rem; /* 36px */
    }
  }

  @screen xl {
    nav > ol > li a {
      font-size: 2.375rem; /* 38px */
      line-height: 2.5rem; /* 40px */
    }

    nav > ol > li a.active {
      font-size: 2.5rem; /* 40px */
      line-height: 2.5rem; /* 40px */
    }
  }
</style>
