import { readable } from 'svelte/store';

export const forms = readable({
  forms: [
    {
      title: 'registration',
      description:
        'register your interest in Whakaoranga Whanau Recovery Hub services',
      url: 'https://forms.gle/9BSJcMKjP1XgjCaP9',
    },
  ],
});
