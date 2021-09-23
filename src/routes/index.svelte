<script lang="ts" context="module">
  import Banner from '$comp/banner/Banner.svelte';
  import Blurb from '$comp/index/blurb/Blurb.svelte';
  import LatestNews from '$comp/index/LatestNews.svelte';
  import LinksInfo from '$comp/index/links-info/LinksInfo.svelte';
  import MissionStatement from '$comp/index/mission-statement/MissionStatement.svelte';
  import SerenityPrayer from '$comp/index/serenity-prayer/SerenityPrayer.svelte';
  import Services from '$comp/index/services/Services.svelte';
  import Whakatauki from '$comp/index/whakatauki/Whakatauki.svelte';
  import { state } from '$stores/dark';
  import type { Article } from '$types/Article';
  import SvelteSeo from 'svelte-seo';
  import { loadNews as load } from './news.svelte';

  export { load };
</script>

<script lang="ts">
  export let news: Article[];
</script>

<SvelteSeo
  title="Whakaoranga Whanau Recovery Hub"
  description={`Planting the seed of hope... Sharing gifts of recovery. Learn
    more about the Whakaoranga Whanau & He Waka Eke Noa Te Tai Tokerau here.`}
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
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/Jo4qj5sYtN0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="lazyframe"
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

<style global>
  @import './index.css';
</style>
