<script lang="ts">
  import { style } from '$lib/media/_Icon.svelte';
</script>

<!--
  @component
  Wraps other SVG components so that the styling & viewbox remains the same.
-->
<svg
  xmlns="http://www.w3.org/2000/svg"
  class={style}
  viewBox="0 0 18 18"
  fill="currentColor"
  aria-hidden="true"
>
  <slot />
</svg>
