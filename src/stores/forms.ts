import { Readable, readable } from 'svelte/store';
import type { Form } from './types';

export const forms: Readable<Form[]> = readable([
  {
    title: 'Whakaoranga Whanau Recovery Hub Registration',
    description:
      'Register your interest in Whakaoranga Whanau Recovery Hub services',
    url: 'https://forms.gle/9BSJcMKjP1XgjCaP9',
  },
  {
    title: 'Freedom Whare Interest',
    description: 'Register interest in Freedom Whare housing solutions',
    url: 'https://forms.gle/MT22azTPYCyum3St9',
  },
]);
