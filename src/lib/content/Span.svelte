<script lang="ts">
  export let underline = false;
</script>

<span class="span" class:under-line={underline}>
  <slot />
</span>

<style lang="postcss">
  span {
    @apply bg-white/50;
  }

  :global(.dark) span.span {
    @apply bg-black/50;
  }

  span.under-line {
    @apply border-b-4 border-green-300;
  }
</style>
