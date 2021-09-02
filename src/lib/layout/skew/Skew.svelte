<script lang="ts">
  import type { GradientColour } from '../types.d'
  import type { SkewDirection } from './types.d'

  export let id: string
  export let direction: SkewDirection
  export let colour: GradientColour
</script>

<!--
  @component
  Defines a grid, the `Skewed` div will be placed behind the content `slot`
  via `z-index`.
-->
<div id="{id}-skewed-bg" class="skewed-grid">
  <div class="skewed-bg {direction} {colour}" />
  <div class="content column pad-y gaps-y">
    <slot />
  </div>
</div>

<style lang="postcss">
  div.skewed-grid {
    display: grid;
    grid-template-areas: 'skewed';

    & > div.skewed-bg {
      grid-area: skewed;
      z-index: 0;

      &.skew-left,
      &.skew-right {
        border-bottom-width: theme('borderWidth.4');
        border-top-width: theme('borderWidth.2');

        @apply drop-shadow;

        @screen sm {
          border-bottom-width: theme('borderWidth.8');
          border-radius: theme('borderRadius.3xl');
        }
      }

      &.skew-left {
        background-image: theme('backgroundImage.gradient-to-bl');
        transform: skewY(-1deg);
      }

      &.skew-right {
        background-image: theme('backgroundImage.gradient-to-br');
        transform: skewY(1deg);
      }
    }

    & > div.content {
      grid-area: skewed;
      padding-bottom: theme('padding.12');
      padding-top: theme('padding.12');
      z-index: 1;

      @screen sm {
        padding-bottom: theme('padding.14');
        padding-top: theme('padding.14');
      }

      @screen md {
        padding-bottom: theme('padding.16');
        padding-top: theme('padding.16');
      }

      @screen lg {
        padding-bottom: theme('padding.20');
        padding-top: theme('padding.20');
      }
    }
  }
</style>
