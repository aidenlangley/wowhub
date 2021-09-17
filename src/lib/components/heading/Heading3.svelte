<script lang="ts">
  export let center = false;
</script>

<h3 class:sm:text-center={center}>
  <span>
    <slot />
  </span>
</h3>

<style>
  h3 {
    font-weight: theme('fontWeight.light');
    letter-spacing: theme('letterSpacing.tight');
    padding-bottom: theme('padding.2');
    padding-top: theme('padding.2');

    @apply text-18;
  }

  :global(.dark) h3 {
    color: theme('colors.white');
  }

  h3 > span {
    @apply bg-white/80;
  }

  :global(.dark) h3 > span {
    @apply bg-black/80;
  }

  @media screen(sm) {
    h3 {
      @apply text-22;
    }
  }
</style>
