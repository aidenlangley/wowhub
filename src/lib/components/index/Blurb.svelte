<script>
  import Paragraph from '$components/paragraph/Paragraph.svelte';
  import Skew from '$layout/skew/Skew.svelte';
  import { SkewDirection } from '$layout/skew/types.d';
  import { GradientColour } from '$layout/types.d';
  import MissionStatement from './mission-statement/MissionStatement.svelte';
</script>

<!--
  @component
  Short mission statement and about us.
-->
<Skew id="blurb" direction={SkewDirection.Left} colour={GradientColour.Green}>
  <MissionStatement />
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
</style>
