<script lang="ts">
  import { GradientColour } from '$models/Gradient';
  import { SkewDirection } from '$models/Skew';
  import Paragraph from '../../paragraph/Paragraph.svelte';
  import Skew from '../../skew/Skew.svelte';
</script>

<!--
  @component
  One of our favourite whakatauki (proverb.)
-->
<Skew
  id="whakatauki"
  direction={SkewDirection.Right}
  colour={GradientColour.Green}
>
  <article class="whakatauki gaps-y">
    <header>
      <h1>
        <span>E hara taku toa i te toa takitahi,</span>
        <span>engari he toa takitini</span>
      </h1>
      <h2>"My strength is not that of a single warrior, but that of many"</h2>
    </header>
    <section>
      <Paragraph justify>
        A favourite whakatauki of ours that embodies our ideals perfectly. A
        strong individual empowers us all. Working with te tangata (individual)
        to empower them in their recovery.
      </Paragraph>
      <Paragraph justify>
        Within each individual there's a whanau, a hapū, and an iwi. We take a
        holistic approach to treatment, focusing on Māori models of care like Te
        Whare Tapa Whā which encompasses taking care of the hinengaroa (mind),
        wairua (spirit), tinana (body) and whānau (family.)
      </Paragraph>
      <Paragraph justify />
      <Paragraph justify>
        He aha te mea nui o te ao, he tangata, he tangata, he tangata.
      </Paragraph>
    </section>
  </article>
</Skew>

<style>
  @import './whakatauki.css';
</style>
