<script lang="ts">
  import InputCheckbox from '$comp/forms/InputCheckbox.svelte';
  import InputDate from '$comp/forms/InputDate.svelte';
  import InputEmail from '$comp/forms/InputEmail.svelte';
  import InputNumber from '$comp/forms/InputNumber.svelte';
  import InputPhone from '$comp/forms/InputPhone.svelte';
  import InputRadio from '$comp/forms/InputRadio.svelte';
  import InputSelect from '$comp/forms/InputSelect.svelte';
  import InputText from '$comp/forms/InputText.svelte';
  import Heading from '$comp/heading/Heading.svelte';
  import Heading2 from '$comp/heading/Heading2.svelte';
  import Heading3 from '$comp/heading/Heading3.svelte';
  import Heading4 from '$comp/heading/Heading4.svelte';
  import Paragraph from '$comp/paragraph/Paragraph.svelte';
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

  const ethnicities = [
    'NZ Māori',
    'NZ European',
    'Samoan',
    'Tongan',
    'Cook Island Māori',
    'Niuean'
  ];

  let iwi: string;
  let children: number;
  let msdClientNo: number;
  let lawyer: string;
  let probationOfficer: string;
  let photoId: string;
  let internetAccess: string;

  let yesNo = ['Yes', 'No'];
  let yesNoUsedTo = ['Yes', 'No', 'Used to'];
  let yesNoSometimes = ['Yes', 'No', 'Sometimes'];

  let smoker: string;
  let bankAccount: string;

  const assistanceWith = ['Bank Account', 'Photo ID', 'Internet Access'];

  let emergencyAddress = {
    line1: '',
    line2: '',
    city: '',
    postcode: ''
  };
  let emergencyPhoneNumber: string;
  let emergencyEmailAddress: string;

  let medicalCenter: string;
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

  <Heading2>Personal Details</Heading2>
  <section id="personal-details" class="gaps-y">
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
        email={emailAddress}
        placeholder="you@email.com"
      />
      <InputText
        label="Facebook Messenger"
        text={fbMsgName}
        placeholder="Name on Facebook (optional)"
      />
    </section>

    <section id="referred-by">
      <Heading4>How did you come to be interested in our services?</Heading4>
      {#each referrals as referredBy}
        <InputCheckbox label={referredBy} />
      {/each}
    </section>
    <section id="services">
      <Heading4>
        I would like to register for these programmes / services...
      </Heading4>
      {#each services as service}
        <InputCheckbox label={service} />
      {/each}
    </section>
  </section>

  <InputRadio label="Smoker?" options={yesNoUsedTo} bind:value={smoker} />

  <section id="ehtnicity">
    <Heading4>Ethnicity</Heading4>
    {#each ethnicities as ethnicity}
      <InputCheckbox label={ethnicity} />
    {/each}
  </section>

  <InputText label="Iwi and/or hapū" text={iwi} placeholder="Iwi / hapū" />
  <InputNumber
    label="Children / dependents"
    number={children}
    placeholder="123"
  />
  <InputNumber
    label="MSD client no."
    number={msdClientNo}
    placeholder="123 456 789"
  />
  <InputText
    label="Lawyers name (if applicable)"
    text={lawyer}
    placeholder="John Smith"
  />
  <InputText
    label="Probation officer name (if applicable)"
    text={probationOfficer}
    placeholder="John Smith"
  />
  <InputRadio
    label="Do you have a bank account?"
    options={yesNo}
    bind:value={bankAccount}
  />
  <InputRadio
    label="Do you have photo ID?"
    options={yesNo}
    bind:value={photoId}
  />
  <InputRadio
    label="Do you have access to the internet?"
    options={yesNoSometimes}
    bind:value={internetAccess}
  />

  <Heading4>Would you like assistance with any of the above?</Heading4>
  {#each assistanceWith as assistance}
    <InputCheckbox label={assistance} />
  {/each}

  <Heading2>Emergency Contact</Heading2>
  <InputText
    label="Name (next of kin, or somebody close to you)"
    placeholder="Partner, mother..."
  />
  <InputText label="Relation to you" placeholder="Brother, sister..." />

  <Heading3>Address</Heading3>
  <section id="emergency-address">
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
    <section id="emergency-city-postcode" class="city-postcode">
      <InputText label="City" text={address.city} placeholder="City" />
      <InputText label="Postcode" text={address.postcode} placeholder="1234" />
    </section>
  </section>

  <Heading3>Contact Details</Heading3>
  <section id="emergency-contact-details">
    <InputPhone
      label="Phone"
      number={emergencyPhoneNumber}
      placeholder="012345679"
    />
    <InputEmail
      label="Email"
      email={emergencyEmailAddress}
      placeholder="you@email.com"
    />
  </section>

  <Heading2>Medical</Heading2>
  <InputText
    label="Name of Medical Center"
    text={medicalCenter}
    placeholder="The Doctors"
  />

  <Heading3>Agreement</Heading3>
  <Paragraph>
    By checking these boxes you are signing the agreement, and declaring that
    you are in agreement with the following statements
  </Paragraph>
  <InputCheckbox
    id="consent-access"
    label={`I give consent for Whakaoranga Whānau Recovery Hub to gain access to
      my personal medical records from my GP, DHB & other healthcare service
      providers.`}
  />
  <InputCheckbox
    id="understand-communication"
    label={`I understand that my healthcare provider may send my health
      information (confidentially) to other health care professionals who are
      directly involved with my health care & treatment.`}
  />
  <InputCheckbox
    id="understand-confidentiality"
    label={`I understand that my health information will be restricted to
      authorised staff who will specifically access it to enable effective, safe
      & efficient care.`}
  />

  <Heading2>Engagement Agreement</Heading2>
  <Paragraph>
    This agreement sets the terms of our work together in regards to the support
    services with Whakaoranga Whānau Recovery Hub.
  </Paragraph>
  <Paragraph>
    During your time with the Whakaoranga Whānau Recovery Hub...
  </Paragraph>

  <Heading3>Group Safety</Heading3>
  <Paragraph>
    No violence or threats of violence towards staff or other group members will
    be tolerated. It is very important that you view the group as a safe place
    to share your experiences and feelings without fear of harm.
  </Paragraph>

  <Heading3>Confidentiality</Heading3>
  <Paragraph>
    Anything you share with us will remain confidential to the Whakaoranga
    Whānau Recovery Hub and organisations involved in your care, for example
    your GP, Corrections or Ministry of Social Development.
  </Paragraph>

  <Heading3>Our Promise</Heading3>
  <Paragraph>
    We will always treat you with respect and fairness & we will work towards
    achieving goals that you develop with us, throughout your stay. Whakaoranga
    Whānau Recovery Hub will always do their best to provide a safe &
    comfortable environment, and provide services in a respectful manner.
  </Paragraph>
  <Paragraph>
    It's also important for you to understand that, should we believe you to be
    at risk of harming yourself, or others, we will act to keep you & them safe.
    We will always try to talk about this with you first, but will act in any
    case, as this is part of our ethical practise.
  </Paragraph>
  <Paragraph>
    All kaimahi are supervised in their practise and they do discuss their mahi
    with their supervisor, however in this process your identity is not
    disclosed. The purpose of supervision is to focus on practice, the ensure
    that we are providing a safe and efficient service to you.
  </Paragraph>

  <Heading3>Declaration of Agreement & Understanding</Heading3>
  <InputCheckbox
    id="declare-understanding"
    label={`I have read & understand the engagement agreement.`}
  />
  <InputCheckbox
    id="declare-rights"
    label={`I am aware of my rights under the Code of Health & Disability Services Consumer Rights.`}
  />

  <button type="submit" class="button blue">Submit</button>
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
