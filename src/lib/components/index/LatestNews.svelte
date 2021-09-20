<script lang="ts">
  import Cards from '../articles/Cards.svelte';
  import type { Article } from '../articles/types.d';
  import Heading3 from '../heading/Heading3.svelte';

  export let news: Article[];
</script>

{#if news.length > 0}
  <Heading3>What's the latest?</Heading3>
  <Cards articles={news.slice(0, 5)} />
{/if}
