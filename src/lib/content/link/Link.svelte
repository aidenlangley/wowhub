<script lang="ts" context="module">
  import { browser } from '$app/env';
  import { prefetch } from '$app/navigation';
  import type { ButtonColour } from '../button/Button.d';
  import { ButtonColour as buttonColour } from '../button/Button.d';
  import { style as buttonStyle } from '../button/Button.svelte';

  export const style =
    'font-mono font-medium focus:underline ' +
    'text-blue-600 hover:text-blue-400 focus:text-blue-400 ' +
    'visited:text-purple-600 hover:visited:text-purple-400 focus:visited:text-purple-400' +
    'dark:text-blue-300 dark:hover:text-blue-100 dark:focus:text-blue-100 ' +
    'dark:visited:text-purple-400 dark:hover:visited:text-purple-200 dark:focus:visited:text-purple-200';
</script>

<script lang="ts">
  export let href: string;
  export let text: string = null;
  export let label: string = text;

  export let button = false;
  export let colour: ButtonColour = buttonColour.Default;

  export let external = true;
  if (!external && browser) prefetch(href);
</script>

<!--
  @component
  `Link` for internal and external links, with uniform styles. Can be styled as
  a button also. `Button` styles are exposed by `Button.svelte` so that they are
  always identical.
-->
<a
  {href}
  target={external ? '_blank' : ''}
  rel="noopener {external ? 'external' : ''}"
  aria-label={label}
  class="
    {button ? `${buttonStyle} ${colour}` : style}"
>
  <slot>
    {text}
  </slot>
</a>
