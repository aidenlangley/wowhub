<script lang="ts">
  import LogoWhite from '$images/logo-white.png';
  import Logo from '$images/logo.png';
  import { blur } from 'svelte/transition';

  export let white = false;
  const alt = 'wowhub logo';
</script>

{#if !white}
  <img src={Logo} {alt} in:blur />
{:else}
  <img src={LogoWhite} {alt} in:blur />
{/if}

<style>
  img {
    max-height: theme('height.12');
  }
</style>
