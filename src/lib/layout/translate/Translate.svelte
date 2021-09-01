<script lang="ts">
  import type TranslateDirection from './types.d';

  export let direction: typeof TranslateDirection;
</script>

<div class="bg">
  <h1>
    <slot />
  </h1>
</div>

<style lang="postcss">
  div.bg {
    background-color: theme('colors.black');
    font-family: theme('fontFamily.serif');
    max-width: fit-content;

    @apply text-56;

    & > h1 {
      background-color: theme('colors.green.300');
      color: theme('colors.black');
      padding: theme('padding.2');

      @apply translate-x-2 translate-y-2;
    }
  }
</style>
