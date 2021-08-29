<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { ButtonColour } from '../button/Button.d';
  import { ButtonColour as buttonColour } from '../button/Button.d';
  import Link from './Link.svelte';

  export let href: string;
  export let text: string = null;
  export let label: string = text;

  export let button = false;
  export let colour: ButtonColour = buttonColour.Default;

  let transition = false;
  const next = () => (transition = true);
  const prev = () => (transition = false);
</script>

<Link {href} {label} {button} {colour}>
  <span
    on:focus={next}
    on:blur={prev}
    on:pointerover={next}
    on:pointerleave={prev}
    class="grid grid-flow-col gap-2
      items-center justify-center justify-self-center"
  >
    {#if !transition}
      <span in:fade={{ duration: 100 }} aria-hidden="true">
        <slot name="original" />
      </span>
    {:else}
      <span aria-hidden="true">
        <slot name="transition" />
      </span>
    {/if}
    <slot>
      {text}
    </slot>
  </span>
</Link>
