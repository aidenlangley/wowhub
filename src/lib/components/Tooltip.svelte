<script lang="ts">
  export let text: string;
  export let click = false;
  export let right = false;

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
    class:right
    aria-haspopup="true"
  >
    <slot />
  </span>
{:else}
  <span data-tooltip={text} class:right aria-haspopup="true">
    <slot />
  </span>
{/if}

<style lang="postcss">
  @import './tooltip.css';
</style>
