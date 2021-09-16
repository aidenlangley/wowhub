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
  @import './tooltip.css';
</style>
