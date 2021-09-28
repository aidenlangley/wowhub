<script lang="ts">
  import Heading from '$comp/heading/Heading.svelte';
  import TeamMemberCards from '$comp/team/TeamMemberCards.svelte';
  import { team } from '$stores/team';
  import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo
  title="Meet the team"
  description={`Ngā kaimahi. Tātou tīma he hui mai! Those in front and behind
    the scenes`}
/>

<!--
  @component
  Meet the team.
-->
<article id="kaimahi" class="pad-y">
  <!-- Frontliners. -->
  <header class="column">
    <Heading>
      <span>Tātou tīma he hui mai!</span>
      <small>Meet our team!</small>
    </Heading>
  </header>

  <!-- Member cards rendered here. -->
  <section id="members" class="pad-x">
    <TeamMemberCards team={$team.filter((m) => m.frontline)} />
  </section>
</article>

<!-- Behind the scenes. -->
<article id="kaimahi-bts" class="pad-y">
  <!-- Fancy heading. -->
  <header class="column">
    <Heading>
      <span>Behind the scenes...</span>
    </Heading>
  </header>

  <!-- Member cards rendered here. -->
  <section id="members-bts" class="pad-x">
    <TeamMemberCards team={$team.filter((m) => !m.frontline)} />
  </section>
</article>

<style lang="postcss">
  header {
    place-items: center;
  }

  header > :global(*) {
    z-index: 1;
  }

  header :global(h1) {
    display: inline-grid;
  }

  header :global(h1 small) {
    --font-size: 1.25rem;
    --line-height: 1.75rem;

    font-family: theme('fontFamily.mono');
    font-weight: theme('fontWeight.medium');
    letter-spacing: theme('letterSpacing.tighter');
    text-align: end;
  }

  @media screen(sm) {
    header :global(h1 small) {
      --font-size: 1.75rem;
      --line-height: 2rem;
    }
  }
</style>
