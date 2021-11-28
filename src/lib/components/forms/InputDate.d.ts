import { SvelteComponentTyped } from 'svelte';

export interface InputDateProps {
  label: string;
  date: Date;
}

export default class InputDateProps extends SvelteComponentTyped<InputDateProps> {}
