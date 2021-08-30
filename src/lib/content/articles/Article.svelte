<!-- Cannot be ts because of lack of support from `mdsvex` -->
<script>
  import { seo } from '$lib/store/seo';

  export let title;
  export let description;
  export let date = null;
  export let author = null;

  $seo = {
    title,
    description,
    robots: 'none',
  };
</script>

<!--
  @component
  Layout component for .svx files, mostly handled via tailwindcss/typography.
  `max-w-none` is to prevent typography from drastically limiting the width of
  content.

  Don't use TypeScript, it breaks everything.
-->
<div class="root column pad">
  <article class="prose prose-green md:prose-lg lg:prose-xl dark:prose-dark">
    {#if date || author}
      <header>
        <small>
          {#if date}
            <time datetime={date}>
              posted {new Date(date).toLocaleString('en-NZ', {
                timeZone: 'Pacific/Auckland',
              })}
            </time>
          {/if}
          {#if author}
            <address>
              by {author}
            </address>
          {/if}
        </small>
      </header>
    {/if}
    <slot />
  </article>
</div>

<style lang="postcss">
  div.root > article {
    padding: 1rem;
    max-width: none;
  }

  div.root > article > header > small {
    display: flex;
    font-family: 'Fira Code';
  }

  div.root > article > header > small:first-child {
    margin-right: 0.25rem;
  }

  @screen sm {
    div.root > article > header > small:first-child {
      margin-right: 0.5rem;
    }
  }

  @screen lg {
    div.root > article > header > small {
      font-size: 1.125rem; /* 18px */
      line-height: 1.5rem; /* 24px */
    }
  }
</style>
