<script lang="ts">
  import InputText from '$comp/forms/InputText.svelte';

  let forename: string;
  let surname: string;
</script>

<form name="whanau" method="post" data-netlify="true">
  <section id="personal-details">
    <InputText label="First Name" text={forename} />
    <InputText label="Last Name" text={surname} />
  </section>
</form>
