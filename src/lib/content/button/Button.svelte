<script lang="ts" context="module">
  import type { ButtonColour } from './Button.d';
  import { ButtonColour as buttonColour } from './Button.d';

  export const style =
    'p-2 ty:p-3 sm:p-4 border rounded-md shadow ' +
    'font-mono font-medium sm:text-18 md:text-20 lg:text-22 xl:text-24 ' +
    'focus:scale-105 transition duration-100';
</script>

<script lang="ts">
  export let colour: ButtonColour = buttonColour.Default;
  export let text: string = null;
</script>

<button
  class="grid grid-flow-col items-center justify-center gap-2 {style} {colour}"
>
  <slot>{text}</slot>
</button>
