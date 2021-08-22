<script lang="ts">
  import { seo } from '$lib/store/seo';
  import { state } from '$lib/store/dark';
  import { blur, fly } from 'svelte/transition';

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

  let hideHeader = true;
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
      <div class="p-2">
        <IndexBlurb />
      </div>
      <div class="p-2">
        <IndexBuzzWords />
      </div>
      <div class="p-2">
        <IndexWhakatauki />
      </div>
    </div>
  </Column>
</Page>
