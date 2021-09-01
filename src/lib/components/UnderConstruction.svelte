<script>
  import { Colour } from '$layout/Gradient.d';
  import { Direction, Strength } from '$layout/Skew.d';
  import Skew from '$layout/Skew.svelte';
</script>

<Skew
  direction={Direction.Right}
  strength={Strength.None}
  colour={Colour.Yellow}
>
  <span class="message">
    <h1>Under construction...</h1>
    <small>Check back later.</small>
  </span>
</Skew>

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
      color: theme('colors.gray.800');
      font-weight: theme('fontWeight.medium');

      @apply text-20;

      @screen sm {
        @apply text-28;
      }
    }
  }
</style>
