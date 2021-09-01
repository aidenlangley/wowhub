<script>
  import { BackgroundColour } from '$lib/layout/translate/types.d';
  import { GradientColour } from '$lib/layout/types.d';
  import Heading from './heading/Heading.svelte';
</script>

<div class="column">
  <Heading bg={BackgroundColour.Yellow} fg={GradientColour.Yellow}>
    <span class="message">
      <h1>Under construction...</h1>
      <small>Check back later.</small>
    </span>
  </Heading>
</div>

<style lang="postcss">
  span.message {
    font-family: theme('fontFamily.mono');
    letter-spacing: theme('letterSpacing.tighter');
    text-align: center;

    & > h1 {
      font-weight: theme('fontWeight.black');
      padding-bottom: theme('padding.2');

      @apply text-26;

      @screen sm {
        @apply text-40;
      }

      @screen lg {
        @apply text-56;
      }
    }

    & > small {
      font-weight: theme('fontWeight.medium');

      @apply text-20;

      @screen sm {
        @apply text-28;
      }
    }
  }
</style>
