<script lang="ts">
  import UnderConstruction from '$lib/components/UnderConstruction.svelte';

  import { seo } from '$lib/store/seo';

  $seo = {
    title: 'Tātou Hoa',
    description:
      'We only make up a fraction of the tangata who are here to help. Meet tātou hoa (our friends)!',
    robots: 'none',
  };
</script>

<!--
  @component
  Friends and affiliates.
-->
<section class="under-construction pad-y pad-x">
  <UnderConstruction />
</section>

<div class="root column pad-y gaps-y" />
