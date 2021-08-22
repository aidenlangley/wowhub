<script lang="ts">
  const buzzWords = [
    'Māori',
    'Kaupapa',
    'Community',
    'Whanau',
    'Roopu',
    'Tinana',
    'Hinganaro',
    'Wairua',
    'Serenity',
    'Addiction',
    'Recovery',
    'AOD',
    'Bespoke',
    'Tailored',
  ];

  console.log(buzzWords.length % 4);
  // while (buzzWords.length % 4) {}
</script>

<div>
  <ul
    class="
      grid grid-cols-3
    "
  >
    {#each buzzWords as word}
      <li class="" />
    {/each}
  </ul>
</div>
