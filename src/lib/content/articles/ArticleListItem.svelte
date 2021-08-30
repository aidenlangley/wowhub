<script lang="ts">
  import Link from '../Link.svelte';
  import type { Article } from './Article';

  export let article: Article;
</script>

<li>
  <Link href={article.slug} internal>
    <span>
      {article.title}
    </span>
  </Link>
  <p>{article.description}</p>
  {#if article.date}
    <small>
      posted {new Date(article.date).toLocaleString()}
    </small>
  {/if}
</li>

<style lang="postcss">
  li {
    padding: 1rem; /* 16px */

    display: grid;
    row-gap: 0.25rem; /* 4px */

    border-width: 1px;
    border-radius: 0.25rem; /* 4px */

    @apply bg-gray-100 border-gray-300 shadow;
  }

  :global(.dark) li {
    @apply bg-gray-900 border-gray-700;
  }

  li span {
    letter-spacing: -0.05em;
    @apply text-18;
  }

  li > small {
    letter-spacing: -0.05em;
    @apply font-mono text-14;
  }

  @screen sm {
    li span {
      @apply text-20;
    }

    li > small {
      @apply text-base;
    }
  }

  @screen md {
    li span {
      @apply text-24;
    }
  }
</style>
