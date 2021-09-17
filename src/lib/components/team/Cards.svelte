<script lang="ts">
  import type { Member } from '$store/types';
  import Card from './Card.svelte';

  export let team: Member[];
</script>

<!--
  @component
  Wraps a list of `Card`.
-->
<div class="bg">
  <div class="bg-inner gradient-gray fill pad-y gaps-y">
    {#each team as member, index}
      {#if index % 2 !== 0}
        <Card {member} />
      {:else}
        <Card {member} right />
      {/if}
    {/each}
  </div>
</div>

<style>
  @import './cards.css';
</style>
