<script lang="ts">
  import { BackgroundColour } from '$lib/layout/translate/types.d';
  import { GradientColour } from '$lib/layout/types.d';
  import Heading from './heading/Heading.svelte';
</script>

<section class="column pad-x">
  <Heading bg={BackgroundColour.Yellow} fg={GradientColour.Yellow}>
    <slot>
      <span class="message">
        <h1>Under construction...</h1>
        <small>Check back later. Contact details are in the footer.</small>
      </span>
    </slot>
  </Heading>
</section>

<style lang="postcss">
  span.message {
    font-family: theme('fontFamily.mono');
    letter-spacing: theme('letterSpacing.tighter');

    & > h1 {
      font-weight: theme('fontWeight.black');
      padding-bottom: theme('padding.2');

      @apply text-26;

      @media screen(sm) {
        @apply text-40;
      }

      @media screen(lg) {
        @apply text-56;
      }
    }

    & > small {
      font-weight: theme('fontWeight.medium');

      @apply text-20;

      @media screen(sm) {
        @apply text-28;
      }
    }
  }
</style>
