<script lang="ts">
  import TeamMembers from '$lib/content/team/TeamMembers.svelte';
  import Column from '$lib/layout/Column.svelte';
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
<Column>
  <div class="p-2">
    <TeamMembers />
  </div>
</Column>
