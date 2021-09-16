<script lang="ts">
  import BannerWhite from '$images/banner-white.png';
  import Banner from '$images/banner.png';
  import { blur } from 'svelte/transition';

  export let white = false;
  const alt = 'wowhub banner';
</script>

{#if !white}
  <img src={Banner} {alt} in:blur />
{:else}
  <img src={BannerWhite} {alt} in:blur />
{/if}
