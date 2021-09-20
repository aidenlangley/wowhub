<script lang="ts" context="module">
  import type { Article } from '$components/articles/types.d';
  import Banner from '$components/banner/Banner.svelte';
  import Blurb from '$components/index/blurb/Blurb.svelte';
  import LatestNews from '$components/index/LatestNews.svelte';
  import LinksInfo from '$components/index/links-info/LinksInfo.svelte';
  import MissionStatement from '$components/index/mission-statement/MissionStatement.svelte';
  import SerenityPrayer from '$components/index/serenity-prayer/SerenityPrayer.svelte';
  import Services from '$components/index/services/Services.svelte';
  import Whakatauki from '$components/index/whakatauki/Whakatauki.svelte';
  import { state } from '$stores/dark';
  import SvelteSeo from 'svelte-seo';
  import { loadNews as load } from './news.svelte';

  export { load };
</script>

<script lang="ts">
  export let news: Article[];
</script>

<SvelteSeo
  title="Whakaoranga Whanau Recovery Hub"
  description={`He Waka Eke Noa te Tai Tokerau. Learn about our community AOD
    & recovery services`}
/>

<!--
  @component
  Landing page. Has to catch the users attention and give them information as
  quickly as possible.
-->
<article>
  <div class="column pad-y gaps-y">
    <section id="banner" class="no-mobile pad-y wconstraint">
      <Banner white={$state.dark} />
    </section>

    <section id="mission-statement">
      <MissionStatement white={false} />
    </section>

    <section id="links-info">
      <LinksInfo />
    </section>

    <article id="video" class="video">
      <iframe
        title="Beating Addiction Together"
        src="https://tehiku.nz/embed/11829"
        allowfullscreen
      />
    </article>

    {#if news && news.length > 0}
      <section id="news">
        <LatestNews {news} />
      </section>
    {/if}
  </div>

  <section id="blurb" class="pad-y pad-x">
    <Blurb />
  </section>

  <section id="serenity-prayer" class="column">
    <SerenityPrayer />
  </section>

  <section id="whakatauki" class="pad-y pad-x">
    <Whakatauki />
  </section>

  <section id="services" class="pad-y" aria-hidden="true">
    <Services />
  </section>
</article>

<style>
  @import './index.css';
</style>
