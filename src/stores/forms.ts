import { readable } from 'svelte/store';

export const forms = readable([
  {
    title: 'Whakaoranga Whanau Registration',
    description:
      'Register your interest in Whakaoranga Whanau Recovery Hub services',
    url: 'https://forms.gle/9BSJcMKjP1XgjCaP9'
  },
  {
    title: 'Angry Birds Enrollment',
    description: '',
    url: 'https://forms.gle/Nd4B7t79btkcvR5r9'
  },
  {
    title: 'AOD Education & Counsel Enrollment',
    description: '',
    url: 'https://forms.gle/7WqtPdmuKCbmrKX46'
  },
  {
    title: 'Whare 2 the Whenua Interest Form',
    description: 'Register interest in Freedom Whare housing solutions',
    url: 'https://forms.gle/MT22azTPYCyum3St9'
  }
]);
