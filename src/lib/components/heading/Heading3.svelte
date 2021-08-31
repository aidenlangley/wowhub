<script lang="ts">
  export let center = false;
</script>

<h3 class:sm:text-center={center}>
  <slot />
</h3>

<style lang="postcss">
  h3 {
    @apply text-18;

    font-weight: theme('fontWeight.light');
    letter-spacing: theme('letterSpacing.tight');
    padding-bottom: theme('padding.2');
    padding-top: theme('padding.2');

    @screen sm {
      @apply text-22;
    }
  }
</style>
