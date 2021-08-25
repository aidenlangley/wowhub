import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import type { Seo } from './seo.d';

export const seo: Writable<Seo> = writable({
  title: 'Whakaoranga Whanau Recovery Hub', // default title
  description: 'Community AOD & Recovery Services', // default description
  robots: 'none', // equiv of "index, follow"
});
