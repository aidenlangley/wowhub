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
      'Ko Whakapoungakau tōku maunga',
      'Ko Kaituna tōku awa',
      'Ko Ruamata tōku marae',
      'Ko Ngāti Pikiao, Ngāti Whakaue ōku hapū',
      'Ko Te Arawa tōku iwi',
      'Ko Te Arawa tōku waka',
      'Ko Jane Beamsley ahau',
    ],
    about: [
      `Jane is the founder of Whakaoranga Whanau Recovery Hub. Although she
      has no ties to Kaikohe, she was brought up by her Te Arawa
      whakapapa, her grandfathers whakapapa; Ngati Te Roroa and Kahungunu.`,
      `Jane is of Māori and pakeha descent and she shares personal lived
      experience; mainting mental wellbeing, as well as alcohol and drug
      addiction.`,
      `Her recovery journey has brought her to Kaikohe and she
      wanted to give back and share the gifts of recovery with others who
      may be struggling. She couldn’t do this journey alone. He waka eke noa!`,
    ],
    frontline: true,
    imgSrc: `${assets}/images/people/jane.jpg`,
  },
  {
    name: 'Dee 🔥',
    tags: ['kaimanaki', 'peer support', 'tuakana'],
    about: [
      `Deeann Herkt is a peer support worker. She's been clean and sober for 6
      years after being addicted to methamphetamine for many years. Dee checked
      herself into treatment & completed her programme in 2015 and is now very
      passionate about helping the next addict in their recovery.`,
      `Another strong wahine, she is always there to rescue her whanau, and
      support and teach Māoritanga via waiata & himene especially.`,
    ],
    pepeha: [
      'Ko Hikurangi tōku maunga',
      'Ko Ngātokimatawhaorua tōku waka',
      'Ko Matawaia tōku marae',
      'Ko Ngāti Hine tōku hapu',
      'Ko Ngāpuhi tōku iwi',
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
      Recovery Hub in March 2020 alongside Jane. She's a mother to her own
      tamariki and to the Whakaoranga Whanau. Born & bred in Rotorua, Rhonda
      moved North with her parents at the age of 13 and has lived in Kaikohe
      ever since.`,
      `Rhonda also helps with Freedom Whare as a director of Whakamanamai
      Whanau Charitable Trust; Freedom Whare help whanau with housing
      solutions.`,
      `She's a busy, and strong, wahine to put it mildly.`,
    ],
    pepeha: [
      'Ko Maungaemiemi tōku maunga',
      'Ko Whangaroa tōku moana',
      'Ko Kaingapipiwai tōku awa',
      'Ko Mātaatua tōku waka',
      'Ko Pupuke tōku marae',
      'Ko Te Huia tōku whare tūpuna',
      'Ko Ngapuhi tōku iwi',
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
      born in Waima. Just like the rest of our team, she also has lived
      experience with AOD struggles.`,
      `She's a qualified kaiako for Te Ataarangi, total immersion  te reo Māori.
      She has worked for Te Whare Wānanga o Awanuiarangi, Hamilton, she was
      head kaiako for Tūmatauenga Kōhanga Reo in Linton, Palmerston North & has
      been working in administration & office management for 15 years in
      Auckland.`,
    ],
    pepeha: [
      'Ko Moehau tōku maunga',
      'Ko Ti Kapa & Tainui tōku waka',
      'Ko Mainai tōku marae',
      'Ko Ngāti Pukenga, Ngāti Whanaunga tōku hapu',
      'Ko Maru Tuahu tōku iwi',
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
      violence. She has experienced her fair share of grief and emotional
      trauma.`,
      `She is a survivor of drug and alcohol abuse and has struggled to maintain
      her mental health all of her life. Now being clean and sober, as well as a
      Christian, she has a heart to help other people through their grief and
      trauma by sharing her experience and knowledge of health and wellbeing,
      particularly using the Māori world view of health and wellness.`,
    ],
    pepeha: [
      'Ko Mauao tōku maunga',
      'Ko Tauranga Moana tōku Kainga whenua',
      'Ko Wairoa tāku awa',
      'Ko Ngāti Ranginui raua, ko Ngāiterangi tōku iwi',
      'Ko Noreen Ahau.',
    ],
    frontline: true,
    imgSrc: `${assets}/images/people/noreen.jpg`,
  },
  {
    name: 'Aiden 💻',
    tags: ['software engineer', 'tuakana'],
    about: [
      `Aiden has been described as more of a walker than a talker, so don't
      expect much charisma from him. Aiden wrote this website, manages the IT
      infrastructure and is our resident geek. 🤓`,
      `He was born in Tāmaki but moved with his parents to London at a young age
      where he spent 20+ years growing up. His Māori family comes from Tāheke
      and he lives in Kaikohe these days.`,
      `He has been diagnosed with ADHD and has a mild form of Tourette's, so if
      you ever meet him, you'll have to excuse any surprises. Drugs and alcohol
      have played a large part in his life too.`,
    ],
    pepeha: [
      'I whanau mai au ki Tāmaki, ki Greenlane',
      'I tupu ake au ki tāwāhi, ki London',
      'Ko Ngāpuhi te iwi',
      'Ko Ngāti Pākau te hapu',
      'Ko Pehi, ko Jack, ko Langley te whanau',
      'Ko Whakatere Peak te maunga',
      'Ko Tāheke te awa',
      'Ko Tāhekeroa te marae',
      'Ko kaipūkaha rorohiko',
      'Ko Aiden Langley ahau',
    ],
    frontline: true,
    imgSrc: `${assets}/images/people/aiden.jpg`,
    tallImg: true,
  },
]);
