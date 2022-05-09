<script lang="ts">
  import ProgCard from '$lib/components/prog_card/ProgCard.svelte';
  import { programmes } from '$stores/programmes';
  import SvelteSeo from 'svelte-seo';
</script>

<SvelteSeo
  title="Programmes"
  description={`Tātou hōtaka. These are the programmes we run and/or host -
    register here!`}
/>

<!--
  @component
  Our programmes.
-->
<article class="pad-y column">
  {#each $programmes as { title, description, imgUrl, url }}
    <ProgCard {title} {description} {imgUrl} {url} />
  {/each}
</article>
