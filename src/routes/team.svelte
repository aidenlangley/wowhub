<script lang="ts">
  import TeamMembers from '$lib/content/team/TeamMembers.svelte';
  import { seo } from '$lib/store/seo';

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
<div class="grid column gap-y-4 p-4">
  <TeamMembers />
</div>
