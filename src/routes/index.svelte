<script lang="ts" context="module">
  import type { Article } from '$components/articles/Article';
  import IndexBlurb from '$components/index/IndexBlurb.svelte';
  import IndexLatestNews from '$components/index/IndexLatestNews.svelte';
  import IndexQuickLinks from '$components/index/IndexQuickLinks.svelte';
  import IndexSerenityPrayer from '$components/index/IndexSerenityPrayer.svelte';
  import IndexServices from '$lib/components/index/services/IndexServices.svelte';
  import IndexWhakatauki from '$components/index/IndexWhakatauki.svelte';
  import Banner from '$lib/media/Banner.svelte';
  import { state } from '$lib/store/dark';
  import { seo } from '$lib/store/seo';
  import { fade } from 'svelte/transition';
  import { loadNews as load } from './news.svelte';
  export { load };
</script>

<script lang="ts">
  $seo = {
    title: 'Whakaoranga Whanau Recovery Hub',
    description:
      'He Waka Eke Noa te Tai Tokerau. Learn about our community AOD & recovery services',
    robots: 'none',
  };

  export let news: Article[];
</script>

<!--
  @component
  Landing page. Has to catch the users attention and give them information as
  quickly as possible.
-->
<div class="root column pad gaps-y">
  <section class="pad">
    <Banner white={$state.dark} />
  </section>

  <!-- Visual break after banner via dotted border. -->
  <section>
    <IndexQuickLinks />
  </section>

  {#if news}
    <section class="pad-b" in:fade>
      <IndexLatestNews {news} />
    </section>
  {/if}
</div>

<section class="blurb skew-left gradient-dark-green">
  <div class="column pad gaps-y">
    <IndexBlurb />
  </div>
</section>

<section aria-hidden="true" class="column pad">
  <IndexSerenityPrayer />
</section>

<section class="whakatauki skew-right gradient-dark-green">
  <div class="column pad gaps-y">
    <IndexWhakatauki />
  </div>
</section>

<section aria-hidden="true" class="pad">
  <IndexServices />
</section>

<style lang="postcss">
  div.root {
    transition-duration: 1000ms;
    transition-timing-function: theme('transitionTimingFunction.in-out');
  }
</style>
