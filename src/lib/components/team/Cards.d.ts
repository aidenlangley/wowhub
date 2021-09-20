import { SvelteComponentTyped } from 'svelte';
import { TeamMember } from '/TeamMember';

export interface TeamMemberCardsProps {
  team: TeamMember[];
}

export default class Foo extends SvelteComponentTyped<TeamMemberCardsProps> {}
