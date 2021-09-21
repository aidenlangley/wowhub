<script lang="ts">
  import type { TeamMember } from '$types/TeamMember';
  import TeamMemberCard from './card/TeamMemberCard.svelte';

  export let team: TeamMember[];
</script>

<!--
  @component
  Wraps a list of `Card`.
-->
<div class="bg">
  <div class="bg-inner gradient-gray fill pad-y gaps-y">
    {#each team as member, index}
      {#if index % 2 !== 0}
        <TeamMemberCard {member} />
      {:else}
        <TeamMemberCard {member} right />
      {/if}
    {/each}
  </div>
</div>

<style>
  @import './team-member-cards.css';
</style>
