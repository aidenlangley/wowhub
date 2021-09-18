<script lang="ts">
  import signageWhite from '$images/signage-white.png';
  import signage from '$images/signage.png';
  import { blur } from 'svelte/transition';

  export let white = false;
  const alt = 'wowhub signage';
</script>

{#if !white}
  <img src={signage} {alt} in:blur />
{:else}
  <img src={signageWhite} {alt} in:blur />
{/if}
