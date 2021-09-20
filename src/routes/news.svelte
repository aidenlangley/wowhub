<script lang="ts" context="module">
  import Cards from '$components/articles/Cards.svelte';
  import type { Article } from '$components/articles/types.d';
  import Heading from '$components/heading/Heading.svelte';
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
    <Cards articles={news} />
  </article>

  <!-- Docs -->
  <article class="gaps-y">
    <header>
      <Heading>Other info</Heading>
    </header>
    <Cards articles={docs} />
  </article>
</article>
