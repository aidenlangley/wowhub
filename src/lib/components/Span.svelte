<script lang="ts">
  export let underline = false;
</script>

<span class="span" class:under-line={underline}>
  <slot />
</span>

<style lang="postcss">
  span {
    @apply bg-white/50;

    @nest :global(.dark) & {
      @apply bg-black/50;
    }

    &.under-line {
      border-bottom-width: theme('borderWidth.4');
      border-color: theme('colors.green.300');
    }
  }
</style>
