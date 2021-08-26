<script lang="ts">
  import SvgExternalLink from '$lib/media/svg/SvgExternalLink.svelte';
  import SvgMail from '$lib/media/svg/SvgMail.svelte';
  import SvgMailOpen from '$lib/media/svg/SvgMailOpen.svelte';
  import SvgPhone from '$lib/media/svg/SvgPhone.svelte';
  import SvgPhoneOut from '$lib/media/svg/SvgPhoneOut.svelte';
  import { info } from '$lib/store/info';
  import AnimatedLink from '../AnimatedLink.svelte';
  import { ButtonColour } from '../Button.d';
  import Link from '../Link.svelte';
</script>

<!--
  @component
  Links, styled as buttons, for emailing & making phone calls (targeted at
  mobile devices) and external links to our Facebook group & page on Google
  maps.
-->
<div class="space-y-2 sm:space-y-4 transition duration-1000">
  <span
    class="
      hidden sm:block
      tracking-tight font-light font-mono
      text-center text-20
      bg-white bg-opacity-50
      dark:bg-black dark:bg-opacity-50
      dark:text-white
    "
  >
    Get in touch, or come and see us.
  </span>
  <div class="flex space-x-2 sm:space-x-4 justify-center">
    <AnimatedLink href={`mailto:${$info.email}`} text={$info.email} button>
      <SvgMail slot="original" />
      <SvgMailOpen slot="transition" />
    </AnimatedLink>
    <AnimatedLink
      href={`tel:${$info.phone}`}
      text={$info.phone.replace('+64', '0')}
      button
    >
      <SvgPhone slot="original" />
      <SvgPhoneOut slot="transition" />
    </AnimatedLink>
  </div>
  <div class="flex space-x-2 sm:space-x-4 justify-center">
    <Link href={$info.facebookGroup} button colour={ButtonColour.Blue}>
      <SvgExternalLink />
      <span>Facebook</span>
    </Link>
    <Link href={$info.google} button>
      <SvgExternalLink />
      <span>Google Maps</span>
    </Link>
  </div>
</div>
