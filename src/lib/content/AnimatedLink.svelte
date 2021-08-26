<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { ButtonColour } from './Button.d';
  import { ButtonColour as buttonColour } from './Button.d';
  import Link from './Link.svelte';

  export let href: string;
  export let text: string = null;

  export let button = false;
  export let colour: ButtonColour = buttonColour.Default;

  let transition = false;
  const next = () => (transition = true);
  const prev = () => (transition = false);
</script>

<div
  on:focus={next}
  on:blur={prev}
  on:pointerover={next}
  on:pointerleave={prev}
>
  <Link {href} {button} {colour}>
    {#if !transition}
      <div in:fade={{ duration: 300 }}>
        <slot name="original" />
      </div>
    {:else}
      <div in:fade={{ duration: 300 }}>
        <slot name="transition" />
      </div>
    {/if}
    <slot name="text">
      <span>{text}</span>
    </slot>
  </Link>
</div>
