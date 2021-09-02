<script>
  import Paragraph from '$components/Paragraph.svelte'
  import Skew from '$layout/skew/Skew.svelte'
  import { SkewDirection } from '$layout/skew/types.d'
  import { GradientColour } from '$layout/types.d'
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
  <div>
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

<style lang="postcss">
  * {
    color: theme('colors.white');
  }

  div.headings {
    font-weight: theme('fontWeight.medium');

    & > h1 {
      padding-bottom: theme('padding.4');
      text-align: left;

      @apply text-28;

      @screen sm {
        font-weight: theme('fontWeight.light');
      }

      @screen md {
        letter-spacing: theme('letterSpacing.tighter');

        @apply text-42;
      }

      @screen lg {
        @apply text-64;
      }
    }

    & > h2 {
      font-family: theme('fontFamily.display');
      letter-spacing: theme('letterSpacing.tight');
      text-align: center;

      @apply text-48;

      @screen sm {
        @apply text-64;
      }

      @screen md {
        @apply text-72;
      }

      @screen xl {
        @apply text-128;
      }
    }
  }
</style>
