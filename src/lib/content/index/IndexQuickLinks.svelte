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
<div class="headings">
  <Heading3 center>
    <Span>Get in touch, or come and see us.</Span>
  </Heading3>
</div>

<div class="links">
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

<style lang="postcss">
  div.headings {
    padding-top: 1rem; /* 16px */
  }

  div.links {
    padding-top: 0.5rem; /* 8px */

    display: grid;
    gap: 0.5rem; /* 8px */
  }

  div.links :global(.button):hover {
    @apply scale-105;
  }

  @screen sm {
    div.headings {
      border-top-width: 8px;
      border-style: dotted;
      @apply border-gray-200;
    }

    :global(.dark) div.headings {
      @apply border-gray-800;
    }

    div.links {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem; /* 16px */
    }
  }

  @screen lg {
    div.links {
      gap: 1.5rem; /* 24px */
    }
  }
</style>
