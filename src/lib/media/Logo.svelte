<script lang="ts">
  import LogoWhite from '$images/logo/logo-white.png';
  import Logo from '$images/logo/logo.png';
  import { blur } from 'svelte/transition';

  export let white = false;
  const alt = 'wowhub logo';
</script>

{#if !white}
  <img src={Logo} {alt} in:blur />
{:else}
  <img src={LogoWhite} {alt} in:blur />
{/if}

<style class="postcss">
  /* Since it's a tall image, not square, we'll hack it up a lil. */
  img {
    padding-bottom: theme('padding.2');
    padding-top: theme('padding.2');
  }
</style>
