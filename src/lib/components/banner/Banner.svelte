<script lang="ts">
  import bannerWhite from '$img/banner-white.webp';
  import banner from '$img/banner.webp';
  import { blur } from 'svelte/transition';

  export let white = false;
  const alt = 'wowhub banner';
  const height = 273;
  const width = 1440;
</script>

<!--
  @component
  Whakaoranga Whanau Recovery Hub banner, text + logo.
-->
{#if !white}
  <img src={banner} {alt} {height} {width} in:blur />
{:else}
  <img src={bannerWhite} {alt} {height} {width} in:blur />
{/if}
