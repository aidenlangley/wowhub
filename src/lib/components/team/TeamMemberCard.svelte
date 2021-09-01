<script lang="ts">
  import type { Member } from '$lib/store/team.d';
  import Paragraph from '../Paragraph.svelte';

  export let member: Member;
</script>

<section class="member">
  <img src={member.imgSrc} alt="image of {member.name}" />
  <h1>
    <span>
      {member.name}
    </span>
  </h1>
  <h2>
    <span>
      {member.tags.join(' | ')}
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
    padding: theme('padding.2');
    row-gap: theme('gap.2');

    @screen ty {
      row-gap: theme('gap.4');
    }

    @screen sm {
      gap: theme('gap.4');
      grid-template-areas:
        'img  name  '
        'img  tags  '
        'img  blurb ';
      grid-template-columns: 1fr 2fr;
    }

    & > img {
      border-color: theme('colors.gray.300');
      border-radius: theme('borderRadius.xl');
      border-width: theme('borderWidth.DEFAULT');
      max-height: theme('height.52');
      object-fit: cover;
      place-self: center;
      width: 100%;

      @apply drop-shadow-lg;

      @screen ty {
        max-height: theme('height.80');
      }

      @screen sm {
        grid-area: img;
        height: 100%;
        max-width: theme('width.96');
        place-content: center;
      }
    }

    & > h1 {
      letter-spacing: theme('letterSpacing.tighter');
      text-shadow: theme('dropShadow.lg');

      @apply text-64;

      & > span {
        border-bottom-width: theme('borderWidth.8');
        border-color: theme('colors.green.300');
      }

      @screen sm {
        grid-area: name;
      }
    }

    & > h2 {
      font-family: theme('fontFamily.mono');
      letter-spacing: theme('letterSpacing.tight');
      padding: theme('padding.1');
      padding-top: theme('padding.2');

      @screen sm {
        grid-area: tags;
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
