<script>
  import Paragraph from '../Paragraph.svelte';
</script>

<!--
  @component
  Short mission statement and about us.
-->
<div class="headings">
  <h1 class="text-shadow-lg">Planting the seed of hope...</h1>
  <h2>Sharing gifts of recovery.</h2>
</div>
<div>
  <Paragraph justify>
    <b>Whakaoranga Whanau Recovery Hub</b> is a kaupapa Māori AOD community support
    service in Kaikohe. We're a team of passionate individuals who have lived experience.
  </Paragraph>
  <Paragraph justify>
    We work together and collaborate with other health providers to strengthen,
    educate and empower individuals to reach their full potential.
  </Paragraph>
  <Paragraph justify>
    You can find us at <b>135 Broadway, Kaikohe</b>, Monday to Friday, 10am
    until 3pm.
  </Paragraph>
</div>

<style lang="postcss">
  div.headings > h1 {
    padding-bottom: 1rem; /* 16px */

    text-align: left;
    font-weight: 500;
    letter-spacing: -0.05em;
    font-size: 1.75rem; /* 28px */
    line-height: 2rem; /* 32px */
  }

  div.headings > h2 {
    text-align: center;
    font-weight: 500;
    letter-spacing: -0.025em;
    font-size: 3rem; /* 48px */
    line-height: 1;
    font-family: 'Permanent Marker';
  }

  @screen sm {
    div.headings > h2 {
      font-size: 4rem; /* 64px */
      line-height: 1;
    }
  }

  @screen md {
    div.headings > h1 {
      font-weight: 300;
      font-size: 2.625rem; /* 42px */
      line-height: 2.5rem; /* 40px */
    }

    div.headings > h2 {
      font-size: 4.5rem; /* 72px */
      line-height: 1;
    }
  }

  @screen lg {
    div.headings > h1 {
      font-size: 4rem; /* 64px */
      line-height: 1;
    }

    div.headings > h2 {
      font-size: 6rem; /* 96px */
      line-height: 1;
    }
  }

  @screen xl {
    div.headings > h2 {
      font-size: 8rem; /* 128px */
      line-height: 1;
    }
  }
</style>
