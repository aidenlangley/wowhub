<script lang="ts">
  import Link from './Link.svelte';
  import { ButtonColour } from './Button.svelte';

  export let href: string;
  export let text: string = null;
  export let buttonStyle = false;
  export let buttonColour: ButtonColour = ButtonColour.Default;

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
      <slot name="original" />
    {:else}
      <slot name="transition" />
    {/if}
    <slot name="text">
      <span>{text}</span>
    </slot>
  </Link>
</div>
