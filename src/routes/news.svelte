<script lang="ts" context="module">
  import ArticleCards from '$components/articles/ArticleCards.svelte';
  import type { Article } from '$components/articles/types.d';
  import Translate from '$layout/translate/Translate.svelte';
  import { TranslateDirection } from '$layout/translate/types.d';
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
  import Tooltip from '$lib/components/Tooltip.svelte';

  $seo = {
    title: 'Panui & other documents',
    description:
      'A blog from the Whakaoranga Whanau; news & updates from the community',
    robots: 'none',
  };

  export let news: Article[];
  export let docs: Article[];
</script>

<div class="root column pad-y gaps-y">
  <section class="gaps-y">
    <Translate direction={TranslateDirection.BottomRight}>
      <h1>Panui (news)</h1>
    </Translate>
    <ArticleCards articles={news} />
  </section>
  <section class="gaps-y">
    <Translate direction={TranslateDirection.BottomRight}>
      <h1>Other info</h1>
    </Translate>
    <ArticleCards articles={docs} />
  </section>
</div>

<style lang="postcss">
  div.root {
    & > section {
      & > :global(.bg) {
        background-color: theme('colors.black');
        border-radius: theme('borderRadius.lg');

        @nest :global(.dark) & {
          background-color: theme('colors.green.300');
        }
      }

      & h1 {
        background-color: theme('colors.green.300');
        border-radius: theme('borderRadius.lg');
        font-family: theme('fontFamily.serif');
        font-weight: theme('fontWeight.medium');
        padding: theme('padding.2');

        @nest :global(.dark) & {
          background-color: theme('colors.green.800');
        }
      }
    }
  }
</style>
