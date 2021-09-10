<script lang="ts" context="module">
  /* eslint-disable */
  export function load({
    status,
    error,
  }): { props: { error: any; status: any } } {
    return {
      props: {
        error: error.message,
        status,
      },
    };
  }
</script>

<script lang="ts">
  import Heading from '$lib/components/heading/Heading.svelte';
  import { BackgroundColour } from '$lib/layout/translate/types.d';
  import { GradientColour } from '$lib/layout/types.d';

  export let status: string;
  export let error: string;
</script>

<div class="column">
  <Heading bg={BackgroundColour.Red} fg={GradientColour.Red}>
    {status}: {error}
  </Heading>
</div>
