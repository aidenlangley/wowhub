import { assets } from '$app/paths';
import type { Readable } from 'svelte/store';
import { readable } from 'svelte/store';
import type { Member } from './types.d';

export const team: Readable<Member[]> = readable([
  /**
   * PRIMARY TEAM
   */
  {
    name: 'Jane 🌊',
    tags: ['founder', 'peer support', 'tuākana'],
    pepeha: [
      'Ko Whakapoungakau te maunga',
      'Ko Kaituna te awa',
      'Ko Ruamata te marae',
      'Ko Ngāti Pikiao, Ngāti Whakaue ōku hapū',
      'Ko Te Arawa te iwi',
      'Ko Te Arawa te waka',
      'Ko Jane Beamsley ahau',
    ],
    about: [
      `Jane is the founder of Whakaoranga Whanau Recovery Hub. Although she has
      no ties to Kaikohe, she was brought up by her grandfathers Te Arawa
      whakapapa, Ngati Te Roroa and Kahungunu.`,
      `Jane is of Māori and pakeha descent and she shares personal lived
      experience; maintaining mental wellbeing, as well as alcohol and drug
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
    tags: ['kaimanāki', 'peer support', 'tuākana'],
    pepeha: [
      'Ko Hikurangi te maunga',
      'Ko Ngātokimatawhaorua te waka',
      'Ko Matawaia te marae',
      'Ko Ngāti Hine te hapu',
      'Ko Ngāpuhi te iwi',
      'Ko Deeann Herkt Kopa ahau',
    ],
    about: [
      `Ka Kaimanāki ia Deeann Herkt; Dee is a peer support worker. She's been
      clean and sober for 6 years after being addicted to methamphetamine for
      many years. Dee checked herself into treatment, completed her programme in
      2015 and is now very passionate about helping the next addict in their
      recovery.`,
      `Another strong wāhine, she is always there to rescue her whanau and
      support and teach Māoritanga via waiata & karakia especially.`,
    ],
    frontline: true,
    imgSrc: `${assets}/images/people/dee.jpg`,
    tallImg: true,
  },
  {
    name: 'Rhonda 🔥',
    tags: ['manager', 'co-founder', 'nāhi', 'trustee'],
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
      'Ko Kaikohe te kainga noho',
      'Ko Rhonda Zielinski ahau',
    ],
    about: [
      `Rhonda is a registered Nurse and helped establish Whakaoranga Whanau
      Recovery Hub in March 2020 alongside Jane. She's like a mother to the
      Whakaoranga Whanau too. Born & bred in Rotorua, Rhonda moved North with
      her parents at the age of 13 and has lived in Kaikohe ever since.`,
      `Rhonda also helps with Freedom Whare as a director of Whakamanamai
      Whanau Charitable Trust; Freedom Whare help whanau with housing
      solutions. Kaha nui ia Rhonda & very busy to put it mildly.`,
    ],
    frontline: true,
    imgSrc: `${assets}/images/people/rhonda.jpg`,
    tallImg: true,
  },
  {
    name: 'Te Miringa 🔥',
    tags: ['director', 'life coach'],
    pepeha: [],
    about: [],
    imgSrc: `${assets}/images/people/te-miringa.jpg`,
  },
  {
    name: 'Stu 💪🏽',
    tags: ['he waka eke noa', 'aod counsellor', 'kaumātua'],
    pepeha: [],
    about: [],
    frontline: true,
    imgSrc: `${assets}/images/people/stu-bess.jpg`,
    tallImg: true,
  },
  {
    name: 'Bess 🔥',
    tags: ['he waka eke noa', 'therapist', 'kaumātua'],
    pepeha: [],
    about: [],
    frontline: true,
    imgSrc: `${assets}/images/people/stu-bess.jpg`,
    tallImg: true,
  },
  {
    name: 'Noreen 🔥',
    tags: ['kaimanāki', 'peer support', 'tuākana'],
    pepeha: [
      'Ko Mauao te maunga',
      'Ko Tauranga Moana tōku kainga whenua',
      'Ko Wairoa tāku awa',
      'Ko Ngāti Ranginui raua, ko Ngāiterangi te iwi',
      'Ko Noreen Ahau',
    ],
    about: [
      `Wāhine Māori Noreen has been blessed to have survived and overcome some
      of life's tribulations, such as child sexual abuse, abandonment, loss and
      violence. She has experienced her fair share of grief and emotional
      trauma.`,
      `She is a survivor of drug and alcohol abuse and has struggled to maintain
      her mental health all of her life. Now being clean and sober, as well as a
      Christian, she has a heart to help other people through their grief and
      trauma by sharing her experience and knowledge of health and wellbeing,
      particularly using the Māori world view of health and wellness.`,
    ],
    frontline: true,
    imgSrc: `${assets}/images/people/noreen.jpg`,
  },
  {
    name: 'Kamina 🔥',
    tags: ['administration', 'logistics'],
    pepeha: [
      'Ko Moehau te maunga',
      'Ko Ti Kapa & Tainui te waka',
      'Ko Mainai te marae',
      'Ko Ngāti Pukenga, Ngāti Whanaunga te hapu',
      'Ko Maru Tuahu te iwi',
      'Ko Kamina McSheffrey ahau',
    ],
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
    frontline: true,
    imgSrc: `${assets}/images/people/kamina.jpg`,
  },
  {
    name: 'Aiden 💻',
    tags: ['kaipūkaha rorohiko', 'tuākana'],
    pepeha: [
      'I whanau mai au i Tāmaki',
      'I tupu ake au i tāwāhi, London, Ingarangi',
      'Ko Whakatere te maunga',
      'Ko Tāheke te awa',
      'Ko Ngātokimatawhaorua te waka',
      'Ko Ngāpuhi te iwi',
      'Ko Ngāti Pākau te hapu',
      'Ko Tāhekeroa te marae',
      'Ko Pehi, ko Jack, ko Langley ōku whanau',
      'Ko kaipūkaha rorohiko',
      'Ko Aiden Langley ahau',
    ],
    about: [
      `Aiden has been described as more of a walker than a talker, so don't
      expect much charisma from him. Aiden wrote this website, manages the IT
      infrastructure and is our resident geek. 🤓`,
      `He was born in Tāmaki but moved with his parents to London at a young age
      where he spent 20+ years growing up. His whanau originates from Tāheke &
      Waima. He lives in Kaikohe these days.`,
      `He has been diagnosed with ADHD and has a mild form of Tourette's, so if
      you ever meet him, you'll have to excuse any surprises. Drugs and alcohol
      have played a large part in his life too.`,
    ],
    imgSrc: `${assets}/images/people/aiden.jpg`,
    tallImg: true,
  },
  {
    name: 'Lisa 👩‍⚕️',
    tags: ['clinical lead', 'mental health'],
    about: [],
    frontline: true,
    // imgSrc: `${assets}/images/people/lisa.jpg`,
  },

  /**
   * BEHIND THE SCENES
   */
  {
    name: 'Doug',
    tags: ['trustee', 'director of whanau ora', 'founder of influence gym'],
    about: [],
    imgSrc: `${assets}/images/people/doug.jpg`,
  },
  {
    name: 'Craig',
    tags: ['trustee'],
    about: [],
    // imgSrc: `${assets}/images/people/.jpg`,
  },
  {
    name: 'Lily',
    tags: ['trustee'],
    about: [],
    // imgSrc: `${assets}/images/people/.jpg`,
  },
]);
