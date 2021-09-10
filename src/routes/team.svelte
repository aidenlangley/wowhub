<script lang="ts">
  import UnderConstruction from '$components/Error.svelte';
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
<UnderConstruction />

<div class="root gaps-y">
  <section class="pad-y pad-x">
    <TeamMemberCards />
  </section>
</div>
