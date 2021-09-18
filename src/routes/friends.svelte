<script lang="ts">
  import UnderConstruction from '$components/error/Error.svelte';
  import { seo } from '$store/seo';

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
<article class="pad-y">
  <UnderConstruction />
</article>
