<script lang="ts">
  /* Comments indiciate line:left/right */
  const buzzWords = [
    'māori' /* 1:1 */,
    'kaupapa' /* 1:2 */,
    'community' /* 2:1 */,
    'serenity' /* 2:2 */,
    'roopu' /* 3:1 */,
    'tinana' /* 3:2 */,

    'wairua' /* 1:1 */,
    'addiction' /* 1:2 */,
    'hollistic' /* 2:1 */,
    'recovery' /* 2:2 */,
    'hinengaro' /* 3:1 */,
    'aod' /* 3:2 */,

    'whānau' /* 1:1 */,
    'wellness' /* 1:2 */,
    'tailored' /* 2:1 */,
    'for you' /* 2:2 */,
    'anger management' /* 3:1 */,
    'ora' /* 3:2 */,
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

<style>
  @import './services/services.css';
  @import './services/1st-line.css';
  @import './services/2nd-line.css';
  @import './services/3rd-line.css';
</style>
