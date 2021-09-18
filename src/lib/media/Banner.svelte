<script lang="ts">
  import bannerWhite from '$images/banner-white.png';
  import banner from '$images/banner.png';
  import { blur } from 'svelte/transition';

  export let white = false;
  const alt = 'wowhub banner';
</script>

{#if !white}
  <img src={banner} {alt} in:blur />
{:else}
  <img src={bannerWhite} {alt} in:blur />
{/if}
