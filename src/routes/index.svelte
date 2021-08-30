<script lang="ts" context="module">
  import type { Article } from '$lib/content/articles/Article';
  import IndexBlurb from '$lib/content/index/IndexBlurb.svelte';
  import IndexLatestNews from '$lib/content/index/IndexLatestNews.svelte';
  import IndexQuickLinks from '$lib/content/index/IndexQuickLinks.svelte';
  import IndexSerenityPrayer from '$lib/content/index/IndexSerenityPrayer.svelte';
  import IndexServices from '$lib/content/index/IndexServices.svelte';
  import IndexWhakatauki from '$lib/content/index/IndexWhakatauki.svelte';
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
<div class="column p-4 padding">
  <section id="banner" class="padding">
    <Banner white={$state.dark} />
  </section>

  <!-- Visual break after banner via dotted border. -->
  <section id="quick-links">
    <IndexQuickLinks />
  </section>

  {#if news}
    <section id="latest-news" in:fade>
      <IndexLatestNews {news} />
    </section>
  {/if}
</div>

<div class="skew -skew-y-2 gradient-dark-green bg-gradient-to-bl">
  <section id="blurb" class="skew-y-2 column">
    <IndexBlurb />
  </section>
</div>

<section id="serenity-prayer" aria-hidden="true" class="column">
  <IndexSerenityPrayer />
</section>

<div class="skew skew-y-2 gradient-dark-green bg-gradient-to-br">
  <section id="whakatauki" class="-skew-y-2 column">
    <IndexWhakatauki />
  </section>
</div>

<section id="services" aria-hidden="true" class="column">
  <IndexServices />
</section>
