import type { Readable } from 'svelte/store';
import { readable } from 'svelte/store';
import type { Member } from './types.d';
import { assets } from '$app/paths';

export const team: Readable<Member[]> = readable([
  {
    name: 'Dee',
    tags: ['peer support', 'māoritanga'],
    about: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  ' +
        'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ' +
        'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' +
        'ex ea commodo consequat.',
    ],
    frontline: true,
    imgSrc: `${assets}/images/people/dee.jpg`,
    tallImg: true,
  },
  {
    name: 'Rhonda',
    tags: ['management', 'clinical'],
    about: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  ' +
        'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ' +
        'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' +
        'ex ea commodo consequat.',
    ],
    frontline: true,
    imgSrc: `${assets}/images/people/rhonda.jpg`,
  },
  {
    name: 'Jane',
    tags: ['peer support', 'founder'],
    about: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  ' +
        'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ' +
        'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' +
        'ex ea commodo consequat.',
    ],
    frontline: true,
    imgSrc: `${assets}/images/people/jane.jpg`,
  },
  {
    name: 'Kamina',
    tags: ['administration', 'logistics'],
    about: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  ' +
        'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ' +
        'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' +
        'ex ea commodo consequat.',
    ],
    frontline: true,
    imgSrc: `${assets}/images/people/kamina.jpg`,
  },
]);
