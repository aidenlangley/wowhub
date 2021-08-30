<script lang="ts">
  export let center = false;
</script>

<h3 class:sm:text-center={center}>
  <slot />
</h3>

<style lang="postcss">
  h3 {
    padding-bottom: 0.5rem; /* 8px */
    padding-top: 0.5rem; /* 8px */

    font-weight: 300;
    letter-spacing: -0.025em;
    @apply text-18;
  }

  @screen sm {
    h3 {
      @apply text-22;
    }
  }
</style>
