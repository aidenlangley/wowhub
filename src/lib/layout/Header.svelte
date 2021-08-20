<script>
  import DarkToggle from '$lib/DarkToggle.svelte';
  import LogoWhiteIcon from '$lib/media/logo/LogoWhiteIcon.svelte';
  import RoutesSpan from '$lib/nav/RoutesSpan.svelte';
</script>

<header
  class="
    bg-black text-white
    flex items-center align-middle sm:text-center
    p-2 sm:p-4
    border-b border-gray-300 dark:border-gray-800
    shadow
    
  "
>
  <div class="smd:hidden">
    <LogoWhiteIcon />
  </div>
  <div class="flex-grow">
    <RoutesSpan />
  </div>
  <DarkToggle />
</header>
