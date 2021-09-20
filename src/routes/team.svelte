<script lang="ts">
  import Error from '$comp/error/Error.svelte';
  import Heading from '$comp/heading/Heading.svelte';
  import Cards from '$comp/team/Cards.svelte';
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
