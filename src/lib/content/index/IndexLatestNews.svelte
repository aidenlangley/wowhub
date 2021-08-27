<script lang="ts">
  import type { Article } from '../articles/Article';
  import ArticleList from '../articles/ArticleList.svelte';
  import HeadingSmall from '../heading/HeadingSmall.svelte';

  export let news: Article[];
</script>

<section id="latest-news" class="space-y-2 md:space-y-4">
  <HeadingSmall>What's the latest?</HeadingSmall>
  <ArticleList articles={news.slice(0, 5)} />
</section>
