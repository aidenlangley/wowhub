import { SvelteComponentTyped } from 'svelte';

export interface InputSelectProps {
  label: string;
  options: string[];
}

export default class InputSelectProps extends SvelteComponentTyped<InputSelectProps> {}
