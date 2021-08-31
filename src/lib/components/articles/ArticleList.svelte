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
  <ol>
    {#each articles as article (article.slug)}
      <ArticleListItem {article} />
    {/each}
  </ol>
{/if}

<style lang="postcss">
  ol {
    display: grid;
    letter-spacing: -0.025em;
    padding-top: 0.5rem /* 8px */;
    row-gap: 0.5rem; /* 8px */
  }

  @screen sm {
    ol {
      font-size: 1.125rem; /* 18px */
      line-height: 1.5rem; /* 24px */
    }
  }
</style>
