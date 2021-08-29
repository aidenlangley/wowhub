<script lang="ts">
  import LogoWhite from '$assets/images/logo/logo-white.png';
  import Logo from '$assets/images/logo/logo.png';
  import { blur } from 'svelte/transition';

  export let white = false;
  const alt = 'wowhub logo';
</script>

{#if !white}
  <img src={Logo} {alt} in:blur />
{:else}
  <img src={LogoWhite} {alt} in:blur />
{/if}
