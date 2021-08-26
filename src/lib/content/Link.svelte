<script lang="ts">
  import { browser } from '$app/env';
  import { prefetch } from '$app/navigation';
  import type { ButtonColour } from './Button.d';
  import { ButtonColour as buttonColour } from './Button.d';
  import { style } from './Button.svelte';

  export let href: string;
  export let text: string = null;

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
  rel="{external ? 'external' : ''} noopener"
  class={button
    ? `${style} ${colour}`
    : 'font-mono font-bold focus:underline ' +
      'text-blue-600 hover:text-blue-400 focus:text-blue-400 ' +
      'dark:text-blue-300 dark:hover:text-blue-400 dark:focus:text-blue-400 ' +
      'visited:text-purple-700 hover:visited:text-purple-500 ' +
      'dark:visited:text-purple-300 dark:hover:visited:text-purple-400'}
>
  <slot>
    <span>{text}</span>
  </slot>
</a>
