<script lang="ts">
  import Link from '../Link.svelte';
  import type { Article } from './Article';

  export let article: Article;
</script>

<li
  class="
    space-y-1 p-4
    border border-gray-300 rounded
    bg-gray-100 shadow
    dark:bg-gray-800 dark:border-gray-600
  "
>
  {#if article.date}
    <p class="text-14 sm:text-base">
      posted {new Date(article.date).toLocaleString()}
    </p>
  {/if}
  <Link external={false} href={article.slug}>
    <span class="tracking-tighter text-18 sm:text-20 md:text-24">
      {article.title}
    </span>
  </Link>
  <p>
    {article.description}
  </p>
</li>
