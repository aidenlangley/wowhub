<script lang="ts">
  import { info } from '$lib/store/info';
  import Icon, {
    ExternalLink,
    Mail,
    MailOpen,
    Phone,
    PhoneOutgoing,
  } from 'svelte-hero-icons';
  import { ButtonColour } from '../button/Button.d';
  import AnimatedLink from '../link/AnimatedLink.svelte';
  import IconLink from '../link/IconLink.svelte';

  const size = '22';
</script>

<!--
  @component
  Links, styled as buttons, for emailing & making phone calls (targeted at
  mobile devices) and external links to our Facebook group & page on Google
  maps.
-->
<h2 class="sm:text-center">Get in touch, or come and see us.</h2>
<div class="grid gap-2 pt-4 ty:grid-cols-2">
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
  <IconLink
    href={$info.facebookGroup}
    label="link to facebook"
    button
    colour={ButtonColour.Blue}
  >
    <Icon src={ExternalLink} {size} slot="icon" />
    Facebook
  </IconLink>
  <IconLink
    href={$info.google}
    label="link to Google Maps"
    button
    colour={ButtonColour.Default}
  >
    <Icon src={ExternalLink} {size} />
    Google Maps
  </IconLink>
</div>
