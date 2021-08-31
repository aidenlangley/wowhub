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
    letter-spacing: theme('letterSpacing.tight');
    padding-top: theme('padding.2');
    row-gap: theme('gap.2');

    @screen sm {
      @apply text-18;
    }
  }
</style>
