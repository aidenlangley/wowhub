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
    : 'font-mono font-medium focus:underline ' +
      'text-green-700 hover:text-green-500 focus:text-green-500 ' +
      'dark:text-green-300 dark:hover:text-green-500 dark:focus:text-green-500 ' +
      'transition duration-300'}
>
  <slot>
    <span>{text}</span>
  </slot>
</a>
