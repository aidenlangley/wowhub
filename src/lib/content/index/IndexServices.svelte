<script lang="ts">
  const buzzWords = [
    'māori',
    'kaupapa',
    'community',
    'serenity',
    'roopu',
    'tinana',
    'recovery',
    'addiction',
    'hollistic',
    'wairua',
    'hinengaro',
    'aod',
    'whānau',
    'ora',
    'tailored',
    'for you',
  ];

  const length = buzzWords.length;
  let chunks: string[][] = [];
  for (let index = 0; index < length; index++) {
    if (buzzWords.length == 0) break;
    if (buzzWords.length >= 6) {
      chunks[index] = buzzWords.splice(0, 6);
    } else {
      chunks[index] = buzzWords.splice(0, buzzWords.length);
    }
  }
</script>

<!--
  @component
  Heat/word map style list of buzzwords. This functions as a sort of services
  list.
-->
<div class="services">
  {#each chunks as chunk}
    <div>
      <span>
        {chunk[0] ? chunk[0] : ''}
      </span>
      <span class="">
        {chunk[1] ? chunk[1] : ''}
      </span>
    </div>
    <div>
      <span class="">
        {chunk[2] ? chunk[2] : ''}
      </span>
      <span class="">
        {chunk[3] ? chunk[3] : ''}
      </span>
    </div>
    <div>
      <span class="">
        {chunk[4] ? chunk[4] : ''}
      </span>
      <span>
        {chunk[5] ? chunk[5] : ''}
      </span>
    </div>
  {/each}
</div>

<style lang="postcss">
  div.services {
    display: grid;
    grid-auto-flow: row;
  }

  /*
  Default styles for all lines.
  Always want to flex, to keep the text together, and central.
  Grid is harder to use than flex in these instances.
  */
  div.services > * {
    /* We want these on every line. */
    display: flex;
    justify-content: center;
  }

  /* Adds a wee bit of spacing after first word. Does what space-x-n does. */
  div.services > * > :first-child {
    margin-right: 0.25rem;
  }

  /*
  This is the first line.
  :nth-child(3n + 1) means every 3rd child, starting from 1.
  */
  div.services > :nth-child(3n + 1) {
    align-items: flex-end;
    vertical-align: text-bottom;
  }

  /* This is the left hand side of the first line. */
  div.services > :nth-child(3n + 1) > :first-child {
    letter-spacing: -0.05em;
    font-weight: 500;
    @apply font-serif text-gray-800 text-56;
    @apply ty:text-64 sm:text-72 md:text-96;
  }

  :global(.dark) div.services > :nth-child(3n + 1) > :first-child {
    @apply text-gray-200;
  }

  /* This is the right hand side of the first line. */
  div.services > :nth-child(3n + 1) > :last-child {
    font-weight: 500;
    letter-spacing: -0.05em;

    @apply text-32 text-purple-500;
    @apply ty:text-36 sm:text-40 md:text-48 lg:text-56 xl:text-64;
  }

  /* This is the middle line. */
  div.services > :nth-child(3n + 2) {
    align-items: center;
    vertical-align: middle;
  }

  div.services > :nth-child(3n + 2) > :first-child {
    font-weight: bold;
    letter-spacing: -0.025em;
    text-decoration: underline;

    @apply text-orange-500 text-30;
    @apply ty:text-34 sm:text-38 sm:tracking-normal;
    @apply md:text-42 md:tracking-tighter;
    @apply lg:text-48 xl:text-56;
  }

  div.services > :nth-child(3n + 2) > :last-child {
    font-weight: bold;
    letter-spacing: -0.05em;

    @apply font-serif text-green-500 text-48;
    @apply ty:text-56 sm:text-64 md:text-72 lg:text-96 xl:text-128;
  }

  /* This is the bottom line. */
  div.services > :nth-child(3n) {
    align-items: flex-start;
    vertical-align: text-top;
  }

  div.services > :nth-child(3n) > :first-child {
    font-weight: 500;
    letter-spacing: -0.05em;

    @apply font-serif text-blue-500 text-32;
    @apply ty:text-36 sm:text-40 md:text-48 lg:text-56 xl:text-64;
  }

  div.services > :nth-child(3n) > :last-child {
    font-weight: bold;
    letter-spacing: -0.05em;

    @apply text-gray-600 text-40;
    @apply ty:text-44 sm:text-48 md:text-56 lg:text-64 xl:text-72;
  }

  :global(.dark) div.services > :nth-child(3n) > :last-child {
    @apply text-gray-400;
  }
</style>
