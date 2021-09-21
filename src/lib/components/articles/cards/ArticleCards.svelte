<script lang="ts">
  import type { Article } from '$types/Article';
  import ArticleCard from '../card/ArticleCard.svelte';

  export let articles: Article[];
</script>

<!--
  @component
  List of links to recent panui.
-->
{#if articles.length > 0}
  <ol>
    {#each articles as article (article.slug)}
      <ArticleCard {article} />
    {/each}
  </ol>
{/if}

<style>
  @import './article-cards.css';
</style>
