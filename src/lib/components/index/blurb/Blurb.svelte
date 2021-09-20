<script>
  import Paragraph from '../../paragraph/Paragraph.svelte';
  import Skew from '../../skew/Skew.svelte';
  import { SkewDirection } from '../../skew/types';
  import { GradientColour } from '../../types';
</script>

<!--
  @component
  Short mission statement and about us.
-->
<Skew id="blurb" direction={SkewDirection.Left} colour={GradientColour.Green}>
  <article class="blurb">
    <Paragraph>
      <b>Whakaoranga Whanau Recovery Hub</b> &
      <b>He Waka Eke Noa te Tai Tokerau</b> is a kaupapa Māori AOD community support
      service in Kaikohe. We're a team of passionate individuals who have lived experience.
    </Paragraph>
    <Paragraph>
      We work together and collaborate with other health providers to
      strengthen, educate and empower individuals to reach their full potential.
    </Paragraph>
    <Paragraph>
      You can find us at <b>135 Broadway, Kaikohe</b>, Monday to Friday, 10am
      until 3pm.
    </Paragraph>
    <Paragraph>
      You can contact peer support, tātou kaimanāki, at <b
        >support@wowhub.co.nz</b
      >, and for Freedom Whare related queries, you can email
      <b>info@freedomwhare.co.nz</b>.
    </Paragraph>
  </article>
</Skew>

<style>
  @import './blurb.css';
</style>
