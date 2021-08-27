<script lang="ts" context="module">
  import type { Article } from '$lib/content/articles/Article';
  import IndexBlurb from '$lib/content/index/IndexBlurb.svelte';
  import IndexLatestNews from '$lib/content/index/IndexLatestNews.svelte';
  import IndexQuickLinks from '$lib/content/index/IndexQuickLinks.svelte';
  import IndexSerenityPrayer from '$lib/content/index/IndexSerenityPrayer.svelte';
  import IndexBuzzWords from '$lib/content/index/IndexServices.svelte';
  import IndexWhakatauki from '$lib/content/index/IndexWhakatauki.svelte';
  import Column from '$lib/layout/Column.svelte';
  import { padding, spacing } from '$lib/layout/Page.svelte';
  import Skewed from '$lib/layout/Skewed.svelte';
  import Banner from '$lib/media/banner/Banner.svelte';
  import BannerWhite from '$lib/media/banner/BannerWhite.svelte';
  import { state } from '$lib/store/dark';
  import { seo } from '$lib/store/seo';
  import { blur, fade } from 'svelte/transition';
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
<Column>
  <div class="{padding} lg:pt-32 {spacing} lg:space-y-32">
    <section id="banner" class="p-2">
      {#if !$state.dark}
        <div in:blur>
          <Banner />
        </div>
      {:else}
        <div in:blur>
          <BannerWhite />
        </div>
      {/if}
    </section>

    <!-- Visual break after banner via dotted border. -->
    <div class="p-4 space-y-4 sm:space-y-8">
      <div
        class="
          sm:border-t-4 border-dotted
          border-gray-300 dark:border-gray-600
          sm:pt-4 md:pt-8
        "
      >
        <IndexQuickLinks />
      </div>

      {#if news}
        <div in:fade>
          <IndexLatestNews {news} />
        </div>
      {/if}
    </div>
  </div>
</Column>

<Skewed
  gradient="bg-gradient-to-tr"
  skew={{ outer: '-skew-y-2', inner: 'skew-y-2' }}
>
  <div class="text-white text-shadow-lg">
    <IndexBlurb />
  </div>
</Skewed>

<Column>
  <div class="{padding} p-2">
    <IndexSerenityPrayer />
  </div>
</Column>

<Skewed
  gradient="bg-gradient-to-br"
  skew={{ outer: 'skew-y-2', inner: '-skew-y-2' }}
>
  <div class="text-white text-shadow-lg">
    <IndexWhakatauki />
  </div>
</Skewed>

<Column>
  <div class={padding}>
    <IndexBuzzWords />
  </div>
</Column>
