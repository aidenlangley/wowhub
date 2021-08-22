<script lang="ts">
  const buzzWords = [
    'māori',
    'kaupapa',
    'community',
    'whanau',
    'roopu',
    'tinana',
    'hinganaro',
    'wairua',
    'serenity',
    'addiction',
    'recovery',
    'AOD',
    'bespoke',
    'tailored',
    'to you',
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

<div class="border border-gray-100 dark:border-gray-800 rounded shadow">
  <div class="border-t-8 border-black dark:border-blue-500 rounded">
    <div
      class="bg-white dark:bg-black border-b-8 border-yellow-300 rounded pt-4 pb-4"
    >
      {#each chunks as chunk}
        <div class="flex justify-center items-baseline space-x-1">
          <span
            class="
              text-right
              text-56
              font-light tracking-tighter
              text-gray-800 dark:text-gray-200
            "
          >
            {chunk[0] ? chunk[0] : ''}
          </span>
          <span
            class="
              align-text-bottom
              text-32
              font-medium tracking-tighter
              text-purple-500"
          >
            {chunk[1] ? chunk[1] : ''}
          </span>
        </div>
        <div class="flex justify-center items-center space-x-1">
          <span
            class="
              text-32
              tracking-tight font-bold
              text-blue-500 text-shadow 
            "
          >
            {chunk[2] ? chunk[2] : ''}
          </span>
          <span class="text-40 text-orange-500 tracking-tighter font-bold">
            {chunk[3] ? chunk[3] : ''}
          </span>
        </div>
        <div class="flex justify-center items-center space-x-1">
          <span
            class="
              text-32
              tracking-tighter font-medium
              text-green-500
            "
          >
            {chunk[4] ? chunk[4] : ''}
          </span>
          <span
            class="
              text-40
              tracking-tighter font-bold
              text-gray-800 dark:text-gray-200
            "
          >
            {chunk[5] ? chunk[5] : ''}
          </span>
        </div>
      {/each}
    </div>
  </div>
</div>
