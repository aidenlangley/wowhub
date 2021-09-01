<script lang="ts">
  import Heading3 from '$components/heading/Heading3.svelte';
  import Link from '$lib/components/link/Link.svelte';
  import Span from '$components/Span.svelte';
  import Icon from '$media/Icon.svelte';
  import { info } from '$store/info';
  import { ExternalLink, Mail, Phone } from 'svelte-hero-icons';
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
    padding-top: theme('padding.4');

    @screen sm {
      border-color: theme('colors.gray.200');
      border-style: dotted;
      border-top-width: theme('borderWidth.8');

      @nest :global(.dark) & {
        border-color: theme('colors.gray.800');
      }
    }
  }

  div.links {
    display: grid;
    gap: theme('gap.2');
    padding-top: theme('padding.2');

    @screen sm {
      gap: theme('gap.4');
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @screen lg {
      gap: theme('gap.6');
    }
  }
</style>
