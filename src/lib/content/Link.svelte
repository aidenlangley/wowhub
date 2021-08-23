<script lang="ts">
  export let href: string;
  export let text: string = null;

  import { ButtonColour, style } from './Button.svelte';

  export let buttonStyle = false;
  export let buttonColour: ButtonColour = ButtonColour.Default;
</script>

<!--
  @component
  `Link` for internal and external links, with uniform styles. Can be styled as
  a button also. `Button` styles are exposed by `Button.svelte` so that they are
  always identical.
-->
<a
  {href}
  target="_blank"
  rel="noopener"
  class={buttonStyle
    ? `${style} ${buttonColour}`
    : 'font-mono font-bold focus:underline ' +
      'text-blue-600 hover:text-blue-400 focus:text-blue-400 ' +
      'dark:text-blue-300 dark:hover:text-blue-400 dark:focus:text-blue-400 ' +
      'visited:text-purple-700 dark:visited:text-indigo-300 ' +
      'transition duration-300'}
>
  <slot>
    <span>{text}</span>
  </slot>
</a>
