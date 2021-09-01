<script lang="ts">
  import Translate from '$layout/translate/Translate.svelte';
  import { TranslateDirection } from '$layout/translate/types.d';
</script>

<Translate direction={TranslateDirection.BottomRight}>
  <h1 class="gradient-green">
    <slot />
  </h1>
</Translate>

<style lang="postcss">
  h1 {
    font-family: theme('fontFamily.serif');
    font-weight: theme('fontWeight.medium');
    padding: theme('padding.1');

    @apply text-26;

    @screen sm {
      font-weight: theme('fontWeight.bold');
      padding: theme('padding.2');

      @apply text-32;
    }

    @screen md {
      padding: theme('padding.3');

      @apply text-40;
    }

    @screen lg {
      padding: theme('padding.4');

      @apply text-56;
    }

    @screen xl {
      @apply text-64;
    }
  }
</style>
