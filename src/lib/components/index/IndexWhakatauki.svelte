<script>
  import Paragraph from '../Paragraph.svelte';
</script>

<!--
  @component
  One of our favourite whakatauki (proverb.)
-->
<div class="headings text-shadow-lg">
  <h1>
    <span>E hara taku toa i te toa takitahi,</span>
    <span>engari he toa takitini</span>
  </h1>
  <h2>"My strength is not that of a single warrior, but that of many"</h2>
</div>
<div>
  <Paragraph justify>
    A favourite whakatauki of ours that embodies our ideals perfectly. A strong
    individual empowers us all.
  </Paragraph>
  <Paragraph justify>
    We take a holistic approach when it comes to treatment. Behind the
    individual there's roopu, whanau, there's hinganaro, tinana and wairua.
    Addiction only accounts for a fraction of the recovery process.
  </Paragraph>
  <Paragraph justify>
    When Taumarere is in need, Hokianga will answer the call, and vice versa.
  </Paragraph>
</div>

<style lang="postcss">
  div.headings > h1 {
    font-style: italic;
    font-weight: 500;
    letter-spacing: -0.025em;
    padding-bottom: 1rem; /* 16px */

    @apply font-serif text-34;
  }

  div.headings > h2 {
    text-align: right;

    @apply font-serif text-22 text-gray-100;
  }

  @screen sm {
    div.headings > h1 {
      display: grid;
      grid-auto-flow: row;
      row-gap: 0.5rem;
      text-align: center;

      @apply text-42;
    }

    div.headings > h2 {
      text-align: center;
    }
  }

  @screen md {
    div.headings > h1 {
      @apply text-44;
    }
  }

  @screen lg {
    div.headings > h1 {
      @apply text-56;
    }

    div.headings > h2 {
      @apply text-32;
    }
  }

  @screen xl {
    div.headings > h1 {
      @apply text-72;
    }
  }
</style>
