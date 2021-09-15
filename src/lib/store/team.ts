import { assets } from '$app/paths';
import type { Readable } from 'svelte/store';
import { readable } from 'svelte/store';
import type { Member } from './types.d';

export const team: Readable<Member[]> = readable([
  {
    name: 'Jane 🌊',
    tags: ['founder', 'peer support', 'tuakana'],
    pepeha: [
      'Ko wai au?',
      'Ko Whakapoungakau tōku Maunga',
      'Ko Kaituna tōku Awa',
      'Ko Ruamata tōku marae',
      'Ko Ngāti Pikiao, Ngāti Whakaue ōku hapū',
      'Ko Te Arawa tōku Iwi',
      'Ko Te Arawa tōku waka',
      'Ko Jane Beamsley ahau',
    ],
    about: [
      `Jane is the founder of Whakaoranga Whanau Recovery Hub. Although she
      has no ties to Kaikohe, she was brought up by her Te Arawa
      whakapapa, her grandfathers whakapapa, Ngati Te Roroa and Kahungunu.`,
      `Jane is of Māori and pakeha descent and she shares personal lived
      experience; mainting mental wellbeing, as well as alcohol and drug
      addiction.`,
      `Her recovery journey has brought her to kaikohe and she
      wanted to give back and share the gifts of recovery to others who
      maybe struggling. She couldn’t do this journey alone. He waka eke noa!`,
    ],
    frontline: true,
    imgSrc: `${assets}/images/people/jane.jpg`,
  },
  {
    name: 'Dee 🔥',
    tags: ['kaimanaki', 'peer support', 'tuakana'],
    about: [
      'Deeann Herkt is a peer support worker.',
      `She's been clean and sober for 6 years after being addicted to
      methamphetamine for many years.`,
      `Dee checked herself into treatment & completed her programme in 2015 and
      is now very passionate about helping the next addict in their recovery.`,
    ],
    pepeha: [
      'Ko Hikurangi tōku Maunga',
      'Ko Ngātokimatawhaorua tōku waka',
      'Ko Matawaia tōku marae',
      'Ko Ngāti Hine tōku hapu',
      'Ko Ngāpuhi tōku Iwi',
      'Ko Deeann Herkt Kopa ahau',
    ],
    frontline: true,
    imgSrc: `${assets}/images/people/dee.jpg`,
    tallImg: true,
  },
  {
    name: 'Rhonda 🔥',
    tags: ['manager', 'co-founder', 'nurse', 'trustee'],
    about: [
      `Rhonda is a registered Nurse and helped establish Whakaoranga Whanau
      Recovery Hub in March 2020 alongside Jane.`,
      `Born & bred in Rotorua, Rhonda moved North with her parents at the age of
      13 and has lived in Kaikohe ever since.`,
      `Rhonda also helps with Freedom Whare as a directory of Whakamanamai
      Whanau Charitable Trust; Freedom Whare help whanau with housing solutions.`,
    ],
    pepeha: [
      'Ko Maungaemiemi tōku Maunga, ko Whangaroa tōku Maunga',
      'Ko Kaingapipiwai tōku awa',
      'Ko Mātaatua tōku waka',
      'Ko Pupuke tōku marae',
      'Ko Te Huia tōku whare tūpuna',
      'Ko Ngapuhi tōku Iwi',
      'Ko Ngāti Pakahi tōku hapu',
      'Ko Aaron Toki tōku hoa rangatira',
      'Ko Shannyn, ko Rawiri, ko Julian, ko Fern āku tamariki',
      'Ko nāhi ahau',
      'Ko Kaikohe tōku kainga noho',
      'Ko Rhonda Zielinski ahau',
    ],
    frontline: true,
    imgSrc: `${assets}/images/people/rhonda.jpg`,
    tallImg: true,
  },
  {
    name: 'Stu 💪🏽',
    tags: ['he waka eke noa', 'aod counsellor', 'mātua'],
    about: [],
    pepeha: [],
    frontline: true,
    imgSrc: `${assets}/images/people/stu-bess.jpg`,
    tallImg: true,
  },
  {
    name: 'Bess 🔥',
    tags: ['he waka eke noa', 'therapist', 'whaea'],
    about: [],
    pepeha: [],
    frontline: true,
    imgSrc: `${assets}/images/people/stu-bess.jpg`,
    tallImg: true,
  },
  {
    name: 'Kamina 🔥',
    tags: ['administration', 'logistics'],
    about: [
      `Kamina has been living in Kaikohe for 3 years now, her grandmother was
      born in Waima.`,
      `She's a qualified kaiako for Te Ataarangi, total immersion  te reo Māori.
      She has worked for Te Whare Wānanga o Awanuiarangi, Hamilton, she was
      head kaiako for Tūmatauenga Kōhanga Reo in Linton, Palmerston North & has
      been working in administration & office management for 15 years in
      Auckland.`,
      `Just like the rest of our team, she also has lived experience with AOD.`,
    ],
    pepeha: [
      'Ko Moehau tōku Maunga',
      'Ko Ti Kapa & Tainui tōku waka',
      'Ko Mainai tōku marae',
      'Ko Ngāti Pukenga, Ngāti Whanaunga tōku hapu',
      'Ko Maru Tuahu tōku Iwi',
      'Ko Kamina McSheffrey ahau',
    ],
    frontline: true,
    imgSrc: `${assets}/images/people/kamina.jpg`,
  },
  {
    name: 'Lisa 👩‍⚕️',
    tags: ['clinical lead', 'mental health'],
    about: [],
    frontline: true,
    // imgSrc: `${assets}/images/people/lisa.jpg`,
  },

  {
    name: 'Noreen 🔥',
    tags: ['kaimanaaki', 'peer support', 'tuakana'],
    about: [
      `Wahine Māori Noreen has been blessed to have survived and overcome some
      of life's tribulations, such as child sexual abuse, abandonment, loss and
      violence. She has experienced immense grief and emotional trauma.`,
      `She is a survivor of drug and alcohol abuse and has struggled to maintain
      her mental health all of her life.`,
      `Now being clean and sober, as well as a Christian, she has a heart to
      help other people through their grief and trauma by sharing her experience
      and knowledge of health and wellbeing, particularly using the Māori world
      view of health and wellness.`,
    ],
    pepeha: [
      'Ko Mauao tōku Maunga',
      'Ko Tauranga Moana tōku Kainga whenua',
      'Ko Wairoa tāku Awa',
      'Ko Ngāti Ranginui raua, ko Ngāiterangi tōku Iwi',
      'Ko Noreen Ahau.',
    ],
    frontline: true,
    imgSrc: `${assets}/images/people/noreen.jpg`,
  },
  // {
  //   name: 'Aiden 💻',
  //   tags: ['software engineer', 'tuakana'],
  //   about: [],
  //   pepeha: [],
  //   frontline: true,
  //   imgSrc: `${assets}/images/people/aiden.jpg`,
  //   tallImg: true,
  // },
]);
