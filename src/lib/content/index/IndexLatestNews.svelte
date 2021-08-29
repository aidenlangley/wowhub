<script lang="ts">
  import type { Article } from '../articles/Article';
  import ArticleList from '../articles/ArticleList.svelte';

  export let news: Article[];
</script>

<h2>What's the latest?</h2>
<ArticleList articles={news.slice(0, 5)} />
