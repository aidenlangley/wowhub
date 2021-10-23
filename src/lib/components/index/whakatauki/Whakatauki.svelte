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
        strong individual empowers us all.
      </Paragraph>
      <Paragraph justify>
        We take a holistic approach when it comes to treatment. Behind the
        individual there's roopu, whanau, there's hinengaro, tinana and wairua.
        Addiction only accounts for a fraction of the recovery process.
      </Paragraph>
      <Paragraph justify>
        When Taumarere is in need, Hokianga will answer the call, and vice
        versa.
      </Paragraph>
    </section>
  </article>
</Skew>

<style>
  @import './whakatauki.css';
</style>
