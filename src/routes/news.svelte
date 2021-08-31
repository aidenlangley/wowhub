<script lang="ts" context="module">
  import type { Article } from '$components/articles/Article';
  import ArticleList from '$components/articles/ArticleList.svelte';
  import Heading from '$components/heading/Heading.svelte';
  import Span from '$components/Span.svelte';
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

<div class="grid column pad gaps-y">
  <section>
    <Heading>
      <Span underline>Panui</Span>
    </Heading>
    <ArticleList articles={news} />
  </section>
  <section>
    <Heading>
      <Span underline>Other Docs</Span>
    </Heading>
    <ArticleList articles={docs} />
  </section>
</div>
