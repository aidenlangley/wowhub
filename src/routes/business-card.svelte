<script lang="ts">
  import type { Employee } from '$lib/content/business-card';
  import BusinessCard from '$lib/content/BusinessCard.svelte';
  import Column from '$lib/layout/Column.svelte';
  import Page, { padding, spacing } from '$lib/layout/Page.svelte';
  import { seo } from '$lib/store/seo';

  $seo = {
    title: '',
    description: '',
    robots: '',
  };

  export let businessCard: Employee;
</script>

<Page>
  <Column>
    <div class="{padding} {spacing}">
      <div>
        <!-- <InputText id="name" label="Name" bind:value={name} />
        <InputText id="photo" label="Photo" bind:value={photoSrc} /> -->
      </div>
      <div>
        <BusinessCard {businessCard} />
      </div>
    </div>
  </Column>
</Page>
