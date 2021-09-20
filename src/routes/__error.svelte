<script lang="ts" context="module">
  /**
   * @type {import('@sveltejs/kit').Load}
   */
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
  import Heading from '$comp/heading/Heading.svelte';
  import { BackgroundColour } from '$comp/translate/types';
  import { GradientColour } from '$comp/types';

  export let status: string;
  export let error: string;
</script>

<div class="column">
  <Heading bg={BackgroundColour.Red} fg={GradientColour.Red}>
    {status}: {error}
  </Heading>
</div>
