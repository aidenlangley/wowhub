<script lang="ts">
  import TeamMembers from '$components/team/TeamMembers.svelte';
  import UnderConstruction from '$components/UnderConstruction.svelte';
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
<div class="root column pad-y gaps-y">
  <section class="under-construction">
    <UnderConstruction />
  </section>
  <section>
    <TeamMembers />
  </section>
</div>
