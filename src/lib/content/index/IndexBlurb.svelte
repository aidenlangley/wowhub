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
    @apply text-28;
  }

  div.headings > h2 {
    text-align: center;
    font-weight: 500;
    letter-spacing: -0.025em;
    @apply text-48 font-display;
  }

  @screen sm {
    div.headings > h2 {
      @apply text-64;
    }
  }

  @screen md {
    div.headings > h1 {
      font-weight: 300;
      @apply text-42;
    }

    div.headings > h2 {
      @apply text-72;
    }
  }

  @screen lg {
    div.headings > h1 {
      @apply text-64;
    }

    div.headings > h2 {
      @apply text-96;
    }
  }

  @screen xl {
    div.headings > h2 {
      @apply text-128;
    }
  }
</style>
