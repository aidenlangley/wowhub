<script lang="ts">
  import Error from '$components/Error.svelte';
  import Heading from '$components/heading/Heading.svelte';
  import Cards from '$components/team/Cards.svelte';
  import { seo } from '$store/seo';
  import { team } from '$store/team';

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
<Error />

<!-- Frontliners. -->
<article id="kaimahi">
  <!-- Fancy heading. -->
  <header class="heading column">
    <Heading>
      <span>Tātou tīma he hui mai!</span>
      <span class="small">Meet our team!</span>
    </Heading>
  </header>

  <!-- Member cards rendered here. -->
  <section id="members" class="pad-x">
    <Cards team={$team.filter((m) => m.frontline)} />
  </section>
</article>

<!-- Behind the scenes. -->
<article id="kaimahi">
  <!-- Fancy heading. -->
  <header class="heading column">
    <Heading>
      <span>Behind the scenes...</span>
    </Heading>
  </header>

  <!-- Member cards rendered here. -->
  <section id="members" class="pad-x">
    <Cards team={$team.filter((m) => !m.frontline)} />
  </section>
</article>

<style lang="postcss">
  @import './team.css';
</style>
