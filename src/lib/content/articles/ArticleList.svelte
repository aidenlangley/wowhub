<script lang="ts">
  import type { Article } from './Article';
  import ArticleListItem from './ArticleListItem.svelte';

  export let articles: Article[];
</script>

<!--
  @component
  List of links to recent panui.
-->
{#if articles.length > 0}
  <ol class="grid gap-y-2 pt-2 sm:text-18 tracking-tight">
    {#each articles as article (article.slug)}
      <ArticleListItem {article} />
    {/each}
  </ol>
{/if}
