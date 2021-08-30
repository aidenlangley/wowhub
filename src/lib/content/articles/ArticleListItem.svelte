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
    font-size: 1.125rem; /* 18px */
    line-height: 1.5rem; /* 24px */
  }

  li > small {
    letter-spacing: -0.05em;
    font-size: 0.875rem; /* 14px */
    line-height: 0.875rem; /* 14px */
    font-family: 'Fira Code';
  }

  @screen sm {
    li span {
      font-size: 1.25rem; /* 20px */
      line-height: 1.75rem; /* 28px */
    }

    li > small {
      font-size: 1rem; /* 16px */
      line-height: 1.5rem; /* 24px */
    }
  }

  @screen md {
    li span {
      font-size: 1.5rem /* 24px */;
      line-height: 1.75rem /* 28px */;
    }
  }
</style>
