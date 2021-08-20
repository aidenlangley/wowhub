import { readable } from 'svelte/store';

export const routes = readable([
  {
    name: 'kainga',
    path: '/',
    translation: 'home',
  },
  {
    name: 'tāku ratonga',
    path: '/services',
    translation: 'our services',
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
    name: 'blog',
    path: '/blog',
    translation: null,
  },
]);
