<script lang="ts">
  import bannerWhite from '$img/banner-white.png';
  import banner from '$img/banner.png';
  import { blur } from 'svelte/transition';

  export let white = false;
  const alt = 'wowhub banner';
</script>

<!--
  @component
  Whakaoranga Whanau Recovery Hub banner, text + logo.
-->
{#if !white}
  <img src={banner} {alt} in:blur />
{:else}
  <img src={bannerWhite} {alt} in:blur />
{/if}
