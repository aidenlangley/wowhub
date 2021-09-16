import { readable } from 'svelte/store';

export const info = readable({
  phone: '+6494010975',
  email: 'info@wowhub.co.nz',
  facebookGroup: 'https://www.facebook.com/groups/510722916364116',
  google: 'https://goo.gl/maps/WrvBZvvEy1SKGqVS7',
  forms: [
    {
      title: 'registration',
      description:
        'register your interest in Whakaoranga Whanau Recovery Hub services',
      url: 'https://forms.gle/9BSJcMKjP1XgjCaP9',
    },
  ],
});
