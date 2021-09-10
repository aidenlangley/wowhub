<script lang="ts">
  import Skew from '$layout/skew/Skew.svelte';
  import { SkewDirection } from '$layout/skew/types.d';
  import { GradientColour } from '$layout/types.d';
  import Paragraph from '../Paragraph.svelte';
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
  <div class="headings">
    <h1>
      <span>E hara taku toa i te toa takitahi,</span>
      <span>engari he toa takitini</span>
    </h1>
    <h2>"My strength is not that of a single warrior, but that of many"</h2>
  </div>
  <div>
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
      When Taumarere is in need, Hokianga will answer the call, and vice versa.
    </Paragraph>
  </div>
</Skew>

<style lang="postcss">
  * {
    color: theme('colors.white');
  }

  div.headings {
    font-family: theme('fontFamily.serif');

    & > h1 {
      font-style: italic;
      font-weight: theme('fontWeight.medium');
      letter-spacing: theme('letterSpacing.tight');
      padding-bottom: theme('padding.4');

      @apply text-34;

      @media screen(sm) {
        display: grid;
        grid-auto-flow: row;
        row-gap: theme('gap.2');
        text-align: center;

        @apply text-42;
      }

      @media screen(md) {
        @apply text-44;
      }

      @media screen(lg) {
        @apply text-56;
      }

      @media screen(xl) {
        @apply text-72;
      }
    }

    & > h2 {
      color: theme('colors.gray.200');
      text-align: right;

      @apply text-22;

      @media screen(sm) {
        text-align: center;
      }

      @media screen(lg) {
        font-weight: theme('fontWeight.light');

        @apply text-32;
      }
    }
  }
</style>
