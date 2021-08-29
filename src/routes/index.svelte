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
      'He Waka Eke Noa te tai Tokerau. Learn about our community AOD & recovery services',
    robots: 'none',
  };

  export let news: Article[];
</script>

<!--
  @component
  Landing page. Has to catch the users attention and give them information as
  quickly as possible.
-->
<div class="grid column p-4">
  <section id="banner" class="padding lg:pt-24 lg:pb-24 duration-100">
    <Banner white={$state.dark} />
  </section>

  <!-- Visual break after banner via dotted border. -->
  <section
    id="quick-links"
    class="padding
      border-t-4 border-dotted border-gray-300 dark:border-gray-600"
  >
    <IndexQuickLinks />
  </section>

  {#if news}
    <section id="latest-news" class="" in:fade>
      <IndexLatestNews {news} />
    </section>
  {/if}
</div>

<section id="blurb" class="text-white text-shadow-lg">
  <IndexBlurb />
</section>

<IndexSerenityPrayer />
<div class="text-white text-shadow-lg">
  <IndexWhakatauki />
</div>

<IndexServices />
