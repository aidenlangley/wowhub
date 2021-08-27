<!-- Cannot be ts because of lack of support from `mdsvex` -->
<script>
  import Column from '$lib/layout/Column.svelte';
  import { padding } from '$lib/layout/Page.svelte';
  import { seo } from '$lib/store/seo';

  export let title;
  export let description;
  export let date = null;

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
<Column>
  <div
    class="
      p-4 max-w-none
      prose prose-green md:prose-lg lg:prose-xl
      dark:prose-dark
    "
  >
    {#if date}
      <small class="font-mono lg:text-18">
        posted: {new Date(date).toLocaleString('en-NZ', {
          timeZone: 'Pacific/Auckland',
        })}
      </small>
    {/if}
    <slot />
  </div>
</Column>
