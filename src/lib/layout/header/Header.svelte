<script>
  import DarkToggle from '$lib/DarkToggle.svelte';
  import LogoWhiteIcon from '$lib/media/logo/LogoWhiteIcon.svelte';
  import RoutesX from './RoutesX.svelte';
</script>

<!--
  @component
  Header consists of our logo, inlined navigation links and a toggle for dark
  mode.
-->
<header
  class="
    bg-gray-900 dark:bg-black
    text-white
    flex items-center align-middle
    p-2 sm:p-3 md:p-4 lg:p-6
    border-b border-gray-300 dark:border-gray-800
    transition duration-500 shadow-lg
  "
>
  <div class="smd:hidden">
    <LogoWhiteIcon />
  </div>
  <div class="flex-grow">
    <RoutesX />
  </div>
  <div class="smd:hidden">
    <DarkToggle />
  </div>
</header>
