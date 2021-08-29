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
<article
  class="
      p-4 max-w-none
      prose prose-green md:prose-lg lg:prose-xl
      dark:prose-dark
    "
>
  {#if date || author}
    <header>
      <small class="font-mono lg:text-18">
        <span class="flex space-x-1 sm:space-x-2">
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
        </span>
      </small>
    </header>
  {/if}
  <slot />
</article>
