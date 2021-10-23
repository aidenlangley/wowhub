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
  import { GradientColour } from '$models/Gradient';
  import { BackgroundColour } from '$models/Translate';

  export let status: string;
  export let error: string;
</script>

<div class="column">
  <Heading bg={BackgroundColour.Red} fg={GradientColour.Red}>
    {status}: {error}
  </Heading>
</div>
