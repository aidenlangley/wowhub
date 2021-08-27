<script lang="ts">
  import { info } from '$lib/store/info';
  import Icon, {
    ExternalLink,
    Mail,
    MailOpen,
    Phone,
    PhoneOutgoing,
  } from 'svelte-hero-icons';
  import AnimatedLink from '../AnimatedLink.svelte';
  import { ButtonColour } from '../Button.d';
  import HeadingSmall from '../heading/HeadingSmall.svelte';
  import Link from '../Link.svelte';

  const size = '22';
</script>

<!--
  @component
  Links, styled as buttons, for emailing & making phone calls (targeted at
  mobile devices) and external links to our Facebook group & page on Google
  maps.
-->
<section id="quick-links" class="space-y-2 sm:space-y-4">
  <div class="hidden sm:block text-center">
    <HeadingSmall>Get in touch, or come and see us.</HeadingSmall>
  </div>
  <div class="flex space-x-2 sm:space-x-4 justify-center">
    <AnimatedLink
      href="mailto:{$info.email}"
      text={$info.email}
      label="email {$info.email}"
      button
    >
      <Icon src={Mail} {size} slot="original" />
      <Icon src={MailOpen} {size} slot="transition" />
    </AnimatedLink>
    <AnimatedLink
      href="tel:{$info.phone}"
      text={$info.phone.replace('+64', '0')}
      label="phone {$info.phone}"
      button
    >
      <Icon src={Phone} {size} slot="original" />
      <Icon src={PhoneOutgoing} {size} slot="transition" />
    </AnimatedLink>
  </div>
  <div class="flex space-x-2 sm:space-x-4 justify-center">
    <Link
      href={$info.facebookGroup}
      label="link to facebook"
      button
      colour={ButtonColour.Blue}
    >
      <div aria-hidden="true">
        <Icon src={ExternalLink} {size} aria-hidden="true" />
      </div>
      <span>Facebook</span>
    </Link>
    <Link href={$info.google} label="link to Google Maps" button>
      <div aria-hidden="true">
        <Icon src={ExternalLink} {size} />
      </div>
      <span>Google Maps</span>
    </Link>
  </div>
</section>
