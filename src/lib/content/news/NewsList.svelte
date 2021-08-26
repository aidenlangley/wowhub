<script lang="ts">
  import type { NewsMetadata } from '$routes/news/news';
  import NewsListItem from './NewsListItem.svelte';

  export let newsList: NewsMetadata[];
</script>

<!--
  @component
  List of links to recent panui.
-->
{#if newsList.length > 0}
  <div class="text-14 ty:text-base sm:text-18 tracking-tighter space-y-2">
    {#each newsList as news (news.slug)}
      <NewsListItem {news} />
    {/each}
  </div>
{/if}
