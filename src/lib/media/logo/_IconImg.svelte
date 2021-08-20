<script lang="ts">
  import { style } from '../_Icon.svelte';
  export let src: string;
  export let alt: string;
</script>

<img {src} {alt} class={style} />
