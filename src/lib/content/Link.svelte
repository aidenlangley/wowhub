<script lang="ts">
  import { browser } from '$app/env';
  import { prefetch } from '$app/navigation';

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

<style lang="postcss" global>
  @import './button.postcss';

  a.link:not(.button) {
    @apply font-mono font-medium text-blue-600;
  }

  a.link:not(.button):hover,
  a.link:not(.button):focus {
    @apply underline text-blue-400;
  }

  a.link:not(.button):visited {
    @apply text-purple-600;
  }

  a.link:not(.button):hover:visited,
  a.link:not(.button):focus:visited {
    @apply text-purple-400;
  }

  .dark a.link:not(.button) {
    @apply text-blue-400;
  }

  .dark a.link:not(.button):hover,
  .dark a.link:not(.button):focus {
    @apply text-blue-200;
  }

  .dark a.link:not(.button):visited {
    @apply text-purple-400;
  }

  .dark a.link:not(.button):hover:visited,
  .dark a.link:not(.button):focus:visited {
    @apply text-purple-200;
  }
</style>
