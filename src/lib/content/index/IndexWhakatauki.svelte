<script lang="ts" context="module">
  export const whakatauki = {
    whakatauki: 'E hara taku toa i te toa takitahi, engari he toa takitini',
    translation:
      'My strength is not that of a single warrior, but that of many',
  };
</script>

<script lang="ts">
  import { paragraphStyle } from './IndexBlurb.svelte';

  const headings = whakatauki.whakatauki.split(',');
  headings[0] += ',';
</script>

<!--
  @component
  One of our favourite whakatauki (proverb.)
-->
<div class="space-y-2 md:space-y-4 p-2">
  <div
    class="
      text-34 sm:text-42 md:text-44 lg:text-56 xl:text-72
      tracking-tighter text-shadow sm:text-center
      font-medium italic font-serif
    "
  >
    {#each headings as heading}
      <h1>{heading}</h1>
    {/each}
  </div>
  <h2
    class="
      font-serif
      text-right sm:text-center
      text-22 lg:text-32
      text-gray-100 text-shadow 
    "
  >
    "{whakatauki.translation}"
  </h2>
  <div class={paragraphStyle}>
    <p>
      A favourite whakatauki of ours that embodies our ideals perfectly. A
      strong individual empowers us all.
    </p>
    <p>
      We take a holistic approach when it comes to treatment. Behind the
      individual there's roopu, whanau, there's hinganaro, tinana and wairua.
      Addiction only accounts for a fraction of the recovery process.
    </p>
    <p>
      When Taumarere is in need, Hokianga will answer the call, and vice versa.
    </p>
  </div>
</div>
