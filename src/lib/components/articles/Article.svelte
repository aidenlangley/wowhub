<!-- Cannot be ts because of lack of support from `mdsvex` -->
<script>
  import { seo } from '$lib/store/seo'

  export let title
  export let description
  export let date = null
  export let author = null

  $seo = {
    title,
    description,
    robots: 'none',
  }
</script>

<!--
  @component
  Layout component for .svx files, mostly handled via tailwindcss/typography.
  `max-w-none` is to prevent typography from drastically limiting the width of
  content.

  Don't use TypeScript, it breaks everything.
-->
<div class="root column pad-y">
  <article
    class="prose prose-green prose-sm
      sm:prose sm:prose-green md:prose-lg lg:prose-xl dark:prose-dark"
  >
    {#if date || author}
      <header class="metadata">
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
  /*
  Limit complexity here. Tailwind directives are okay, nesting is not.
  Once I remove `tailwindcss/typography`, we're good to use more complex PostCSS
  enabled code.
  */
  div.root > article {
    max-width: none;
  }

  div.root > article > header.metadata > small {
    column-gap: theme('gap.1');
    display: inline-grid;
    font-family: theme('fontFamily.mono');
    grid-auto-flow: column;
  }

  @screen lg {
    div.root > article > header.metadata > small {
      @apply text-18;
    }
  }
</style>
