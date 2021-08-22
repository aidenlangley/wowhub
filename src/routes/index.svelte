<script lang="ts" context="module">
  export const prerender = true;
</script>

<script lang="ts">
  import { seo } from '$lib/store/seo';
  import { state } from '$lib/store/dark';
  import { blur } from 'svelte/transition';

  $seo = {
    title: 'Whakaoranga Whanau Recovery Hub',
    description: 'Learn about our community AOD & recovery services',
    robots: 'none',
  };

  import Page from '$lib/layout/Page.svelte';
  import Column from '$lib/layout/Column.svelte';
  import Signage from '$lib/media/signage/Signage.svelte';
  import SignageWhite from '$lib/media/signage/SignageWhite.svelte';
  import IndexBlurb from '$lib/content/index/IndexBlurb.svelte';
  import QuickLinks from '$lib/content/QuickLinks.svelte';
</script>

<!--
  @component
  Landing page. Has to catch the users attention and give them information as
  quickly as possible.
-->
<Page>
  <Column>
    <div
      slot="center"
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
      <div class="p-4">
        <div
          class="
            sm:pt-8
            sm:border-t-4 border-dotted border-gray-300 dark:border-gray-600
            transition duration-1000
          "
        >
          <QuickLinks />
        </div>
      </div>
      <div class="p-2">
        <IndexBlurb />
      </div>
    </div>
  </Column>
</Page>
