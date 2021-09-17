<script lang="ts">
  import Cards from '$components/articles/Cards.svelte';
  import type { Article } from '$components/articles/types';
  import Heading3 from '$components/heading/Heading3.svelte';

  export let news: Article[];
</script>

{#if news.length > 0}
  <Heading3>What's the latest?</Heading3>
  <Cards articles={news.slice(0, 5)} />
{/if}
