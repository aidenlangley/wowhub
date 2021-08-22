<script lang="ts">
  import { info } from '$lib/store/info';
  import FooterCard from './FooterCard.svelte';
  import type { Business } from './FooterCard.svelte';
  import GitHub from './GitHub.svelte';

  const businesses: Business[] = [
    {
      name: 'Whakaoranga Whanau Recovery Hub',
      address: {
        addressLine1: '135 Broadway',
        city: 'Kaikohe',
        postCode: '0405',
      },
      phone: $info.phone,
      email: $info.email,
    },
    {
      name: 'Freedom Whare Ltd',
      phone: $info.phone,
      email: $info.email,
    },
    {
      name: 'Whakamanamai Whanau Trust',
      phone: $info.phone,
      email: $info.email,
    },
  ];
</script>

<!--
  @component
  `Footer` contains information regarding the other businesses associated with
  wowhub (loosely.)
-->
<footer
  class="
    bg-gray-800 text-white
    align-middle p-2
    border-t border-gray-300 dark:border-gray-800
    space-y-2 sm:grid grid-cols-3 sm:space-y-0
  "
>
  <div class="border-l-4 border-green-300">
    <FooterCard business={businesses[0]}>
      <span slot="phone" class="text-green-300 hover:text-green-400">
        {businesses[0].phone}
      </span>
      <span slot="email" class="text-green-500 hover:text-green-600">
        {businesses[0].email}
      </span>
    </FooterCard>
  </div>
  <div class="border-l-4 border-blue-300">
    <FooterCard business={businesses[1]}>
      <span slot="phone" class="text-blue-200 hover:text-blue-300">
        {businesses[1].phone}
      </span>
      <span slot="email" class="text-blue-400 hover:text-blue-500">
        {businesses[1].email}
      </span>
    </FooterCard>
  </div>
  <div class="border-l-4 border-indigo-300">
    <FooterCard business={businesses[2]}>
      <span slot="phone" class="text-indigo-300 hover:text-indigo-400">
        {businesses[2].phone}
      </span>
      <span slot="email" class="text-purple-500 hover:text-purple-600">
        {businesses[2].email}
      </span>
    </FooterCard>
  </div>
  <div class="pt-2 col-span-3 place-self-end">
    <GitHub />
  </div>
</footer>
