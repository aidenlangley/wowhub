<script lang="ts">
  export let text: string;
</script>

<!--
  @component
  Simple tooltip component, heavy lifting is in CSS.
-->
<span data-tooltip={text} aria-haspopup="true">
  <slot />
</span>

<style lang="postcss">
  span[data-tooltip] {
    position: relative;

    &:hover,
    &:focus {
      &::after {
        border-color: theme('colors.gray.700');
        border-radius: theme('borderRadius.DEFAULT');
        border-width: theme('borderWidth.DEFAULT');
        box-shadow: theme('boxShadow.DEFAULT');
        color: theme('colors.gray.100');
        content: attr(data-tooltip);
        font-family: theme('fontFamily.mono');
        letter-spacing: theme('letterSpacing.tighter');
        max-width: theme('maxWidth.xs');
        padding: theme('padding.2');
        position: absolute;
        right: 10%;
        top: 150%;
        width: max-content;
        z-index: 1;

        @apply text-14 bg-gray-900/90;

        @screen ty {
          @apply text-base;
        }

        @screen lg {
          @apply text-18;
        }
      }
    }
  }
</style>
