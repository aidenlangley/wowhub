import type { Readable } from 'svelte/store';
import { readable } from 'svelte/store';
import type { Route } from './types.d';

export const routes: Readable<Route[]> = readable([
  {
    name: 'kainga',
    path: '/',
    translation: 'home',
  },
  {
    name: 'ngā kaimahi',
    path: '/team',
    translation: 'the team / workers',
  },
  {
    name: 'tātou hoa',
    path: '/friends',
    translation: 'our friends',
  },
  {
    name: 'panui & docs',
    path: '/news',
    translation: 'news',
  },
]);
