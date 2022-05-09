<script lang="ts">
  import Heading from '../heading/Heading.svelte';
  import Link from '../link/Link.svelte';
  import Paragraph from '../paragraph/Paragraph.svelte';

  export let title: string;
  export let description: string;
  export let imgUrl: string;
  export let url: string;

  const MAX_LENGTH = 256;
  if (description.length > MAX_LENGTH) {
    description = description.slice(0, MAX_LENGTH).trim() + '...';
  }
</script>

<!--
  @component
  A card that displays a brief overview of programme information, and links to
  a fuller page.
-->
<article class="pad-y">
  <Heading>{title}</Heading>
  <img src={imgUrl} alt="image of {title}" />
  <Paragraph>{description}</Paragraph>
  <Link href={url} internal>Find out more</Link>
</article>

<style lang="postcss">
  article {
    --gaps: theme('gap.4');

    display: grid;
    grid-template-areas:
      'title'
      'img  '
      'blurb'
      'links';
    gap: var(--gaps);
    padding: var(--gaps);

    background-color: theme('colors.gray.100');
    border-color: theme('colors.gray.200');

    border-radius: theme('borderRadius.xl');
    border-width: theme('borderWidth.DEFAULT');

    margin-bottom: theme('margin.4');
  }

  :global(.dark) article,
  :global(.dark) article > img {
    background-color: theme('colors.gray.900');
    border-color: theme('colors.gray.800');
  }

  article > img {
    max-height: theme('height.48');
    width: 100%;
    object-fit: cover;
    border-radius: theme('borderRadius.md');
    border-width: theme('borderWidth.DEFAULT');
    border-color: theme('colors.gray.200');
  }
</style>
