<script lang="ts">
  import bannerWhite from '$img/banner-white.webp';
  import banner from '$img/banner.webp';
  import { blur } from 'svelte/transition';

  export let white = false;
  const alt = 'wowhub banner';
  const width = 1440;
  const height = 273;
</script>

<!--
  @component
  Whakaoranga Whanau Recovery Hub banner, text + logo.
-->
{#if !white}
  <img src={banner} {alt} {width} {height} in:blur />
{:else}
  <img src={bannerWhite} {alt} {width} {height} in:blur />
{/if}
