<script lang="ts">
  import { style } from '../_Icon.svelte';

  export let src: string;
  export let alt: string;
</script>

<!--
  @component
  Wraps images to ensure styling is the same for images used as `Icons`.
-->
<img {src} {alt} class={style} />
