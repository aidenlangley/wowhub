<script lang="ts">
  import InputCheckbox from '$comp/forms/InputCheckbox.svelte';
  import InputDate from '$comp/forms/InputDate.svelte';
  import InputEmail from '$comp/forms/InputEmail.svelte';
  import InputPhone from '$comp/forms/InputPhone.svelte';
  import InputSelect from '$comp/forms/InputSelect.svelte';
  import InputText from '$comp/forms/InputText.svelte';
  import Heading from '$comp/heading/Heading.svelte';
  import Heading3 from '$comp/heading/Heading3.svelte';
  import Heading4 from '$comp/heading/Heading4.svelte';
  import SvelteSeo from 'svelte-seo';

  let title: string;
  let forename: string;
  let surname: string;
  let dob: string;
  let address = {
    line1: '',
    line2: '',
    city: '',
    postcode: ''
  };
  let phoneNumber: string;
  let emailAddress: string;
  let fbMsgName: string;

  const referrals = [
    'Self',
    'Police',
    'Corrections / Probation',
    'Family Court',
    'Rehab / DHB'
  ];
  let referredBy: string[];

  const services = [
    'AOD Counselling & Education',
    'AOD Transitional Housing',
    'Social Services Support',
    'Advocacy',
    'Anger Management',
    'Te reo Māori',
    'Kapahaka & waiata'
  ];
  let selectedServices: string[];
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
  <section id="personal-details" class="gaps-y">
    <Heading3>Personal Details</Heading3>
    <section id="name" class="name">
      <InputSelect
        label="Title"
        options={['Mr', 'Miss', 'Mrs', 'Ms']}
        selected={title}
      />
      <InputText label="Forename" text={forename} placeholder="First name" />
      <InputText label="Surname" text={surname} placeholder="Last name" />
    </section>
    <InputDate label="Date of birth" date={dob} />

    <Heading3>Address</Heading3>
    <section id="address">
      <InputText
        label="Line 1"
        text={address.line1}
        placeholder="123 Street Name"
        hideLabel
      />
      <InputText
        label="Line 2"
        text={address.line2}
        placeholder="Line 2"
        hideLabel
      />
      <section id="city-postcode" class="city-postcode">
        <InputText label="City" text={address.city} placeholder="City" />
        <InputText
          label="Postcode"
          text={address.postcode}
          placeholder="1234"
        />
      </section>
    </section>

    <Heading3>Contact Details</Heading3>
    <section id="contact-details">
      <InputPhone label="Phone" number={phoneNumber} placeholder="012345679" />
      <InputEmail
        label="Email"
        number={emailAddress}
        placeholder="you@email.com"
      />
      <InputText
        label="Facebook Messenger"
        text={fbMsgName}
        placeholder="Name on Facebook (optional)"
      />
    </section>

    <Heading4>Contact Details</Heading4>

    <section id="referred-by">
      <Heading4>How did you come to be interested in our services?</Heading4>
      {#each referrals as referredBy}
        <InputCheckbox label={referredBy} group={referrals} />
      {/each}
    </section>
    <section id="services">
      <Heading4>
        I would like to register for these programmes / services...
      </Heading4>
      {#each services as service}
        <InputCheckbox label={service} group={services} />
      {/each}
    </section>
  </section>
</form>

<style lang="postcss">
  @media screen(ty) {
    section.name {
      display: flex;
    }

    section.city-postcode {
      display: flex;
    }
  }
</style>
