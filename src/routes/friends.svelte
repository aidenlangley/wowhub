<script lang="ts">
  import UnderConstruction from '$components/error/Error.svelte';
  import { seo } from '$store/seo';

  $seo = {
    title: 'Our friends',
    description: `Tātou hoa. We only make up a fraction of the tangata who are
    here to help. Meet our friends!`,
  };
</script>

<!--
  @component
  Friends and affiliates.
-->
<article class="pad-y">
  <UnderConstruction />
</article>
