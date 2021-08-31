<script lang="ts">
  import TeamMembers from '$components/team/TeamMembers.svelte';
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
<div class="column pad gaps-y">
  <TeamMembers />
</div>

<div class="pb-4 dark:text-white">
  <h1 class="p-4 text-center">
    <span
      class="
        border-b-8 border-yellow-300
        font-serif text-64
        text-shadow
      "
    >
      Under construction.
    </span>
  </h1>
</div>
