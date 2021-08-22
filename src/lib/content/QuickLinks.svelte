<script>
  import AnimatedButton from './AnimatedButton.svelte';
  import Link from './Link.svelte';
  import Button, { ButtonColour } from './Button.svelte';

  import SvgMail from '$lib/media/svg/SvgMail.svelte';
  import SvgMailOpen from '$lib/media/svg/SvgMailOpen.svelte';
  import SvgPhone from '$lib/media/svg/SvgPhone.svelte';
  import SvgPhoneOut from '$lib/media/svg/SvgPhoneOut.svelte';
  import SvgExternalLink from '$lib/media/svg/SvgExternalLink.svelte';

  import { info } from '$lib/store/info';
</script>

<div class="space-y-2 sm:space-y-4">
  <div class="flex space-x-2 sm:space-x-4 justify-center">
    <AnimatedButton>
      <SvgMail slot="original" />
      <SvgMailOpen slot="transition" />
      <Link slot="text" to={`mailto:${$info.email}`}>
        {$info.email}
      </Link>
    </AnimatedButton>
    <AnimatedButton>
      <SvgPhone slot="original" />
      <SvgPhoneOut slot="transition" />
      <Link slot="text" to={`tel:${$info.phone}`}>
        {$info.phone.replace('+64', '0')}
      </Link>
    </AnimatedButton>
  </div>
  <div class="flex space-x-2 sm:space-x-4 justify-center">
    <Button colour={ButtonColour.Blue}>
      <SvgExternalLink />
      <Link to={$info.facebookGroup}>Facebook</Link>
    </Button>
    <Button colour={ButtonColour.Default}>
      <SvgExternalLink />
      <Link to={$info.google}>Google Maps</Link>
    </Button>
  </div>
</div>
