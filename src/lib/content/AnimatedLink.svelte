<script lang="ts">
  import { fade } from 'svelte/transition';
  import { ButtonColour } from './Button.svelte';
  import Link from './Link.svelte';

  export let href: string;
  export let text: string = null;
  export let buttonStyle = false;
  export let buttonColour: string = ButtonColour.Default;

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
  <Link {href} {buttonStyle} {buttonColour}>
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
