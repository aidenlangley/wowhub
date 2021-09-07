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
    'wellness',
    'tailored',
    'for you',
    'anger management',
    'ora',
  ]

  const length = buzzWords.length
  let chunks: string[][] = []
  for (let index = 0; index < length; index++) {
    if (buzzWords.length == 0) break
    if (buzzWords.length >= 6) {
      chunks[index] = buzzWords.splice(0, 6)
    } else {
      chunks[index] = buzzWords.splice(0, buzzWords.length)
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
      <span>
        {chunk[1] ? chunk[1] : ''}
      </span>
    </div>
    <div>
      <span>
        {chunk[2] ? chunk[2] : ''}
      </span>
      <span>
        {chunk[3] ? chunk[3] : ''}
      </span>
    </div>
    <div>
      <span>
        {chunk[4] ? chunk[4] : ''}
      </span>
      <span>
        {chunk[5] ? chunk[5] : ''}
      </span>
    </div>
  {/each}
</div>

<style lang="postcss">
  @import './index-services.postcss';
</style>
