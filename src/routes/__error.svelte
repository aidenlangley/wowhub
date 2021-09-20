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
  import Heading from '$components/heading/Heading.svelte';
  import { BackgroundColour } from '$components/translate/types';
  import { GradientColour } from '$components/types';

  export let status: string;
  export let error: string;
</script>

<div class="column">
  <Heading bg={BackgroundColour.Red} fg={GradientColour.Red}>
    {status}: {error}
  </Heading>
</div>
