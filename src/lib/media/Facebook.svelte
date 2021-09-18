<script lang="ts">
  import LogoBlack from '$images/facebook/logo-black.png';
  import LogoWhite from '$images/facebook/logo-white.png';
  import Logo from '$images/facebook/logo.png';
  import { blur } from 'svelte/transition';

  export let white = false;
  export let black = false;
  const alt = 'facebook logo';
</script>

{#if !white && !black}
  <img src={Logo} {alt} in:blur />
{:else if white}
  <img src={LogoWhite} {alt} in:blur />
{:else if black}
  <img src={LogoBlack} {alt} in:blur />
{/if}
