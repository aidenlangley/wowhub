<h1>
  <slot />
</h1>

<style lang="postcss">
  h1 {
    font-family: theme('fontFamily.serif');
    font-weight: theme('fontWeight.bold');
    padding-bottom: theme('padding.2');
    padding-top: theme('padding.2');

    @apply text-28;

    @screen sm {
      padding-bottom: theme('padding.4');
      padding-top: theme('padding.4');

      @apply text-42;
    }

    @screen lg {
      padding-bottom: theme('padding.8');
      padding-top: theme('padding.8');

      @apply text-64;
    }
  }
</style>
