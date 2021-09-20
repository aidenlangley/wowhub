<!-- Cannot be ts because of lack of support from `mdsvex` -->
<script>
  import SvelteSeo from 'svelte-seo';

  export let title;
  export let description;
  export let date = null;
  export let author = null;
</script>

<SvelteSeo {title} {description} />

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

<style>
  @import './article.css';
</style>
