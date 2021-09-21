<script lang="ts" context="module">
  import ArticleCards from '$comp/articles/cards/ArticleCards.svelte';
  import Heading from '$comp/heading/Heading.svelte';
  import type { Article } from '$types/Article';
  import type { Load } from '@sveltejs/kit';
  import SvelteSeo from 'svelte-seo';

  /**
   * @type {import('@sveltejs/kit').Load}
   */
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

  /**
   * @type {import('@sveltejs/kit').Load}
   */
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

  /**
   * @type {import('@sveltejs/kit').Load}
   */
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
  export let news: Article[];
  export let docs: Article[];
</script>

<SvelteSeo
  title="News & other resources"
  description={`A news stream of blogs & updates from the Whakaoranga Whanau &
    He Waka Eke Noa Te Tai Tokerau; news & updates from the community`}
/>

<!--
  @component
  Entry point for `docs` & `news`.
-->
<!--  Full fat list of news & docs -->
<article class="root column pad-y gaps-y">
  <!-- Aside for quicker navigation-->
  <!-- <aside>
    <nav> -->
  <!-- News -->
  <!-- <ol /> -->

  <!-- Docs -->
  <!-- <ol />
    </nav>
  </aside> -->

  <!-- News -->
  <article class="gaps-y">
    <header>
      <Heading>Panui (news)</Heading>
    </header>
    <ArticleCards articles={news} />
  </article>

  <!-- Docs -->
  <article class="gaps-y">
    <header>
      <Heading>Other info</Heading>
    </header>
    <ArticleCards articles={docs} />
  </article>
</article>
