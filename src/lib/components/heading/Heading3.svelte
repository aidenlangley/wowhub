<script lang="ts">
  export let center = false;
</script>

<h3 class:sm:text-center={center}>
  <span>
    <slot />
  </span>
</h3>

<style lang="postcss">
  h3 {
    font-weight: theme('fontWeight.light');
    letter-spacing: theme('letterSpacing.tight');
    padding-bottom: theme('padding.2');
    padding-top: theme('padding.2');

    @apply text-18;

    @nest :global(.dark) & {
      color: theme('colors.white');
    }

    @media screen(sm) {
      @apply text-22;
    }

    & > span {
      @apply bg-white/80;

      @nest :global(.dark) & {
        @apply bg-black/80;
      }
    }
  }
</style>
