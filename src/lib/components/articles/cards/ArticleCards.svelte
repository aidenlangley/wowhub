<script lang="ts">
  import type { Article } from '$models/Article';
  import Heading3 from '../../heading/Heading3.svelte';
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
{:else}
  <Heading3>Kaua panui, aroha mai!</Heading3>
{/if}

<style>
  @import './article-cards.css';
</style>
