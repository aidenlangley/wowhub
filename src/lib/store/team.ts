import { assets } from '$app/paths';
import type { Readable } from 'svelte/store';
import { readable } from 'svelte/store';
import type { Member } from './types.d';

export const team: Readable<Member[]> = readable([
  // jane first, dee, rhonda,
  {
    name: 'Jane',
    tags: ['founder', 'peer support'],
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
    name: '🌊 Dee',
    tags: ['kaimanaaki', 'peer support'],
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
        'checked herself into treatment & completed her programme in 2015 and ' +
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
      'Ko Maungaemiemi tōku maunga, ko Whangaroa tōku maunga',
      'ko Kaingapipiwai tōku awa',
      'ko Mataatua tōku waka',
      'ko Pupuke tōku marae',
      'ko Te Huia tōku whare tūpuna',
      'ko Ngapuhi tōku iwi',
      'ko Ngatipakahi tōku hapu',
      'ko Aaron Toki tōku hoa rangatira',
      'ko Shannyn, ko Rawiri, ko Julian, ko Fern āku tamariki',
      'ko nahi ahau',
      'ko Kaikohe tōku kainga noho',
      'ko Rhonda Zielinski ahau',
    ],
    about: [
      'Rhonda is a registered Nurse and helped establish Whakaoranga Whanau ' +
        'Recovery Hub in March 2020 alongside Jane. Born & bred in Rotorua, ' +
        'Rhonda moved North with her parents at the age of 13 and has lived ' +
        'in Kaikohe ever since. Rhonda also helps with Freedom Whare as a ' +
        'directory of Whakamanamai Whanau Charitable Trust; Freedom Whare ' +
        'help whanau with housing solutions.',
    ],
    frontline: true,
    imgSrc: `${assets}/images/people/rhonda.jpg`,
    tallImg: true,
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
    tags: ['he waka eke noa', 'kaimanaaki', 'peer support'],
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
