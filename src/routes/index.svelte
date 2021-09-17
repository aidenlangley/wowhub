<script lang="ts" context="module">
  import type { Article } from '$components/articles/types.d';
  import Blurb from '$components/index/Blurb.svelte';
  import LatestNews from '$components/index/LatestNews.svelte';
  import QuickLinks from '$components/index/QuickLinks.svelte';
  import SerenityPrayer from '$components/index/SerenityPrayer.svelte';
  import Services from '$components/index/Services.svelte';
  import Whakatauki from '$components/index/Whakatauki.svelte';
  import Banner from '$media/Banner.svelte';
  import { state } from '$store/dark';
  import { seo } from '$store/seo';
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
<div class="column gaps-y">
  <section id="banner" class="pad-y">
    <Banner white={$state.dark} />
  </section>

  <section id="quick-links">
    <QuickLinks />
  </section>

  <section id="video" class="video">
    <iframe
      title="Beating Addiction Together"
      src="https://tehiku.nz/embed/11829"
      allowfullscreen
    />
  </section>

  {#if news}
    <section id="news" in:fade>
      <LatestNews {news} />
    </section>
  {/if}
</div>

<section id="blurb" class="pad-y pad-x">
  <Blurb />
</section>

<section id="serenity-prayer" class="column" aria-hidden="true">
  <SerenityPrayer />
</section>

<section id="whakatauki" class="pad-y pad-x">
  <Whakatauki />
</section>

<section id="services" aria-hidden="true">
  <Services />
</section>

<style lang="postcss">
  @import './index.css';
</style>
