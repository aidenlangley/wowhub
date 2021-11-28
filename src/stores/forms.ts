import { readable } from 'svelte/store';

export const forms = readable([
  {
    title: 'Whakaoranga Whanau Registration',
    url: '/reg/whanau'
  },
  {
    title: 'Angry Birds Enrollment',
    url: 'https://forms.gle/xoLobfziBcRFZbc9A'
  },
  {
    title: 'AOD Education & Counsel Enrollment',
    url: 'https://forms.gle/CWD8APGsRKy3bmGb7'
  },
  {
    title: 'Whare 2 the Whenua Interest Form',
    url: 'https://forms.gle/j9TkR4Nfo4CoAfJ49'
  }
]);
