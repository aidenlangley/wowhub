<script lang="ts">
  import type { Article } from '../articles/Article';
  import ArticleList from '../articles/ArticleList.svelte';
  import Heading3 from '../heading/Heading3.svelte';
  import Span from '../Span.svelte';

  export let news: Article[];
</script>

{#if news.length > 0}
  <Heading3>
    <Span>What's the latest?</Span>
  </Heading3>
  <ArticleList articles={news.slice(0, 5)} />
{/if}
