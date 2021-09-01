<script lang="ts">
  import Link from '../link/Link.svelte';
  import type { Article } from './types.d';

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
    background-color: theme('colors.gray.100');
    border-color: theme('colors.gray.300');
    border-radius: theme('borderRadius.DEFAULT');
    border-width: theme('borderWidth.DEFAULT');
    box-shadow: theme('boxShadow.DEFAULT');
    display: grid;
    padding: theme('padding.4');
    row-gap: theme('gap.1');

    @apply bg-gray-100/80;

    &:hover {
      @apply bg-gray-50/90;
    }

    @nest :global(.dark) & {
      border-color: theme('colors.gray.700');
      color: theme('colors.white');

      @apply bg-gray-900/70;

      &:hover {
        @apply bg-gray-800/80;
      }
    }

    & span {
      letter-spacing: theme('letterSpacing.tighter');

      @apply text-18;

      @screen sm {
        @apply text-20;
      }

      @screen md {
        @apply text-24;
      }
    }

    & > small {
      font-family: theme('fontFamily.mono');
      letter-spacing: theme('letterSpacing.tighter');

      @apply text-14;

      @screen sm {
        @apply text-base;
      }
    }
  }
</style>
