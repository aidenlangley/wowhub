<script lang="ts">
  import ArticleCard from './ArticleCard.svelte';
  import type { Article } from './types';

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

<style lang="postcss">
  ol {
    display: grid;
    letter-spacing: theme('letterSpacing.tight');
    padding-top: theme('padding.2');
    row-gap: theme('gap.2');

    @media screen(sm) {
      @apply text-18;
    }
  }
</style>
