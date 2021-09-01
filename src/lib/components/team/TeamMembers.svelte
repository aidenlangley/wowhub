<script lang="ts">
  import { team } from '$store/team';
  import TeamMemberCard from './TeamMemberCard.svelte';
</script>

{#each $team as member (member.name)}
  <TeamMemberCard {member} />
{/each}
