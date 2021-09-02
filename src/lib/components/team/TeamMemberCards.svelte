<script lang="ts">
  import { team } from '$store/team';
  import TeamMemberCard from './TeamMemberCard.svelte';
</script>

<!--
  @component
  Wraps a list of `TeamMemberCard`. No background on `< sm` screens, but colour
  kicks in `> sm`. Requires 2 divs for a two-tone rotated look.
-->
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
  div.root {
    @screen sm {
      background-color: theme('colors.green.300');
      border-radius: theme('borderRadius.DEFAULT');
      box-shadow: theme('boxShadow.md');

      @apply -rotate-2;

      & > div.inner {
        background-image: theme('backgroundImage.gradient-to-b');
        border-color: theme('colors.gray.300');
        border-radius: theme('borderRadius.DEFAULT');
        border-width: theme('borderWidth.DEFAULT');
        box-shadow: theme('boxShadow.md');

        @apply rotate-2;

        @nest :global(.dark) & {
          border-color: theme('colors.gray.600');
        }
      }
    }
  }
</style>
