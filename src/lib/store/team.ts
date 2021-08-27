import type { Readable } from 'svelte/store';
import { readable } from 'svelte/store';
import type { Member } from './team.d';
import { assets } from '$app/paths';

export const team: Readable<Member[]> = readable([
  {
    name: 'Rhonda',
    tags: ['management', 'clinical'],
    about: ['home'],
    frontline: true,
    imgSrc: `${assets}/images/people/rhonda.jpg`,
  },
]);
