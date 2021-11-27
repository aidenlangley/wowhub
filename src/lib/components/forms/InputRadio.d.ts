import { SvelteComponentTyped } from 'svelte';

export interface InputRadioProps {
  label: string;
  options: string[];
}

export default class InputRadioProps extends SvelteComponentTyped<InputRadioProps> {}
