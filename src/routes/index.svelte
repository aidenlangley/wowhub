<script lang="ts" context="module">
  import type { Article } from '$components/articles/types.d';
  import IndexBlurb from '$components/index/IndexBlurb.svelte';
  import IndexLatestNews from '$components/index/IndexLatestNews.svelte';
  import IndexQuickLinks from '$components/index/IndexQuickLinks.svelte';
  import IndexSerenityPrayer from '$components/index/IndexSerenityPrayer.svelte';
  import IndexWhakatauki from '$components/index/IndexWhakatauki.svelte';
  import IndexServices from '$components/index/services/IndexServices.svelte';
  import Skew from '$layout/skew/Skew.svelte';
  import { SkewDirection, SkewStrength } from '$layout/skew/types.d';
  import { GradientColour } from '$layout/types.d';
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
<div class="root column pad-y gaps-y">
  <section class="pad-y">
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

<section class="blurb pad-x">
  <Skew
    direction={SkewDirection.Left}
    strength={SkewStrength.Slight}
    colour={GradientColour.Green}
  >
    <IndexBlurb />
  </Skew>
</section>

<section class="column pad-y" aria-hidden="true">
  <IndexSerenityPrayer />
</section>

<section class="whakatauki pad-x">
  <Skew
    direction={SkewDirection.Right}
    strength={SkewStrength.Slight}
    colour={GradientColour.Green}
  >
    <IndexWhakatauki />
  </Skew>
</section>

<section class="pad-y" aria-hidden="true">
  <IndexServices />
</section>

<style lang="postcss">
  div.root {
    transition-duration: 1000ms;
    transition-timing-function: theme('transitionTimingFunction.in-out');
  }
</style>
