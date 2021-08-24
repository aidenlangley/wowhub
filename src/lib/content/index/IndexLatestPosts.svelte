<script lang="ts">
  import type { NewsMetadata } from '$news/news.json';
  import Link from '../Link.svelte';

  export let news: NewsMetadata[];
</script>

<!--
  @component
  Small list of 5 links to recent panui.
-->
{#if news.length > 0}
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
      {#each news.slice(0, 5) as { title, description, date, slug } (slug)}
        <div class="space-x-2">
          <Link external={false} href={slug}>
            <span class="tracking-tighter">
              {new Date(date).toLocaleDateString()}:
            </span>
            <span>{title}</span>
          </Link>
        </div>
        <span
          class="
            bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50
            tracking-tight text-justify
          "
        >
          {description}
        </span>
      {/each}
    </div>
  </div>
{/if}
