import { SvelteComponentTyped } from 'svelte';

export interface InputCheckboxProps {
  label: string;
  group: string[];
  checked: bool;
}

export default class InputCheckboxProps extends SvelteComponentTyped<InputCheckboxProps> {}
