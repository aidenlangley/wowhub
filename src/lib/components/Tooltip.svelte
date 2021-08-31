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
  }

  span[data-tooltip]:hover::after {
    border-radius: 0.25rem; /* 4px */
    border-width: 1px;

    /* Key styles for tooltip content (visibility) and position. */
    content: attr(data-tooltip);
    font-family: theme('fontFamily.mono');
    font-size: 0.875rem; /* 14px */
    letter-spacing: -0.05em;
    line-height: 0.875rem; /* 14px */
    max-width: 20rem; /* 320px */

    /* Styling. */
    padding: 0.5rem; /* 8px */
    position: absolute;
    right: 10%;
    top: 150%;
    width: max-content;
    z-index: 1;

    @apply text-gray-100 bg-gray-900/90 border-gray-700 shadow;
  }

  @screen ty {
    span[data-tooltip]:hover::after {
      font-size: 1rem; /* 16px */
      line-height: 1.5rem; /* 24px */
    }
  }

  @screen lg {
    span[data-tooltip]:hover::after {
      font-size: 1.125rem; /* 18px */
      line-height: 1.5rem; /* 24px */
    }
  }
</style>
