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
    /* Key styles for tooltip content (visibility) and position. */
    content: attr(data-tooltip);
    position: absolute;
    z-index: 1;
    top: 150%;
    right: 10%;

    /* Styling. */
    padding: 0.5rem; /* 8px */
    width: max-content;
    max-width: 20rem; /* 320px */

    @apply text-14;
    letter-spacing: -0.05em;

    border-width: 1px;
    border-radius: 0.25rem; /* 4px */

    @apply text-gray-100 font-mono bg-gray-900/90 border-gray-700 shadow;
  }

  @screen ty {
    span[data-tooltip]:hover::after {
      @apply text-base;
    }
  }

  @screen lg {
    span[data-tooltip]:hover::after {
      @apply text-18;
    }
  }
</style>
