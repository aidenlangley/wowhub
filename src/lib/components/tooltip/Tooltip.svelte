<script lang="ts">
  import './tooltip-toggles.css';
  import './tooltip.css';

  export let text: string;

  /* Positional params */
  export let bottom = true;
  export let top = false;
  export let left = false;
  export let right = false;

  /*
  On mobile screens, a tooltip doesn't function quite right, so we allow
  toggling the tooltip via click
  */
  export let toggles = false;

  let toggled = false;
  const toggle = () => (toggled = !toggled);
</script>

<!--
  @component
  Simple tooltip component, heavy lifting is in CSS.
  The slot is the content that you would like to be decorated by a `Tooltip`.
-->
{#if toggles}
  <span
    data-tooltip={text}
    aria-haspopup="true"
    class:bottom={bottom && !top}
    class:top
    class:left
    class:right
    on:click={toggle}
    class:toggled
  >
    <slot />
  </span>
{:else}
  <span
    data-tooltip={text}
    aria-haspopup="true"
    class:bottom
    class:top
    class:left
    class:right
  >
    <slot />
  </span>
{/if}
