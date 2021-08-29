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
<section id="services" aria-hidden="true">
  {#each chunks as chunk}
    <div class="flex justify-center items-baseline space-x-1">
      <span
        class="
          text-right font-serif
          text-56 ty:text-64 sm:text-72 md:text-96
          tracking-tighter sm:tracking-tight
          text-gray-800 dark:text-gray-200
        "
      >
        {chunk[0] ? chunk[0] : ''}
      </span>
      <span
        class="
          align-text-bottom
          text-32 ty:text-36 sm:text-40 md:text-48 lg:text-56 xl:text-64
          font-medium tracking-tighter sm:tracking-tight md:tracking-normal
          text-purple-500
        "
      >
        {chunk[1] ? chunk[1] : ''}
      </span>
    </div>
    <div class="flex justify-center items-center space-x-1">
      <span
        class="
          text-30 ty:text-34 sm:text-38 md:text-42 lg:text-48 xl:text-56
          font-bold tracking-tight sm:tracking-normal md:tracking-tighter
          text-orange-500 text-shadow
        "
      >
        {chunk[2] ? chunk[2] : ''}
      </span>
      <span
        class="
          text-48 ty:text-56 sm:text-64 md:text-72 lg:text-96 xl:text-128
          text-green-500
          font-bold font-serif
          tracking-tighter
        "
      >
        {chunk[3] ? chunk[3] : ''}
      </span>
    </div>
    <div class="flex justify-center items-start space-x-1">
      <span
        class="
          font-serif
          text-32 ty:text-36 sm:text-40 md:text-48 lg:text-56 xl:text-64
          tracking-tighter font-medium
          text-blue-500
        "
      >
        {chunk[4] ? chunk[4] : ''}
      </span>
      <span
        class="
          text-40 ty:text-44 sm:text-48 md:text-56 lg:text-64 xl:text-72
          tracking-tighter font-bold
          text-gray-600 dark:text-gray-400
        "
      >
        {chunk[5] ? chunk[5] : ''}
      </span>
    </div>
  {/each}
</section>
