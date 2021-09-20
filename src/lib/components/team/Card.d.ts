import { SvelteComponentTyped } from 'svelte';
import { TeamMember } from '/TeamMember';

export interface TeamMemberCardProps {
  member: TeamMember;
  right: boolean;
}

export default class Foo extends SvelteComponentTyped<TeamMemberCardProps> {}
