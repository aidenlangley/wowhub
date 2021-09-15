<script lang="ts">
  import { team } from '$store/team';
  import TeamMemberCard from './TeamMemberCard.svelte';
</script>

<!--
  @component
  Wraps a list of `TeamMemberCard`. No background on `< sm` screens, but colour
  kicks in `> sm`. Requires 2 divs for a two-tone rotated look.
-->
<div class="bg">
  <div class="bg-inner column gradient-gray pad-y gaps-y">
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
  .bg {
    /* Underneath bg-inner and children */
    z-index: 0;

    /* Styles */
    background-color: theme('colors.green.300');
    border-color: theme('colors.green.500');

    @media screen(sm) {
      border-radius: theme('borderRadius.DEFAULT');
      border-width: theme('borderWidth.DEFAULT');
      transform: rotate(-0.5deg); /* Need to rotate less as the list grows... */
    }
  }

  :global(.dark) .bg {
    background-color: theme('colors.green.800');
    border-color: theme('colors.green.600');
  }

  .bg .bg-inner {
    border-bottom-width: theme('borderWidth.DEFAULT');
    border-color: theme('colors.gray.300');
    border-radius: theme('borderRadius.DEFAULT');
    border-top-width: theme('borderWidth.DEFAULT');

    @media screen(sm) {
      background-image: theme('backgroundImage.gradient-to-b');
      border-width: theme('borderWidth.DEFAULT');
      transform: rotate(0.5deg);
    }
  }

  :global(.dark) .bg .bg-inner {
    border-color: theme('colors.gray.600');
  }
</style>
