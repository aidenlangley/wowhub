<script lang="ts">
  import { team } from '$store/team';
  import TeamMemberCard from './TeamMemberCard.svelte';
</script>

<!--
  @component
  Wraps a list of `TeamMemberCard`. No background on `< sm` screens, but colour
  kicks in `> sm`. Requires 2 divs for a two-tone rotated look.
-->
<div class="bg">
  <div class="bg-inner gradient-gray fill pad-y gaps-y">
    {#each $team as member, index}
      {#if index % 2 !== 0}
        <TeamMemberCard {member} />
      {:else}
        <TeamMemberCard {member} right />
      {/if}
    {/each}
  </div>
</div>

<style lang="postcss">
  @import './team-member-cards.css';
</style>
