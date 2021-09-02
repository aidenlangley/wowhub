<script lang="ts">
  import TeamMemberCards from '$components/team/TeamMemberCards.svelte';
  import UnderConstruction from '$components/Error.svelte';
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
<UnderConstruction />

<div class="root pad-y gaps-y">
  <section class="pad-x">
    <TeamMemberCards />
  </section>
</div>
