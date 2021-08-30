<script lang="ts">
  import Icon from '$lib/media/Icon.svelte';
  import { info } from '$lib/store/info';
  import { ExternalLink, Mail, Phone } from 'svelte-hero-icons';
  import Heading3 from '../heading/Heading3.svelte';
  import Link from '../Link.svelte';
  import Span from '../Span.svelte';
</script>

<!--
  @component
  Links, styled as buttons, for emailing & making phone calls (targeted at
  mobile devices) and external links to our Facebook group & page on Google
  maps.
-->
<div
  class="pt-4 sm:border-t-8 border-dotted border-gray-200 dark:border-gray-800"
>
  <Heading3 center>
    <Span>Get in touch, or come and see us.</Span>
  </Heading3>
</div>

<div class="pt-2 grid gap-2 sm:grid-cols-2 sm:gap-4 lg:gap-6">
  <Link href="mailto:{$info.email}" label="email {$info.email}" button>
    <Icon src={Mail} />
    <span>{$info.email}</span>
  </Link>
  <Link href="tel:{$info.phone}" label="phone {$info.phone}" button>
    <Icon src={Phone} />
    <span>
      {$info.phone.replace('+64', '0')}
    </span>
  </Link>
  <Link
    href={$info.facebookGroup}
    label="link to facebook"
    button
    colour="blue"
  >
    <Icon src={ExternalLink} />
    <span>Facebook</span>
  </Link>
  <Link href={$info.google} label="link to Google Maps" button>
    <Icon src={ExternalLink} />
    <span>Google Maps</span>
  </Link>
</div>
