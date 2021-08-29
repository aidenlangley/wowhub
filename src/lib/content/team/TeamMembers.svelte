<script lang="ts">
  import { team } from '$lib/store/team';
  import TeamMemberCard from './TeamMemberCard.svelte';
</script>

{#each $team as member (member.name)}
  <TeamMemberCard {member} />
{/each}
