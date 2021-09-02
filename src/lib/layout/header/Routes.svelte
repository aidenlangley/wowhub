<script lang="ts">
  import { page } from '$app/stores'
  import Tooltip from '$components/Tooltip.svelte'
  import { routes } from '$store/routes'
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
    column-gap: theme('gap.1');
    display: grid;
    grid-auto-flow: column;
    place-content: center;
    place-items: center;
    place-self: center;

    @screen ty {
      column-gap: 0.5rem; /* 8px */
    }

    & > li {
      font-weight: theme('fontWeight.medium');
      letter-spacing: theme('letterSpacing.tighter');

      @apply text-base;

      @screen ty {
        @apply text-22;
      }

      @screen sm {
        @apply text-26;
      }

      @screen md {
        @apply text-28;
      }

      @screen lg {
        @apply text-30;
      }

      @screen xl {
        @apply text-38;
      }

      & a {
        &:not(.active) {
          &:hover,
          &:focus {
            color: theme('colors.green.300');
            text-decoration: underline;
          }
        }

        &.active {
          background-color: theme('colors.white');
          border-bottom-width: theme('borderWidth.4');
          border-color: theme('colors.green.300');
          color: theme('colors.black');
          font-weight: theme('fontWeight.bold');
          letter-spacing: theme('letterSpacing.tighter');
          pointer-events: none;

          @apply text-20;

          @screen ty {
            @apply text-24;
          }

          @screen sm {
            @apply text-28;
          }

          @screen md {
            @apply text-30;
          }

          @screen lg {
            @apply text-32;
          }

          @screen xl {
            @apply text-40;
          }
        }
      }
    }
  }
</style>
