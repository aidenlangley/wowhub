import { SvelteComponentTyped } from 'svelte';

export interface InputPhoneProps {
  label: string;
  number: string;
  placeholder: string;
  hideLabel: bool;
}

export default class InputPhoneProps extends SvelteComponentTyped<InputPhoneProps> {}
