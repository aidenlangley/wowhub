<script lang="ts">
  import { team } from '$store/team';
  import Card from './Card.svelte';
</script>

<!--
  @component
  Wraps a list of `Card`.
-->
<div class="bg">
  <div class="bg-inner gradient-gray fill pad-y gaps-y">
    {#each $team as member, index}
      {#if index % 2 !== 0}
        <Card {member} />
      {:else}
        <Card {member} right />
      {/if}
    {/each}
  </div>
</div>

<style lang="postcss">
  @import './cards.css';
</style>
