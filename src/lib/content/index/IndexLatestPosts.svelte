<script lang="ts">
  import type { NewsMetadata } from '$news/news';
  import Link from '../Link.svelte';

  export let news: NewsMetadata[];
</script>

<!--
  @component
  Small list of 5 links to recent panui.
-->
{#if news.length > 0}
  <div class="space-y-2 md:space-y-4 sm:text-center">
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
    <div class="text-14 ty:text-base sm:text-18 tracking-tighter space-y-1">
      {#each news.slice(0, 5) as { title, description, date, slug } (slug)}
        <p class="font-mono">
          posted {new Date(date).toLocaleString()}
        </p>
        <Link external={false} href={slug}>
          <span class="ty:text-18 sm:text-20 md:text-24">
            {title}
          </span>
        </Link>
        <p
          class="
            bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50
            tracking-tight
          "
        >
          {description}
        </p>
      {/each}
    </div>
  </div>
{/if}
