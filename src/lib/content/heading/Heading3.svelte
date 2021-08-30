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

    font-size: 1.125rem; /* 18px */
    line-height: 1.5rem; /* 24px */
  }

  @screen sm {
    h3 {
      font-size: 1.375rem; /* 22px */
      line-height: 1.75rem; /* 28px */
    }
  }
</style>
