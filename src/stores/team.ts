import aiden from '$img/people/aiden.jpg';
import dee from '$img/people/dee.jpg';
import doug from '$img/people/doug.jpg';
import jane from '$img/people/jane.jpg';
// import lily from '$img/people/lily.jpg';
import noreen from '$img/people/noreen.jpg';
import rhonda from '$img/people/rhonda.jpg';
import stuBess from '$img/people/stu-bess.jpg';
import teMiringa from '$img/people/te-miringa.jpg';
import { readable } from 'svelte/store';

export const team = readable([
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
      no immediate ties to Kaikohe, she was brought up by by her Te Arawa
      whakapapa, but her granfathers' roots are with Ngati Te Roroa and Ngāti
      Kahungunu.`,
      `She shares personal lived experience; maintaining mental wellbeing, as
      well as alcohol and drug addiction. Her recovery journey had brought her
      to Kaikohe and she wanted to give back and share the gifts of recovery
      with others who may be struggling. She couldn’t do this journey alone.
      He waka eke noa!`,
      `Jane has saved many lives, and we are forever grateful for her service.`,
    ],
    frontline: true,
    img: jane,
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
    img: dee,
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
    img: rhonda,
    tallImg: true,
  },
  {
    name: 'Te Miringa 🔥',
    tags: ['trustee of whakamanamai & freedom whare', 'life coach'],
    pepeha: [],
    about: [],
    img: teMiringa,
  },
  {
    name: 'Stu 💪🏽',
    tags: ['he waka eke noa', 'aod counsellor', 'kaumātua'],
    pepeha: [],
    about: [],
    frontline: true,
    img: stuBess,
    tallImg: true,
  },
  {
    name: 'Bess 🔥',
    tags: ['he waka eke noa', 'therapist', 'kaumātua'],
    pepeha: [],
    about: [],
    frontline: true,
    img: stuBess,
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
    img: noreen,
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
      `You will probably see Aiden frequently, he runs ka kura rorohiko for te
      kaimahi, and hopefully for the rōpū in the near future, but he prefers to
      assume the stance of being 'behind the scenes' for the reasons mentioned
      above.`,
    ],
    img: aiden,
    tallImg: true,
  },

  /**
   * BEHIND THE SCENES
   */
  {
    name: 'Doug',
    tags: ['trustee of whakamanamai and freedom whare'],
    about: [
      `Doug Healey is the founder of Influence Gym, which stretches the nation.
      Rhonda runs the Influence gym here in Kaikohe. Doug is also director of
      Whanau Ora Community Clinic.`,
      `A successful entrepreneur, a lot has been written about Doug on the
      internet already so we won't go into too much detail here! But rest
      assured, Doug is a community focused individual with talent and is one
      piece that makes up the backbone of Whakaoranga Whanau Recovery Hub & it's
      siblings.`,
    ],
    img: doug,
  },
  {
    name: 'Craig',
    tags: ['trustee of whakamanamai & freedom whare'],
    about: [
      `Craig Zielinski' skill lies in agriculture and industrial flavoured
      trade. He is a big part of Freedom Whare, and also Whakamanamai Charitable
      Trust.`,
      `As he's also a Zielinski, kaha nui ia Craig, e kaha nui te Zielinski
      whanau. A lot of the large scale investment and planning is conducted by
      Craig in accordance with Rhonda & ngā tīma.`,
      `Whenever we need a professional, Craig's phone rings.`,
    ],
    // img: craig,
  },
  {
    name: 'Lily',
    tags: ['trustee of whakaoranga whanau'],
    about: [],
    // img: lily,
  },
]);
