import { readable } from 'svelte/store';

export const forms = readable([
  {
    title: 'Whakaoranga Whanau Registration',
    url: '/reg/whanau'
  },
  {
    title: 'Angry Birds Enrollment',
    url: '/reg/angry-birds'
  },
  {
    title: 'AOD Education & Counsel Enrollment',
    url: '/reg/aod'
  },
  {
    title: 'Whare 2 the Whenua Interest Form',
    url: '/reg/whare2whenua'
  }
]);
