<script lang="ts">
  import { TranslateDirection } from '$lib/layout/translate/types.d';
  import type { Member } from '$store/types.d';
  import Heading from '../heading/Heading.svelte';
  import Paragraph from '../Paragraph.svelte';

  export let member: Member;
  export let right = false;
  export let tallImg = false;
</script>

<section class="member" class:right>
  <img
    src={member.imgSrc}
    alt="image of {member.name}"
    class:tall={member.tallImg}
  />
  <div class="name">
    <Heading
      direction={right
        ? TranslateDirection.BottomLeft
        : TranslateDirection.BottomRight}
    >
      {member.name}
    </Heading>
  </div>
  <h2 class="tags">
    <span>
      {member.tags.join(', ')}
    </span>
  </h2>
  <div class="blurb">
    {#each member.about as line}
      <Paragraph>{line}</Paragraph>
    {/each}
  </div>
</section>

<style lang="postcss">
  section.member {
    display: inline-grid;
    grid-auto-flow: row;
    row-gap: theme('gap.2');

    @screen sm {
      align-items: end;
      gap: theme('gap.3');
      grid-template-areas:
        'img  name  '
        'img  tags  '
        'img  blurb ';
      grid-template-columns: 1fr 2fr;

      &.right {
        grid-template-areas:
          'name  img  '
          'tags  img  '
          'blurb img  ';
        grid-template-columns: 2fr 1fr;
        place-items: end;
      }
    }

    @screen lg {
      gap: theme('gap.4');
      grid-template-areas:
        'img  name  tags  '
        'img  blurb blurb '
        'img  blurb blurb ';
      grid-template-columns: 1fr auto 1fr;

      &.right {
        grid-template-areas:
          'tags   name   img  '
          'blurb  blurb  img  '
          'blurb  blurb  img  ';
        grid-template-columns: 1fr auto 1fr;

        & > h2.tags {
          padding-right: theme('padding.2');
        }
      }
    }

    & > div.name {
      @screen sm {
        grid-area: name;
      }
    }

    & > img {
      border-color: theme('colors.gray.300');
      border-radius: theme('borderRadius.xl');
      border-width: theme('borderWidth.DEFAULT');
      max-height: theme('height.48');
      object-fit: cover;
      place-self: center;
      width: 100%;

      @apply drop-shadow-lg;

      @nest :global(.dark) & {
        border-color: theme('colors.gray.700');
      }

      @screen ty {
        max-height: theme('height.64');
      }

      @screen sm {
        grid-area: img;
        height: 100%;
        max-width: theme('width.96');
      }
    }

    & > h2.tags {
      color: theme('colors.gray.700');
      font-family: theme('fontFamily.mono');
      letter-spacing: theme('letterSpacing.tighter');

      @apply text-18;

      @nest :global(.dark) & {
        color: theme('colors.gray.300');
      }

      @screen sm {
        grid-area: tags;

        @apply text-20;
      }

      @screen md {
        letter-spacing: theme('letterSpacing.tight');

        @apply text-24;
      }

      @screen lg {
        padding-left: theme('padding.2');

        @apply text-28;
      }
    }

    & > div.blurb {
      text-align: justify;

      @screen sm {
        grid-area: blurb;
      }
    }
  }
</style>
