<script lang="ts">
  import { fade } from 'svelte/transition';
  import type { ButtonColour } from './Button.d';
  import { ButtonColour as buttonColour } from './Button.d';
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

<div
  class="transition duration-300"
  on:focus={next}
  on:blur={prev}
  on:pointerover={next}
  on:pointerleave={prev}
>
  <Link {href} {label} {button} {colour}>
    {#if !transition}
      <div in:fade={{ duration: 300 }}>
        <slot name="original" />
      </div>
    {:else}
      <div>
        <slot name="transition" />
      </div>
    {/if}
    <span>{text}</span>
  </Link>
</div>
