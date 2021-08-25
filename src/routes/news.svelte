<script lang="ts" context="module">
  import { seo } from '$lib/store/seo';
  import type { NewsMetadata } from '$news/news';
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({
    fetch,
  }): Promise<{ props: { news: NewsMetadata[] } }> => {
    const body = await (await fetch('/news/news.json')).json();
    return {
      props: {
        news: body.news,
      },
    };
  };
</script>

<script lang="ts">
  $seo = {
    title: 'Panui',
    description:
      'A blog from the Whakaoranga Whanau; news & updates from the community',
    robots: 'none',
  };

  export let news: NewsMetadata[];
</script>

<div class="pb-4 dark:bg-gray-900 dark:text-white transition duration-300">
  <h1 class="p-4 text-center">
    <span
      class="
        border-b-8 border-yellow-300
        font-serif text-64
        text-shadow
      "
    >
      Under construction.
    </span>
  </h1>
</div>
