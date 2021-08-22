<script lang="ts" context="module">
  export const whakatauki = {
    whakatauki: 'E hara taku toa i te toa takitahi, engari he toa takitini',
    translation:
      'My strength is not that of a single warrior, but that of many',
  };
</script>

<script lang="ts">
  import {
    spacingStyle,
    lightHeadingStyle,
    paragraphStyle,
  } from './IndexBlurb.svelte';

  const headings = whakatauki.whakatauki.split(',');
  headings[0] += ',';
</script>

<div class={spacingStyle}>
  <div class="{lightHeadingStyle} text-center">
    {#each headings as heading}
      <h1>{heading}</h1>
    {/each}
  </div>
  <h2
    class="
      font-serif font-light
      text-gray-800 dark:text-gray-200
      text-24 lg:text-32
      text-center text-shadow
    "
  >
    <span
      class="
        bg-white bg-opacity-90
        dark:bg-black dark:bg-opacity-50
        "
    >
      "{whakatauki.translation}"
    </span>
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
