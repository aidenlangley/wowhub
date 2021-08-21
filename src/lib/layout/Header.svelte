<script>
  import DarkToggle from '$lib/DarkToggle.svelte';
  import LogoWhiteIcon from '$lib/media/logo/LogoWhiteIcon.svelte';
  import RoutesX from '$lib/nav/RoutesX.svelte';
</script>

<!--
  @component
  Header consists of our logo, inlined navigation links and a toggle for dark
  mode.
-->
<header
  class="
    bg-gray-900 text-white
    flex items-center align-middle
    p-2 sm:p-3 md:p-4 lg:p-8 space-x-2
    border-b border-gray-300 dark:border-gray-800
    shadow
  "
>
  <div class="smd:hidden">
    <LogoWhiteIcon />
  </div>
  <div class="flex-grow sm:text-center">
    <RoutesX />
  </div>
  <div class="smd:hidden">
    <DarkToggle />
  </div>
</header>
