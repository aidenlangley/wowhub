<script lang="ts">
  export let justify = false;
</script>

<p class:text-justify={justify}>
  <slot />
</p>

<style lang="postcss">
  p {
    letter-spacing: theme('letterSpacing.tighter');
    padding-bottom: theme('padding.1');
    padding-top: theme('padding.1');

    @nest :global(.dark) & {
      color: theme('colors.white');
    }

    @screen md {
      @apply text-18;
    }

    @screen lg {
      padding-bottom: theme('padding.2');
      padding-top: theme('padding.2');
    }

    @screen xl {
      line-height: theme('lineHeight.relaxed');

      @apply text-20;
    }
  }
</style>
