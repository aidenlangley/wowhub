<script>
  import Button from './Button.svelte';

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
  <Button>
    {#if !transition}
      <slot name="original" />
    {:else}
      <slot name="transition" />
    {/if}
    <slot name="text" />
  </Button>
</div>
