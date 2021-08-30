<script lang="ts">
  export let justify = false;
</script>

<p class:text-justify={justify}>
  <slot />
</p>

<style lang="postcss">
  p {
    padding-top: 0.25rem; /* 4px */
    padding-bottom: 0.25rem; /* 4px */
    letter-spacing: -0.05em;
  }

  @screen md {
    p {
      letter-spacing: -0.025em;
      font-size: 1.125rem; /* 18px */
      line-height: 1.5rem; /* 24px */
    }
  }

  @screen lg {
    p {
      padding-top: 0.5rem; /* 8px */
      padding-bottom: 0.5rem; /* 8px */
    }
  }

  @screen xl {
    p {
      line-height: 1.625;
      font-size: 1.25rem; /* 20px */
      line-height: 1.75rem; /* 28px */
    }
  }
</style>
