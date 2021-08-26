<script lang="ts">
  import type { NewsMetadata } from '$routes/news/news';
  import Link from '../Link.svelte';

  export let news: NewsMetadata;
</script>

<div class="space-y-1">
  <p class="font-mono">
    posted {new Date(news.date).toLocaleString()}
  </p>
  <Link external={false} href={news.slug}>
    <span class="ty:text-18 sm:text-20 md:text-24">
      {news.title}
    </span>
  </Link>
  <p
    class="
      bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50
      tracking-tight
    "
  >
    {news.description}
  </p>
</div>
