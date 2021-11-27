<script lang="ts">
  import InputText from '$comp/forms/InputText.svelte';

  let forename: string;
  let surname: string;
</script>

<form name="whanau" method="post" data-netlify="true" class="column pad-y">
  <section id="personal-details">
    <InputText label="First Name" text={forename} placeholder="First name..." />
    <InputText label="Last Name" text={surname} placeholder="Last name..." />
  </section>
</form>
