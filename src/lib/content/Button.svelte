<script lang="ts" context="module">
  import type { ButtonColour } from './Button.d';
  import { ButtonColour as buttonColour } from './Button.d';

  export const style =
    'flex items-center space-x-2 p-2 ty:p-3 sm:p-4 ' +
    'border rounded-md shadow ' +
    'font-mono font-medium tyd:tracking-tighter ' +
    'sm:text-18 md:text-20 lg:text-22 xl:text-24 ' +
    'focus:scale-105 transition duration-100';
</script>

<script lang="ts">
  // Should be a closure / lambda / pass me a function.
  export let click = null;
  export let colour: ButtonColour = buttonColour.Default;
  export let text: string = null;
</script>

<button class="{style} {colour}" on:click={click}>
  <slot>
    <span>{text}</span>
  </slot>
</button>
