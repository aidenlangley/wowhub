<script lang="ts">
  import type { Article } from '../articles/Article';
  import ArticleList from '../articles/ArticleList.svelte';
  import Span from '../Span.svelte';

  export let news: Article[];
</script>

<section id="latest-news" class="space-y-2 md:space-y-4">
  <h1
    class="
      sm:text-center
      tracking-tight font-light font-mono
      text-20 sm:text-22 md:text-24 lg:text-28 xl:text-32
    "
  >
    <Span>What's the latest?</Span>
  </h1>
  <ArticleList articles={news.slice(0, 5)} />
</section>
