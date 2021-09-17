<script lang="ts" context="module">
  import Cards from '$components/articles/Cards.svelte';
  import type { Article } from '$components/articles/types.d';
  import Heading from '$components/heading/Heading.svelte';
  import { seo } from '$store/seo';
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
    title: 'Panui & other documents',
    description:
      'A blog from the Whakaoranga Whanau; news & updates from the community',
    robots: 'none',
  };

  export let news: Article[];
  export let docs: Article[];
</script>

<!--
  @component
  Entry point for `docs` & `news`.
-->

<!--  Full fat list of news & docs -->
<article id="panui" class="root column pad-y gaps-y">
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
  <section class="gaps-y">
    <Heading>Panui (news)</Heading>
    <Cards articles={news} />
  </section>

  <!-- Docs -->
  <section class="gaps-y">
    <Heading>Other info</Heading>
    <Cards articles={docs} />
  </section>
</article>
