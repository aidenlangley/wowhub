<script lang="ts" context="module">
  import type { Article } from '$lib/content/articles/Article';
  import ArticleList from '$lib/content/articles/ArticleList.svelte';
  import Heading from '$lib/content/heading/Heading.svelte';
  import { seo } from '$lib/store/seo';
  import type { Load } from '@sveltejs/kit';

  export const loadDocs: Load = async ({
    fetch,
  }): Promise<{ props: { docs: Article[] } }> => {
    const docs = await (await fetch('/docs/docs.json')).json();

    return {
      props: {
        docs: docs.docs,
      },
    };
  };

  export const loadNews: Load = async ({
    fetch,
  }): Promise<{ props: { news: Article[] } }> => {
    const news = await (await fetch('/news/news.json')).json();

    return {
      props: {
        news: news.news,
      },
    };
  };

  export const load: Load = async ({
    fetch,
  }): Promise<{ props: { news: Article[]; docs: Article[] } }> => {
    const news = await (await fetch('/news/news.json')).json();
    const docs = await (await fetch('/docs/docs.json')).json();

    return {
      props: {
        news: news.news,
        docs: docs.docs,
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

  export let news: Article[];
  export let docs: Article[];
</script>

<section id="news-docs-list" class="p-2 space-y-4 md:space-y-6 lg:space-y-8">
  <Heading>Panui</Heading>
  <ArticleList articles={news} />
  <Heading>Other Docs</Heading>
  <ArticleList articles={docs} />
</section>
