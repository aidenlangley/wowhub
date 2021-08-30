<script lang="ts">
  import Link from '../Link.svelte';
</script>

<!--
  @component
  Serenity prayer in multicolour.
-->

<div class="passage">
  <p>
    <span class="god">God,</span>
    grant me the
    <span class="serenity">serenity</span>
  </p>
  <p>
    To
    <span class="accept">accept</span>
    the things I
    <span class="cannot-change">cannot change</span>
  </p>
  <p>
    <span class="courage">Courage</span>
    to
    <span class="change">change</span>
    the things I can
  </p>
  <p>
    And the
    <span class="wisdom">wisdom</span>
    to know the
    <span class="difference">difference</span>
  </p>
</div>
<div class="source">
  <Link href="/docs/serenity-prayer" internal>- Serenity Prayer</Link>
</div>

<style lang="postcss">
  div.passage {
    text-align: center;
  }

  div.passage > p {
    font-weight: 300;
    letter-spacing: -0.05em;
    line-height: 1.25;
    font-size: 1.25rem; /* 20px */
    line-height: 1.75rem; /* 28px */
    font-family: 'Roboto Slab';
  }

  div.passage > p > span.god {
    font-weight: 500;
    font-size: 1.5rem; /* 24px */
    line-height: 1.75rem; /* 28px */
  }

  div.passage > p > span.serenity {
    font-weight: 700;
    font-size: 1.75rem; /* 28px */
    line-height: 2rem; /* 32px */
    @apply text-blue-500;
  }

  div.passage > p > span.accept {
    font-weight: 500;
    font-size: 1.625rem; /* 26px */
    line-height: 1.75rem; /* 28px */
    @apply text-green-500;
  }

  div.passage > p > span.cannot-change {
    font-weight: bold;
    font-size: 1.375rem; /* 22px */
    line-height: 1.75rem; /* 28px */
    @apply text-orange-500;
  }

  div.passage > p > span.courage {
    font-weight: bold;
    font-size: 1.75rem; /* 28px */
    line-height: 2rem; /* 32px */
    @apply text-red-500;
  }

  div.passage > p > span.change {
    font-weight: bold;
    font-size: 1.625rem; /* 26px */
    line-height: 1.75rem; /* 28px */
    @apply text-gray-600;
  }

  :global(.dark) div.passage > p > span.change {
    @apply text-gray-400;
  }

  div.passage > p > span.wisdom {
    font-weight: bold;
    font-size: 2rem; /* 32px */
    line-height: 2.25rem; /* 36px */
    @apply text-purple-500;
  }

  div.passage > p > span.difference {
    font-weight: 500;
    font-size: 1.75rem; /* 28px */
    line-height: 2rem; /* 32px */
    @apply text-yellow-500;
  }

  .source {
    padding: 0.25rem;
    text-align: right;
  }

  @screen sm {
    div.passage > p {
      font-size: 1.5rem; /* 24px */
      line-height: 1.75rem; /* 28px */
    }

    div.passage > p > span.god {
      font-size: 2rem; /* 32px */
      line-height: 2.25rem; /* 36px */
    }

    div.passage > p > span.serenity {
      font-size: 2.25rem; /* 36px */
      line-height: 2.5rem; /* 40px */
    }

    div.passage > p > span.accept {
      font-size: 2.125rem; /* 34px */
      line-height: 2.25rem; /* 36px */
    }

    div.passage > p > span.cannot-change {
      font-size: 1.875rem; /* 30px */
      line-height: 2rem; /* 32px */
    }

    div.passage > p > span.courage {
      font-size: 2.25rem; /* 36px */
      line-height: 2.5rem; /* 40px */
    }

    div.passage > p > span.change {
      font-size: 2.125rem; /* 34px */
      line-height: 2.25rem; /* 36px */
    }

    div.passage > p > span.wisdom {
      font-size: 2.5rem; /* 40px */
      line-height: 2.5rem; /* 40px */
    }

    div.passage > p > span.difference {
      font-size: 2.25rem; /* 36px */
      line-height: 2.5rem; /* 40px */
    }
  }

  @screen md {
    div.passage > p {
      font-size: 2rem; /* 32px */
      line-height: 2.25rem; /* 36px */
    }

    div.passage > p > span.god {
      font-size: 2.5rem; /* 40px */
      line-height: 2.5rem; /* 40px */
    }

    div.passage > p > span.serenity {
      font-size: 2.75rem; /* 44px */
      line-height: 2.5rem; /* 40px */
    }

    div.passage > p > span.accept {
      font-size: 2.625rem; /* 42px */
      line-height: 2.5rem; /* 40px */
    }

    div.passage > p > span.cannot-change {
      font-size: 2.375rem; /* 38px */
      line-height: 2.5rem; /* 40px */
    }

    div.passage > p > span.courage {
      font-size: 2.75rem; /* 44px */
      line-height: 2.5rem; /* 40px */
    }

    div.passage > p > span.change {
      font-size: 2.625rem; /* 42px */
      line-height: 2.5rem; /* 40px */
    }

    div.passage > p > span.wisdom {
      font-size: 3rem; /* 48px */
      line-height: 1;
    }

    div.passage > p > span.difference {
      font-size: 2.75rem; /* 44px */
      line-height: 2.5rem; /* 40px */
    }
  }

  @screen lg {
    div.passage > p {
      font-size: 2.25rem; /* 36px */
      line-height: 2.5rem; /* 40px */
    }

    div.passage > p > span.god {
      font-size: 3rem; /* 48px */
      line-height: 1;
    }

    div.passage > p > span.serenity {
      font-size: 4rem; /* 64px */
      line-height: 1;
    }

    div.passage > p > span.accept {
      font-size: 3rem; /* 48px */
      line-height: 1;
    }

    div.passage > p > span.cannot-change {
      font-size: 3.5rem; /* 56px */
      line-height: 1;
    }

    div.passage > p > span.courage {
      font-size: 3.5rem; /* 56px */
      line-height: 1;
    }

    div.passage > p > span.change {
      font-size: 3.5rem; /* 56px */
      line-height: 1;
    }

    div.passage > p > span.wisdom {
      font-size: 4rem; /* 64px */
      line-height: 1;
    }

    div.passage > p > span.difference {
      font-size: 3.5rem; /* 56px */
      line-height: 1;
    }
  }
</style>
