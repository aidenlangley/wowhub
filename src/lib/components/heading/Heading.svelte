<script lang="ts">
  import Translate from '$layout/translate/Translate.svelte';
  import {
    BackgroundColour,
    TranslateDirection,
  } from '$layout/translate/types.d';
  import { GradientColour } from '$layout/types.d';

  export let direction: TranslateDirection = TranslateDirection.BottomRight;
  export let bg: BackgroundColour = BackgroundColour.Green;
  export let fg: GradientColour = GradientColour.Green;
</script>

<Translate {direction} colour={bg}>
  <h1 class={fg}>
    <slot />
  </h1>
</Translate>

<style lang="postcss">
  h1 {
    border-radius: theme('borderRadius.DEFAULT');
    font-family: theme('fontFamily.serif');
    font-weight: theme('fontWeight.medium');
    padding: theme('padding.1');

    @apply text-28;
  }

  @media screen(sm) {
    h1 {
      font-weight: theme('fontWeight.bold');
      padding: theme('padding.2');
    }
  }

  @media screen(md) {
    h1 {
      padding: theme('padding.3');

      @apply text-40;
    }
  }

  @media screen(lg) {
    h1 {
      padding: theme('padding.4');

      @apply text-56;
    }
  }

  @media screen(xl) {
    h1 {
      @apply text-64;
    }
  }
</style>
