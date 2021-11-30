import aiden from '$img/people/aiden.jpg';
import bells from '$img/people/bells.jpg';
import carol from '$img/people/carol.jpg';
// import bess from '$img/people/bess.jpg';
import dee from '$img/people/dee.jpg';
import jane from '$img/people/jane.jpg';
import noreen from '$img/people/noreen.jpg';
import rhonda from '$img/people/rhonda.jpg';
// import shan from '$img/people/shan.jpg';
import stuBess from '$img/people/stu-bess.jpg';
import { readable } from 'svelte/store';

export const team = readable([
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
      'Ko Jane Beamsley ahau'
    ],
    about: [
      `Jane is the founder of Whakaoranga Whanau Recovery Hub. Although she has
      no immediate ties to Kaikohe, she was brought up by by her Te Arawa
      whakapapa, but her grandfathers' roots are with Te Roroa and Ngāti
      Kahungunu.`,
      `She shares personal lived experience; maintaining mental wellbeing, as
      well as alcohol and drug addiction. Her recovery journey had brought her
      to Kaikohe and she wanted to give back and share the gifts of recovery
      with others who may be struggling. She couldn’t do this journey alone.
      He waka eke noa!`,
      `Jane has saved many lives, and we are forever grateful for her service.`
    ],
    imgSrc: jane
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
      'Ko Deeann Herkt Kopa ahau'
    ],
    about: [
      `Ka Kaimanāki ia Deeann Herkt; Dee is a peer support worker. She got
      clean and sober after being addicted to methamphetamine for many years.
      Dee checked herself into treatment, completed her programme in 2015 and is
      now very passionate about helping the next addict in their recovery.`,
      `Another strong wāhine, she is always there to rescue her whanau and
      support and teach Māoritanga via waiata & karakia especially.`
    ],
    imgSrc: dee
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
      'Ko Rhonda Zielinski ahau'
    ],
    about: [
      `Rhonda is a registered Nurse and helped establish Whakaoranga Whanau
      Recovery Hub in March 2020 alongside Jane. She's like a mother to the
      Whakaoranga Whanau too. Born & bred in Rotorua, Rhonda moved North with
      her parents at the age of 13 and has lived in Kaikohe ever since.`,
      `Rhonda also helps with Freedom Whare as a director of Whakamanamai
      Whanau Charitable Trust; Freedom Whare help whanau with housing
      solutions. Kaha nui ia Rhonda & very busy to put it mildly.`
    ],
    imgSrc: rhonda
  },
  // {
  //   name: 'Te Miringa 🔥',
  //   tags: ['trustee of whakamanamai & freedom whare', 'life coach'],
  //   pepeha: [],
  //   about: [],
  //   imgSrc: teMiringa,
  // },
  {
    name: 'Stu 💪🏽',
    tags: ['he waka aotearoa', 'aod counsellor', 'kaumātua'],
    pepeha: [],
    about: [``],
    imgSrc: stuBess
  },
  {
    name: 'Bess 🔥',
    tags: ['he waka aotearoa', 'therapist', 'kaumātua'],
    pepeha: [],
    about: [``],
    imgSrc: stuBess
  },
  {
    name: 'Noreen 🔥',
    tags: ['kaimanāki', 'peer support', 'tuākana'],
    pepeha: [
      'Ko Mauao te maunga',
      'Ko Tauranga Moana tōku kainga whenua',
      'Ko Wairoa tāku awa',
      'Ko Ngāti Ranginui raua, ko Ngāiterangi te iwi',
      'Ko Noreen Ahau'
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
      particularly using the Māori world view of health and wellness.`
    ],
    imgSrc: noreen
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
      'Ko kaipūkaha rorohiko ahau',
      'Ko Aiden Langley ahau'
    ],
    about: [
      `Aiden has been described as more of a walker than a talker, so don't
      expect much charisma from him. Aiden wrote this website, manages the IT
      infrastructure and is our resident geek. 🤓`,
      `He was born in Auckland but moved with his parents to London at a young
      age where he spent 20+ years growing up. His whanau originates from Tāheke
      & Waima. He lives in Kaikohe these days.`,
      `You will probably see Aiden around, he runs ka kura rorohiko for the
      kaimahi, and hopefully for the rōpū in the near future.`
    ],
    imgSrc: aiden
  },
  {
    name: 'Shannyn 📚',
    tags: ['hero', 'front of house'],
    pepeha: [],
    about: [
      `Shannyn is the unsung hero of the Whakaoranga Whanau whose taken on the
      demanding role of being front and center handling administration for the
      Whakaoranga Whanau.`,
      `She was born in Rotorua and raised in Kaikohe - her roots lie with Ngapuhi
      and Te Arawa. She's a whangae to Rhonda Zielinski and Dave Winder, has
      lived in Kaikohe for most of her life, and loves working at the Hub.`,
      `You'll be hard pressed to find a more meticulous character than Shan.`
    ]
    // imgSrc:
  },
  {
    name: 'Bells 🛠️',
    tags: ['mahi rangatira', 'tuākana'],
    pepeha: [
      'Ko Tautoro tōku maunga',
      'Ko Kereru tōku roto/awa',
      'Ko Mahuhukiterangi tōku marae',
      'Ko Ngātokimatawhaorua tōku waka',
      'Ko Ngāti Rangi, Ngāti Moerewa tōku hapu',
      'Ko Ngāpuhi tōku iwi',
      'Ko Rihari tōku whanau',
      'Ko Edwin raua ko Vera ōku matua',
      'Ko Isabella tōku ingoa'
    ],
    about: [
      `Isabella, or Bellz, has been in recovery for last 2 years as of 2021,
      and she's been clean from meth for just as long. Bellz has come a long way
      in her journey from knocking on prison's door as a criminal in the justice
      system, to thriving and becoming the best person she can be.`,
      `She's a proud member of the Whakaoranga Whanau - she's got goals to
      achieve, she has heaps of energy and really enjoys life. You'll catch
      Bellz running the 'Mahi Rangatira' program where we keep everybody busy
      and do some mahi together.`
    ],
    imgSrc: bells
  },
  {
    name: 'Carol',
    tags: ['Kaimanāki', 'tuākana'],
    pepeha: [
      'Ko Pouerua te maunga',
      'Ko Waitangi te moana',
      'Ko Rotoiti te awa',
      'Ko Haruru te rerenga',
      'Ko Waitangi/Ngāti Kawa te marae',
      'Ko Rahiri/Ngāti Kawa te hapū',
      'Ko Mataatua te waka',
      'Ko Ngāpuhi te iwi',
      'Ko Carol Thompson ahau'
    ],
    about: [
      `He kai awhina a Carol Thompson ki te Whakaoranga
      Whanau Recovery Hub o Kaikohe.`,
      `Life has been colourful for Carol, she has 1 son and 2 mokopuna and has
      also struggled with alcohol, drugs & violence. She completed the programs
      at the Whakaoranga Whanau and which helped her to identify and understand
      the reasons why mind-altering substances have played such a pivotal role
      in her life, and pivot she did.`,
      `Through a change of attitude and the WANT to break the cycle with
      addictions and unhealthy habits, she now has the drive to live a
      fulfilling life, not only now, but also for the generations to come.`
    ],
    imgSrc: carol
  }
]);
