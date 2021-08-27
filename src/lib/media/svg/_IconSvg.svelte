<script lang="ts">
  import { style as defaultStyle } from '$lib/media/_Icon.svelte';

  export let style: string = defaultStyle;
  export let viewBox = '0 0 18 18';
</script>

<!--
  @component
  Wraps other SVG components so that the styling & viewbox remains the same.
-->
<svg
  xmlns="http://www.w3.org/2000/svg"
  class={style}
  {viewBox}
  fill="currentColor"
  aria-hidden="true"
>
  <slot />
</svg>
