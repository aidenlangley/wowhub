import { writable } from 'svelte/store';

export const seo = writable({
	title: 'Whakaoranga Whanau Recovery Hub', // default title
	description: 'Community AOD & Recovery Services', // default description
	robots: 'none' // equiv of "index, follow"
});
