<script lang="ts">
  import { assets } from '$app/paths';
</script>

<!--
  @component
  Very simple component, just defines `main` to enforce consistency.
-->
<main
  style={`background-image: url(${assets}/images/drawing.png)`}
  class="
    bg-top bg-blend-difference bg-white
    dark:bg-gray-900 dark:bg-blend-hard-light
    transition duration-500 
  "
>
  <div class="bg-white bg-opacity-50 dark:bg-black dark:bg-opacity-50">
    <slot />
  </div>
</main>
