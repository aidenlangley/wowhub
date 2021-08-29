<script lang="ts">
  import Link from '../link/Link.svelte';
  import type { Article } from './Article';

  export let article: Article;
</script>

<li
  class="space-y-1 p-4
    bg-gray-100 border border-gray-300 rounded shadow
    dark:bg-gray-900 dark:border-gray-700"
>
  <Link external={false} href={article.slug}>
    <span class="tracking-tighter text-18 sm:text-20 md:text-24">
      {article.title}
    </span>
  </Link>
  <p>
    <span>{article.description}</span>
  </p>
  {#if article.date}
    <small class="font-mono tracking-tighter text-14 sm:text-base">
      posted {new Date(article.date).toLocaleString()}
    </small>
  {/if}
</li>
