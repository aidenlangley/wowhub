<script lang="ts">
  import { browser } from '$app/env';
  import { prefetch } from '$app/navigation';
  import './button.postcss';

  export let href: string;
  export let internal = false;
  export let label: string = null;
  export let button = false;
  export let colour: string = null;

  if (internal && browser) {
    prefetch(href);
  }

  const target = !internal ? '_blank' : null;
  const rel = `noopener ${!internal ? 'external' : ''}`;
</script>

<!--
  @component
  `Link` for internal and external links, with uniform styles. Can be styled as
  a button also. `Button` styles are exposed by `Button.svelte` so that they are
  always identical.
-->
<a
  {href}
  {target}
  {rel}
  aria-label={label}
  class={button ? `button ${colour}` : 'link'}
>
  <slot />
</a>

<style lang="postcss">
  a.link {
    display: inline-grid;
    grid-auto-flow: column;
    column-gap: 0.25rem; /* 4px */

    align-items: center;
    justify-content: start;
  }

  @screen sm {
    a.link,
    a.button {
      column-gap: 0.5rem; /* 8px */
    }
  }

  a.link:not(.button) {
    font-weight: 500;
    @apply font-mono text-blue-600;
  }

  a.link:not(.button):hover,
  a.link:not(.button):focus {
    text-decoration: underline;
    @apply text-blue-400;
  }

  a.link:not(.button):visited {
    @apply text-purple-600;
  }

  a.link:not(.button):hover:visited,
  a.link:not(.button):focus:visited {
    @apply text-purple-400;
  }

  :global(.dark) a.link:not(.button) {
    @apply text-blue-400;
  }

  :global(.dark) a.link:not(.button):hover,
  :global(.dark) a.link:not(.button):focus {
    @apply text-blue-200;
  }

  :global(.dark) a.link:not(.button):visited {
    @apply text-purple-400;
  }

  :global(.dark) a.link:not(.button):hover:visited,
  :global(.dark) a.link:not(.button):focus:visited {
    @apply text-purple-200;
  }
</style>
