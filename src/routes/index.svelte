<script lang="ts">
  import { seo } from '$lib/store/seo';
  import { state } from '$lib/store/dark';
  import { blur } from 'svelte/transition';

  $seo = {
    title: 'Whakaoranga Whanau Recovery Hub',
    description:
      'He Waka Eke Noa te tai Tokerau. Learn about our community AOD & recovery services',
    robots: 'none',
  };

  import Page from '$lib/layout/Page.svelte';
  import Column from '$lib/layout/Column.svelte';
  import Signage from '$lib/media/signage/Signage.svelte';
  import SignageWhite from '$lib/media/signage/SignageWhite.svelte';
  import QuickLinks from '$lib/content/QuickLinks.svelte';

  import IndexBlurb from '$lib/content/index/IndexBlurb.svelte';
  import IndexBuzzWords from '$lib/content/index/IndexBuzzWords.svelte';
  import IndexWhakatauki from '$lib/content/index/IndexWhakatauki.svelte';
  import IndexLatestPosts from '$lib/content/index/IndexLatestPosts.svelte';
</script>

<!--
  @component
  Landing page. Has to catch the users attention and give them information as
  quickly as possible.
-->
<Page>
  <Column>
    <div
      class="
        col-start-2
        pt-4 sm:pt-8 md:pt-16 lg:pt-32
        space-y-4 sm:space-y-8 md:space-y-16 lg:space-y-32
        pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24
      "
    >
      <div class="p-2">
        {#if !$state.dark}
          <div in:blur>
            <Signage />
          </div>
        {:else}
          <div in:blur>
            <SignageWhite />
          </div>
        {/if}
      </div>
      <div class="p-2">
        <div
          class="
            sm:pt-4 md:pt-8 sm:pb-4 md:pb-8
            sm:border-t-4 border-dotted
            border-gray-300 dark:border-gray-600
            transition duration-1000
            space-y-4
          "
        >
          <QuickLinks />
        </div>
      </div>
    </div>
  </Column>
  <div
    class="
      bg-gradient-to-tl bg-green-500 bg-opacity-80 from-green-300
      dark:bg-green-800 dark:bg-opacity-80 dark:from-green-500
      border-t border-b border-gray-300 dark:border-gray-800 
      -skew-y-2
    "
  >
    <Column>
      <div
        class="
          pt-12 sm:pt-14 md:pt-16 lg:pt-20 xl:pt-24
          pb-12 sm:pb-14 md:pb-16 lg:pb-20 xl:pb-24
          p-2 skew-y-2
        "
      >
        <IndexBlurb />
      </div>
    </Column>
  </div>
  <Column>
    <div
      class="
        col-start-2
        pt-4 sm:pt-8 md:pt-16 lg:pt-32
        space-y-4 sm:space-y-8 md:space-y-16 lg:space-y-32
        pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24
      "
    >
      <div class="p-2">
        <IndexBuzzWords />
      </div>
    </div>
  </Column>
  <div
    class="
      bg-gradient-to-br bg-green-500 bg-opacity-80 from-green-300
      dark:bg-green-800 dark:bg-opacity-80 dark:from-green-500
      border-t border-b border-gray-300 dark:border-gray-800 
      skew-y-2
    "
  >
    <Column>
      <div
        class="
          pt-12 sm:pt-14 md:pt-16 lg:pt-20 xl:pt-24
          pb-12 sm:pb-14 md:pb-16 lg:pb-20 xl:pb-24
          p-2 -skew-y-2
        "
      >
        <IndexWhakatauki />
      </div>
    </Column>
  </div>
  <Column>
    <div>
      <div class="p-2 pb-8">
        <IndexLatestPosts />
      </div>
    </div>
  </Column>
</Page>
