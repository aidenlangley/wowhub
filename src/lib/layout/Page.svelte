<script lang="ts" context="module">
  import { assets } from '$app/paths';

  export const padding =
    'pt-4 sm:pt-8 md:pt-16 lg:pt-32 ' +
    'pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24';
  export const spacing = 'space-y-4 sm:space-y-8 md:space-y-16 lg:space-y-32';
</script>

<!--
  @component
  Defines main to enforce consistency, grabs background image from assets, and
  puts it all together to apply transparency to the background so it is dim and
  won't take away from the viewing experience.
-->
<main
  style="background-image: url({assets}/images/drawing.png)"
  class="
    bg-top bg-blend-difference bg-white
    dark:bg-gray-900 dark:bg-blend-hard-light
    dark:text-white
    transition duration-500
  "
>
  <div class="bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-70">
    <slot />
  </div>
</main>
