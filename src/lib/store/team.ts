import { assets } from '$app/paths';
import type { Readable } from 'svelte/store';
import { readable } from 'svelte/store';
import type { Member } from './types.d';

export const team: Readable<Member[]> = readable([
  {
    name: '🌊 Dee',
    tags: ['kaimanaki', 'māoritanga'],
    pepeha: [
      'Ko Hikurangi te maunga',
      'ko Ngātokimatawhaorua te waka',
      'ko Matawaia te marae',
      'ko Ngatihine te hapu',
      'ko Ngapuhi te iwi',
      'ko Deeann Herkt Kopa ahau',
    ],
    about: [
      "Deeann Herkt is a peer support worker. She's been clean and sober for " +
        '6 years after being addicted to methamphetamine for many years. Dee ' +
        'checked herself into treamtent & completed her programme in 2015 and ' +
        'is now very passionate about helping the next addict in their recovery.',
    ],
    frontline: true,
    imgSrc: `${assets}/images/people/dee.jpg`,
    tallImg: true,
  },
  {
    name: 'Rhonda',
    tags: ['clinical', 'co-founder & trustee', 'manager'],
    pepeha: [
      'Ko Maungaemiemi toku maunga, ko Whangaroa toku maunga',
      'ko Kaingapipiwai toku awa',
      'ko Mataatua toku waka',
      'ko Pupuke toku marae',
      'ko Te Huia toku whare tūpuna',
      'ko Ngapuhi toku iwi',
      'ko Ngatipakahi toku hapu',
      'ko Shannyn, ko Rawiri, ko Julian, ko Hern toku tamariki',
      'ko nahi ahau',
      'ko Kaikohe toku kainga noho',
      'ko Rhonda Zielinski ahau',
    ],
    about: [
      'Rhonda is a registered Nurse and helped establish Whakaoranga Whanau ' +
        'Recovery Hub in March 2020 alongside Jane. Born & bred in Rotorua, ' +
        'Rhonda moved North with her parents at the age of 13 and has lived ' +
        'in Kaikohe ever since. Freedom Whare is also her tamariki hinengaro ' +
        'which addresses homesless in the community.',
    ],
    frontline: true,
    imgSrc: `${assets}/images/people/rhonda.jpg`,
    tallImg: true,
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
    name: '🔥 Matua Stu & Whaea Bess',
    tags: ['he waka eke noa', 'aod counselling'],
    about: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  ' +
        'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ' +
        'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' +
        'ex ea commodo consequat.',
    ],
    frontline: true,
    imgSrc: `${assets}/images/people/stu-bess.jpg`,
    tallImg: true,
  },
  {
    name: 'Kamina',
    tags: ['administration', 'logistics'],
    pepeha: [
      'Ko Moehau te maunga',
      'ko Ti Kapa te awak',
      'ko Tainui te waka',
      'ko Mainai te marae',
      'ko Ngati Pukenga, Ngati Whanaunga ngā hapu',
      'ko Maru Tuahu te iwi',
      'ko Kamina McSheffrey ahau',
    ],
    about: [
      'Kamina has been living in Kaikohe for 3 years now, her grandmother ' +
        "was born in Waima. She's a qualified Kaiako for Te Ataarangi, total " +
        'immersion  te reo Māori. She has worked for Te Whare Wananga o ' +
        'Awanuiarangi, Hamilton, I was head kaiako for Tumatauenga Kohanga ' +
        'Reo in Linton, Palmerston North & have been working in ' +
        'administration & office management for 15 years in Auckland. Just ' +
        'like the rest of our team, she also has lived experience with AOD.',
    ],
    frontline: true,
    imgSrc: `${assets}/images/people/kamina.jpg`,
  },
  {
    name: '👩‍⚕️ Lisa',
    tags: ['clinical lead', 'mental health'],
    about: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  ' +
        'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ' +
        'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' +
        'ex ea commodo consequat.',
    ],
    frontline: true,
    // imgSrc: `${assets}/images/people/kamina.jpg`,
  },

  {
    name: 'Noreen',
    tags: ['he waka eke noa', 'peer support'],
    about: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  ' +
        'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ' +
        'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' +
        'ex ea commodo consequat.',
    ],
    frontline: true,
    imgSrc: `${assets}/images/people/noreen.jpg`,
  },
  {
    name: '💻 Aiden',
    tags: ['software engineer', 'self referral'],
    about: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  ' +
        'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ' +
        'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' +
        'ex ea commodo consequat.',
    ],
    frontline: true,
    imgSrc: `${assets}/images/people/aiden.jpg`,
    tallImg: true,
  },
]);
