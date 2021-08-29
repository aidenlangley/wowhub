<script lang="ts">
  import SignageWhite from '$assets/images/signage-white.png';
  import Signage from '$assets/images/signage.png';
  import { blur } from 'svelte/transition';

  export let white = false;
  const alt = 'wowhub signage';
</script>

{#if !white}
  <img src={Signage} {alt} in:blur />
{:else}
  <img src={SignageWhite} {alt} in:blur />
{/if}
