import { SvelteComponentTyped } from 'svelte';

export interface InputTextProps {
  label: string;
  text: string;
  placeholder: string;
  hideLabel: bool;
  required: boolean;
}

export default class InputTextProps extends SvelteComponentTyped<InputTextProps> {}
