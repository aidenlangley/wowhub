<script lang="ts">
  import logoBlack from '$images/facebook/logo-black.png';
  import logoWhite from '$images/facebook/logo-white.png';
  import logo from '$images/facebook/logo.png';
  import { blur } from 'svelte/transition';

  export let white = false;
  export let black = false;
  const alt = 'facebook logo';
</script>

{#if !white && !black}
  <img src={logo} {alt} in:blur />
{:else if white}
  <img src={logoWhite} {alt} in:blur />
{:else if black}
  <img src={logoBlack} {alt} in:blur />
{/if}
