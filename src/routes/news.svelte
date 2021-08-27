<script lang="ts" context="module">
  import Link from '$lib/content/Link.svelte';
  import NewsList from '$lib/content/news/NewsList.svelte';
  import Column from '$lib/layout/Column.svelte';
  import { seo } from '$lib/store/seo';
  import type { NewsMetadata } from '$routes/news/news';
  import type { Load } from '@sveltejs/kit';
  import type { DocMetaData } from './docs/docs';

  export const loadDocs: Load = async ({
    fetch,
  }): Promise<{ props: { docs: DocMetaData[] } }> => {
    const docs = await (await fetch('/docs/docs.json')).json();

    return {
      props: {
        docs: docs.docs,
      },
    };
  };

  export const loadNews: Load = async ({
    fetch,
  }): Promise<{ props: { newsList: NewsMetadata[] } }> => {
    const news = await (await fetch('/news/news.json')).json();

    return {
      props: {
        newsList: news.newsList,
      },
    };
  };

  export const load: Load = async ({
    fetch,
  }): Promise<{ props: { newsList: NewsMetadata[]; docs: DocMetaData[] } }> => {
    const news = await (await fetch('/news/news.json')).json();
    const docs = await (await fetch('/docs/docs.json')).json();

    return {
      props: {
        newsList: news.newsList,
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

  export let newsList: NewsMetadata[];
  export let docs: DocMetaData[];

  const titleStyle =
    'font-bold font-serif tracking-tighter text-shadow ' +
    'text-28 md:text-42 lg:text-64 ' +
    'bg-white bg-opacity-50 ' +
    'dark:bg-black dark:bg-opacity-50 ' +
    'border-b-4 border-green-300 dark:border-yellow-300';
</script>

<Column>
  <div class="p-2 space-y-4 md:space-y-6 lg:space-y-8">
    <h1>
      <span class={titleStyle}>Panui</span>
    </h1>
    <NewsList {newsList} />
    <h1>
      <span class={titleStyle}>Other Docs</span>
    </h1>
    <div class="space-y-2">
      {#each docs as doc}
        <div>
          <Link external={false} href={doc.slug}>
            <span class="ty:text-18 sm:text-20 md:text-24">
              {doc.title}
            </span>
          </Link>
          <p class="font-mono tracking-tighter">
            {doc.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</Column>
