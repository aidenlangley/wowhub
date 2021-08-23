<script lang="ts">
  import { browser } from '$app/env';
  import { prefetch } from '$app/navigation';

  import { news } from '$lib/store/news';
  import Link from '../Link.svelte';

  const sorted = $news
    .sort((x, y) => y.pubDate.getTime() - x.pubDate.getTime())
    .slice(0, 5);

  if (browser) sorted.forEach((x) => prefetch(x.path));
</script>

<div class="space-y-2 sm:text-center">
  <h1
    class="
      tracking-tight font-light font-mono
      text-20 sm:text-22 md:text-24 lg:text-28 xl:text-32
    "
  >
    <span
      class="
        bg-white bg-opacity-50
        dark:bg-black dark:bg-opacity-50
        dark:text-white
      "
    >
      What's the latest?
    </span>
  </h1>
  <div
    class="
      space-y-2
      ty:text-18 sm:text-20
    "
  >
    {#each sorted as { path, pubDate, title, summary } (path)}
      <div class="space-x-2">
        <Link external={false} href={path}>
          <span class="tracking-tighter">{pubDate.toLocaleDateString()}:</span>
          <span>{title}</span>
        </Link>
      </div>
      <span
        class="
          bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50
          tracking-tight text-justify
        "
      >
        {summary}
      </span>
    {/each}
  </div>
</div>
