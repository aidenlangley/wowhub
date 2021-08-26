<script lang="ts">
  import GitHub from './GitHub.svelte';
</script>

<!--
  @component
  `Footer` contains information regarding the other businesses associated with
  wowhub (loosely.)
-->
<footer
  class="
    bg-gray-800 text-white
    border-t border-gray-300 dark:border-gray-700
  "
>
  <div class="p-2 flex">
    <div class="flex-grow" />
    <GitHub />
  </div>
</footer>
