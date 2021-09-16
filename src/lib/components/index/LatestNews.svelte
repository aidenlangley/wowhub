<script lang="ts">
  import ArticleCards from '../articles/ArticleCards.svelte';
  import type { Article } from '../articles/types';
  import Heading3 from '../heading/Heading3.svelte';

  export let news: Article[];
</script>

{#if news.length > 0}
  <Heading3>What's the latest?</Heading3>
  <ArticleCards articles={news.slice(0, 5)} />
{/if}
