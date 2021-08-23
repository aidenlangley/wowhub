import { readable } from 'svelte/store';

export const news = readable([
  {
    pubDate: new Date(2021, 8, 23),
    path: '/news/20210823_noho_marae',
    title: 'Noho Marae',
    summary: 'We are hosting a marae noho. Read more here!',
  },
]);
