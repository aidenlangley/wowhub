<script lang="ts">
  import InputText from '$comp/forms/InputText.svelte';
  import Heading from '$comp/heading/Heading.svelte';
  import Heading3 from '$comp/heading/Heading3.svelte';
  import SvelteSeo from 'svelte-seo';

  let forename: string;
  let surname: string;
</script>

<SvelteSeo
  title="Whakaoranga Whanau Registration"
  description={`Planting the seed of hope... Sharing gifts of recovery. Register
  with the Whakaoranga Whanau here.`}
/>

<form
  name="whanau"
  method="post"
  data-netlify="true"
  class="column pad-y gaps-y"
>
  <Heading>Whakaoranga Whanau Registration</Heading>
  <section id="personal-details">
    <Heading3>Personal Details</Heading3>
    <InputText label="Forename" text={forename} placeholder="First name..." />
    <InputText label="Surname" text={surname} placeholder="Last name..." />
  </section>
</form>
