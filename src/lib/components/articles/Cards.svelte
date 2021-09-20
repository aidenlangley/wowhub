<script lang="ts">
  import type { Article } from '$types/Article';
  import Card from './Card.svelte';

  export let articles: Article[];
</script>

<!--
  @component
  List of links to recent panui.
-->
{#if articles.length > 0}
  <ol>
    {#each articles as article (article.slug)}
      <Card {article} />
    {/each}
  </ol>
{/if}

<style>
  @import './cards.css';
</style>
