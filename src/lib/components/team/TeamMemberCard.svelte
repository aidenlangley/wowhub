<script lang="ts">
  import { TranslateDirection } from '$lib/layout/translate/types.d';
  import Icon from '$lib/media/Icon.svelte';
  import type { Member } from '$store/types.d';
  import { UserAdd, UserCircle, Users } from 'svelte-hero-icons';
  import Heading from '../heading/Heading.svelte';
  import Paragraph from '../Paragraph.svelte';

  export let member: Member;
  export let right = false;
</script>

<section class="member" class:right>
  {#if member.imgSrc}
    <img
      src={member.imgSrc}
      alt="image of {member.name}"
      class:tall={member.tallImg}
    />
  {:else}
    <Icon src={UserCircle} solid size="100%" />
  {/if}
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
    transition-duration: 500ms;
    transition-timing-function: theme('transitionTimingFunction.in-out');

    @screen sm {
      align-items: center;
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
        justify-items: right;
        text-align: right;
      }
    }

    @screen lg {
      gap: theme('gap.4');
      grid-template-columns: 2fr 3fr;

      &.right {
        grid-template-columns: 3fr 2fr;
      }
    }

    & > div.name {
      @screen sm {
        grid-area: name;
      }
    }

    & > img {
      border-radius: theme('borderRadius.DEFAULT');
      box-shadow: theme('dropShadow.md');
      object-fit: cover;
    }

    & :global(svg) {
      color: theme('colors.gray.700');

      @nest :global(.dark) & {
        color: theme('colors.green.300');
      }
    }

    & > img,
    & :global(svg) {
      max-height: theme('height.48');
      place-self: center;
      width: 100%;

      &.tall {
        @apply object-top;
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
      align-self: end;
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
      }

      @screen lg {
        padding-left: theme('padding.2');
        padding-right: theme('padding.2');
      }

      @screen xl {
        font-size: theme('fontSize.26');
      }
    }

    & > div.blurb {
      @screen sm {
        font-weight: theme('fontWeight.light');
        grid-area: blurb;
      }
    }
  }
</style>
