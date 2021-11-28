import { SvelteComponentTyped } from 'svelte';

export interface InputTextProps {
  label: string;
  text: string;
  placeholder: string;
  hideLabel: bool;
}

export default class InputTextProps extends SvelteComponentTyped<InputTextProps> {}
