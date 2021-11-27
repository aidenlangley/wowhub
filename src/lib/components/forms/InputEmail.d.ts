import { SvelteComponentTyped } from 'svelte';

export interface InputEmailProps {
  label: string;
  email: string;
  placeholder: string;
  hideLabel: bool;
}

export default class InputEmailProps extends SvelteComponentTyped<InputEmailProps> {}
