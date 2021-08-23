<script lang="ts" context="module">
  export const padding =
    'pt-4 sm:pt-8 md:pt-16 lg:pt-32 ' +
    'pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24';
  export const spacing = 'space-y-4 sm:space-y-8 md:space-y-16 lg:space-y-32';
</script>

<script lang="ts">
  import { seo } from '$lib/store/seo';

  $seo = {
    title: 'Whakaoranga Whanau Recovery Hub',
    description:
      'He Waka Eke Noa te tai Tokerau. Learn about our community AOD & recovery services',
    robots: 'none',
  };

  import { state } from '$lib/store/dark';
  import { blur } from 'svelte/transition';

  import Page from '$lib/layout/Page.svelte';
  import Column from '$lib/layout/Column.svelte';
  import Skewed from '$lib/layout/Skewed.svelte';

  import Signage from '$lib/media/signage/Signage.svelte';
  import SignageWhite from '$lib/media/signage/SignageWhite.svelte';

  import IndexQuickLinks from '$lib/content/index/IndexQuickLinks.svelte';
  import IndexLatestPosts from '$lib/content/index/IndexLatestPosts.svelte';
  import IndexBlurb from '$lib/content/index/IndexBlurb.svelte';
  import IndexWhakatauki from '$lib/content/index/IndexWhakatauki.svelte';
  import IndexSerenityPrayer from '$lib/content/index/IndexSerenityPrayer.svelte';
  import IndexBuzzWords from '$lib/content/index/IndexServices.svelte';
</script>

<!--
  @component
  Landing page. Has to catch the users attention and give them information as
  quickly as possible.
-->
<Page>
  <Column>
    <div class="{padding} {spacing}">
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
      <div class="p-2 space-y-4 sm:space-y-8">
        <div
          class="
            sm:pt-4 md:pt-8
            sm:border-t-4 border-dotted
            border-gray-300 dark:border-gray-600
            transition duration-1000
            space-y-4
          "
        >
          <IndexQuickLinks />
        </div>
        <div class="p-2">
          <IndexLatestPosts />
        </div>
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
    <div class={padding}>
      <div class="p-2">
        <IndexSerenityPrayer />
      </div>
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
      <div class="p-2">
        <IndexBuzzWords />
      </div>
    </div>
  </Column>
</Page>
