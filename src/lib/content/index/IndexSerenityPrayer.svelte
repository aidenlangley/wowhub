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

    @apply font-serif text-20;
  }

  div.passage > p > span.god {
    font-weight: 500;
    @apply text-24;
  }

  div.passage > p > span.serenity {
    font-weight: 700;
    @apply text-28 text-blue-500;
  }

  div.passage > p > span.accept {
    @apply font-medium text-26 text-green-500;
  }

  div.passage > p > span.cannot-change {
    @apply font-bold text-22 text-orange-500;
  }

  div.passage > p > span.courage {
    @apply font-bold text-28 text-red-500;
  }

  div.passage > p > span.change {
    @apply font-bold text-26 text-gray-600;
  }

  :global(.dark) div.passage > p > span.change {
    @apply text-gray-400;
  }

  div.passage > p > span.wisdom {
    @apply font-bold text-32 text-purple-500;
  }

  div.passage > p > span.difference {
    @apply font-medium text-28 text-yellow-500;
  }

  .source {
    padding: 0.25rem;
    text-align: right;
  }

  @screen sm {
    div.passage > p {
      @apply text-24;
    }

    div.passage > p > span.god {
      @apply text-32;
    }

    div.passage > p > span.serenity {
      @apply text-36;
    }

    div.passage > p > span.accept {
      @apply text-34;
    }

    div.passage > p > span.cannot-change {
      @apply text-30;
    }

    div.passage > p > span.courage {
      @apply text-36;
    }

    div.passage > p > span.change {
      @apply text-34;
    }

    div.passage > p > span.wisdom {
      @apply text-40;
    }

    div.passage > p > span.difference {
      @apply text-36;
    }
  }

  @screen md {
    div.passage > p {
      @apply text-32;
    }

    div.passage > p > span.god {
      @apply text-40;
    }

    div.passage > p > span.serenity {
      @apply text-44;
    }

    div.passage > p > span.accept {
      @apply text-42;
    }

    div.passage > p > span.cannot-change {
      @apply text-38;
    }

    div.passage > p > span.courage {
      @apply text-44;
    }

    div.passage > p > span.change {
      @apply text-42;
    }

    div.passage > p > span.wisdom {
      @apply text-48;
    }

    div.passage > p > span.difference {
      @apply text-44;
    }
  }

  @screen lg {
    div.passage > p {
      @apply text-36;
    }

    div.passage > p > span.god {
      @apply text-48;
    }

    div.passage > p > span.serenity {
      @apply text-64;
    }

    div.passage > p > span.accept {
      @apply text-48;
    }

    div.passage > p > span.cannot-change {
      @apply text-56;
    }

    div.passage > p > span.courage {
      @apply text-56;
    }

    div.passage > p > span.change {
      @apply text-56;
    }

    div.passage > p > span.wisdom {
      @apply text-64;
    }

    div.passage > p > span.difference {
      @apply text-56;
    }
  }
</style>
