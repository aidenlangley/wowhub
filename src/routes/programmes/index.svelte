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
  <div class="fill">
    {#each $programmes as { title, description, imgUrl, infoUrl, regUrl }}
      <ProgCard {title} {description} {imgUrl} {infoUrl} {regUrl} />
    {/each}
  </div>
</article>

<style lang="postcss">
  .fill {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: theme('gap.4');
  }

  @media screen(ty) {
    .fill {
      grid-template-columns: repeat(auto-fill, minmax(22.5rem, 1fr));
    }
  }

  @media screen(md) {
    .fill {
      grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
      padding: theme('padding.8');
    }
  }
</style>
