<script lang="ts" context="module">
  import ArticleCards from '$components/articles/ArticleCards.svelte'
  import type { Article } from '$components/articles/types.d'
  import Heading from '$lib/components/heading/Heading.svelte'
  import { seo } from '$store/seo'
  import type { Load } from '@sveltejs/kit'

  export const loadDocs: Load = async ({
    fetch,
  }): Promise<{ props: { docs: Article[] } }> => {
    const docs = await (await fetch('/docs/docs.json')).json()

    return {
      props: {
        docs: docs.docs,
      },
    }
  }

  export const loadNews: Load = async ({
    fetch,
  }): Promise<{ props: { news: Article[] } }> => {
    const news = await (await fetch('/news/news.json')).json()

    return {
      props: {
        news: news.news,
      },
    }
  }

  export const load: Load = async ({
    fetch,
  }): Promise<{ props: { news: Article[]; docs: Article[] } }> => {
    const news = await (await fetch('/news/news.json')).json()
    const docs = await (await fetch('/docs/docs.json')).json()

    return {
      props: {
        news: news.news,
        docs: docs.docs,
      },
    }
  }
</script>

<script lang="ts">
  $seo = {
    title: 'Panui & other documents',
    description:
      'A blog from the Whakaoranga Whanau; news & updates from the community',
    robots: 'none',
  }

  export let news: Article[]
  export let docs: Article[]
</script>

<aside>
  <nav>
    <!-- News -->
    <ol />

    <!-- Docs -->
    <ol />
  </nav>
</aside>
<div class="root column gaps-y">
  <section class="gaps-y">
    <Heading>Panui (news)</Heading>
    <ArticleCards articles={news} />
  </section>
  <section class="gaps-y">
    <Heading>Other info</Heading>
    <ArticleCards articles={docs} />
  </section>
</div>
