import { SvelteComponentTyped } from 'svelte';

export interface InputTextProps {
  label: string;
  text: string;
}

export default class InputTextProps extends SvelteComponentTyped<InputTextProps> {}
