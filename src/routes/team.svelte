<script lang="ts">
  import Heading from '$components/heading/Heading.svelte';
  import TeamMemberCards from '$components/team/TeamMemberCards.svelte';
  import { seo } from '$store/seo';

  $seo = {
    title: 'Ngā kaimahi',
    description: 'Meet the staff; those in front and behind the scenes',
    robots: 'none',
  };
</script>

<!--
  @component
  Meet the team.
-->
<article id="kaimahi">
  <!-- Fancy heading. -->
  <header class="heading column">
    <Heading>
      <span>Tātou tīma he hui mai!</span>
      <span class="small">Meet our team!</span>
    </Heading>
  </header>

  <!-- Member cards rendered here. -->
  <section id="members" class="pad-x gaps-y">
    <TeamMemberCards />
  </section>
</article>

<style lang="postcss">
  @import './team.css';
</style>
