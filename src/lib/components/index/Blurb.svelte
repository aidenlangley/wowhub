<script>
  import Paragraph from '$components/paragraph/Paragraph.svelte';
  import Skew from '$layout/skew/Skew.svelte';
  import { SkewDirection } from '$layout/skew/types.d';
  import { GradientColour } from '$layout/types.d';
</script>

<!--
  @component
  Short mission statement and about us.
-->
<Skew id="blurb" direction={SkewDirection.Left} colour={GradientColour.Green}>
  <div class="headings">
    <h1>Planting the seed of hope...</h1>
    <h2>Sharing gifts of recovery.</h2>
  </div>
  <div class="blurb">
    <Paragraph justify>
      <b>Whakaoranga Whanau Recovery Hub</b> &
      <b>He Waka Eke Noa te Tai Tokerau</b> is a kaupapa Māori AOD community support
      service in Kaikohe. We're a team of passionate individuals who have lived experience.
    </Paragraph>
    <Paragraph justify>
      We work together and collaborate with other health providers to
      strengthen, educate and empower individuals to reach their full potential.
    </Paragraph>
    <Paragraph justify>
      You can find us at <b>135 Broadway, Kaikohe</b>, Monday to Friday, 10am
      until 3pm.
    </Paragraph>
  </div>
</Skew>

<style>
  .blurb > :global(p) {
    color: theme('colors.white');
  }

  .headings {
    color: theme('colors.white');
    font-weight: theme('fontWeight.medium');
  }

  .headings > h1 {
    padding-bottom: theme('padding.4');
    text-align: left;

    @apply text-28;
  }

  .headings > h2 {
    font-family: theme('fontFamily.display');
    letter-spacing: theme('letterSpacing.tight');
    text-align: center;

    @apply text-48;
  }

  @media screen(sm) {
    .headings > h1 {
      font-weight: theme('fontWeight.light');
    }

    .headings > h2 {
      @apply text-64;
    }
  }

  @media screen(md) {
    .headings > h1 {
      letter-spacing: theme('letterSpacing.tighter');

      @apply text-42;
    }

    .headings > h2 {
      @apply text-72;
    }
  }

  @media screen(lg) {
    .headings > h1 {
      @apply text-64;
    }
  }

  @media screen(xl) {
    .headings > h2 {
      @apply text-128;
    }
  }
</style>
