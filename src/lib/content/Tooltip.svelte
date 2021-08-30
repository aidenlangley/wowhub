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
    top: 125%;
    right: 10%;

    /* Styling. */
    @apply p-1 w-max max-w-xs text-base text-gray-100;
    @apply font-mono font-normal tracking-tighter leading-tight;
    @apply bg-gray-900/90 border rounded border-gray-700 shadow;
  }

  @screen lg {
    span[data-tooltip]:hover::after {
      @apply text-18;
    }
  }
</style>
