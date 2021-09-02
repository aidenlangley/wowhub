<script lang="ts">
  import { team } from '$store/team';
  import Heading from '../heading/Heading.svelte';
  import TeamMemberCard from './TeamMemberCard.svelte';
</script>

<!--
  @component
  Wraps a list of `TeamMemberCard`. No background on `< sm` screens, but colour
  kicks in `> sm`. Requires 2 divs for a two-tone rotated look.
-->
<div class="heading column">
  <Heading>
    <span>Mātou tīma he hui mai!</span>
    <span class="small">Meet our team!</span>
  </Heading>
</div>
<div class="root">
  <div class="inner column gradient-gray pad-y gaps-y">
    {#each $team as member, index}
      {#if index % 2 !== 0}
        <TeamMemberCard {member} right />
      {:else}
        <TeamMemberCard {member} />
      {/if}
    {/each}
  </div>
</div>

<style lang="postcss">
  div.heading {
    @apply place-items-center;

    & > :global(*) {
      z-index: 1;

      & :global(h1) {
        display: inline-grid;

        & > :global(.small) {
          font-family: theme('fontFamily.mono');
          font-weight: theme('fontWeight.medium');
          letter-spacing: theme('letterSpacing.tighter');
          text-align: end;

          @apply text-20;

          @media screen(sm) {
            @apply text-28;
          }
        }
      }
    }
  }

  div.root {
    border-color: theme('colors.green.500');
    z-index: 0;

    @media screen(sm) {
      background-color: theme('colors.green.300');
      border-radius: theme('borderRadius.DEFAULT');
      border-width: theme('borderWidth.DEFAULT');

      @apply -rotate-1;
    }

    @nest :global(.dark) & {
      background-color: theme('colors.green.800');
      border-color: theme('colors.green.600');
    }

    & > div.inner {
      border-bottom-width: theme('borderWidth.DEFAULT');
      border-color: theme('colors.gray.300');
      border-radius: theme('borderRadius.DEFAULT');
      border-top-width: theme('borderWidth.DEFAULT');

      @media screen(sm) {
        background-image: theme('backgroundImage.gradient-to-b');
        border-width: theme('borderWidth.DEFAULT');

        @apply rotate-1;
      }

      @nest :global(.dark) & {
        border-color: theme('colors.gray.600');
      }
    }
  }
</style>
