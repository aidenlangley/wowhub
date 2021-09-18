<script lang="ts">
  import logoWhite from '$images/logo-white.png';
  import logo from '$images/logo.png';
  import { blur } from 'svelte/transition';

  export let white = false;
  const alt = 'wowhub logo';
</script>

{#if !white}
  <img src={logo} {alt} in:blur />
{:else}
  <img src={logoWhite} {alt} in:blur />
{/if}

<style>
  img {
    max-height: theme('height.12');
  }
</style>
