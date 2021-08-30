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
    padding-top: 0.5rem /* 8px */;

    display: grid;
    row-gap: 0.5rem; /* 8px */

    letter-spacing: -0.025em;
  }

  @screen sm {
    ol {
      @apply text-18;
    }
  }
</style>
