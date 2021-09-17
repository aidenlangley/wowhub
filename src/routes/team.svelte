<script lang="ts">
  import Error from '$components/error/Error.svelte';
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

<article id="kaimahi" class="pad-y">
  <!-- Still working on it. -->
  <Error />

  <!-- Frontliners. -->
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
<article id="kaimahi-bts" class="pad-y">
  <!-- Fancy heading. -->
  <header class="heading column">
    <Heading>
      <span>Behind the scenes...</span>
    </Heading>
  </header>

  <!-- Member cards rendered here. -->
  <section id="members-bts" class="pad-x">
    <Cards team={$team.filter((m) => !m.frontline)} />
  </section>
</article>

<style>
  @import './team.css';
</style>
