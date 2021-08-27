<script lang="ts">
  import type { Article } from '../articles/Article';
  import ArticleList from '../articles/ArticleList.svelte';
  import Span from '../Span.svelte';
  import SubTitle from '../SubTitle.svelte';

  export let news: Article[];
</script>

<section id="latest-news" class="space-y-2 md:space-y-4">
  <SubTitle>
    <Span>What's the latest?</Span>
  </SubTitle>
  <ArticleList articles={news.slice(0, 5)} />
</section>
