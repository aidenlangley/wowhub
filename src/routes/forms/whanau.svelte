<script lang="ts">
  import InputText from '$comp/forms/InputText.svelte';

  let forename: string;
  $: forename;
  console.log(forename);
</script>

<form name="whanau" method="post" data-netlify="true">
  <InputText label="First Name" text={forename} />
</form>
