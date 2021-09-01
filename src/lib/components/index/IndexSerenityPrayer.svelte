<script lang="ts">
  import Link from '../link/Link.svelte';
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
  div.source {
    padding: theme('padding.1');
    text-align: right;
  }

  div.passage {
    text-align: center;

    & > p {
      font-family: theme('fontFamily.serif');
      font-weight: theme('fontWeight.light');
      letter-spacing: theme('letterSpacing.tighter');

      @apply text-20;

      @screen sm {
        @apply text-24;
      }

      @screen md {
        @apply text-28;
      }

      @screen lg {
        @apply text-36;
      }

      & > span.god {
        font-weight: theme('fontWeight.medium');

        @apply text-24;

        @screen sm {
          @apply text-32;
        }

        @screen lg {
          @apply text-48;
        }
      }

      & > span.serenity {
        color: theme('colors.blue.500');
        font-weight: theme('fontWeight.bold');

        @apply text-28;

        @screen sm {
          @apply text-36;
        }

        @screen lg {
          @apply text-64;
        }
      }

      & > span.accept {
        color: theme('colors.green.500');
        font-weight: theme('fontWeight.bold');

        @apply text-26;

        @screen sm {
          @apply text-34;
        }

        @screen lg {
          @apply text-48;
        }
      }

      & > span.cannot-change {
        color: theme('colors.orange.500');
        font-weight: theme('fontWeight.medium');

        @apply text-22;

        @screen sm {
          @apply text-30;
        }

        @screen lg {
          @apply text-56;
        }
      }

      & > span.courage {
        color: theme('colors.red.500');
        font-weight: theme('fontWeight.black');

        @apply text-28;

        @screen sm {
          @apply text-36;
        }

        @screen lg {
          @apply text-56;
        }
      }

      & > span.change {
        color: theme('colors.gray.600');
        font-weight: theme('fontWeight.bold');

        @apply text-26;

        @screen sm {
          @apply text-34;
        }

        @screen lg {
          @apply text-56;
        }

        @nest :global(.dark) & {
          color: theme('colors.gray.400');
        }
      }

      & > span.wisdom {
        color: theme('colors.purple.500');
        font-weight: theme('fontWeight.black');

        @apply text-32;

        @screen sm {
          @apply text-40;
        }

        @screen lg {
          @apply text-64;
        }
      }

      & > span.difference {
        color: theme('colors.yellow.500');
        font-weight: theme('fontWeight.medium');

        @apply text-28;

        @screen sm {
          @apply text-36;
        }

        @screen lg {
          @apply text-56;
        }
      }
    }
  }
</style>
