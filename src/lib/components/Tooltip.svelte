<script lang="ts">
  export let text: string;
  export let click = false;

  let clicked = false;
</script>

<!--
  @component
  Simple tooltip component, heavy lifting is in CSS.
-->
{#if click}
  <span
    data-tooltip={text}
    on:click={() => {
      clicked = !clicked;
    }}
    class:clicked
    aria-haspopup="true"
  >
    <slot />
  </span>
{:else}
  <span data-tooltip={text} aria-haspopup="true">
    <slot />
  </span>
{/if}

<style lang="postcss">
  @import './tooltip.css';
</style>
