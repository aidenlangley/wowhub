<script lang="ts">
  import type { ButtonColour } from '../button/Button.d';
  import { ButtonColour as buttonColour } from '../button/Button.d';
  import Link from './Link.svelte';

  export let href: string;
  export let text: string = null;
  export let label: string = text;

  export let button = false;
  export let colour: ButtonColour = buttonColour.Default;
</script>

<Link {href} {label} {button} {colour}>
  <span
    class="grid grid-flow-col gap-2
      items-center justify-center justify-self-center"
  >
    <span aria-hidden="true">
      <slot name="icon" />
    </span>
    <slot>
      {text}
    </slot>
  </span>
</Link>
