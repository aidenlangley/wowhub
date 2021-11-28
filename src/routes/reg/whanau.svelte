<script lang="ts" context="module">
  export const prerender = true;
</script>

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

  const name = 'Whakaoranga Whanau Registration';
  const description = `Planting the seed of hope... Sharing gifts of recovery.
  Register with the Whakaoranga Whanau here.`;
</script>

<SvelteSeo title={name} {description} />

<form
  {name}
  method="POST"
  data-netlify="true"
  data-netlify-recaptcha="true"
  netlify-honeypot="bot-field"
  class="column pad-y gaps-y"
>
  <Heading>{name}</Heading>
  <Paragraph>{description}</Paragraph>

  <!--
    This is supposed to happen automatically, but I can see no evidence of it
    working, so I'm manually adding it.
  -->
  <input type="hidden" name="form-name" value={name} />

  <Heading2>Personal Details</Heading2>
  <section id="personal-details" class="gaps-y">
    <section id="name" class="name">
      <InputSelect
        label="Title"
        options={['Mr', 'Miss', 'Mrs', 'Ms']}
        required
      />
      <InputText label="Forename" placeholder="First name" required />
      <InputText label="Surname" placeholder="Last name" required />
    </section>
    <InputDate label="Date of birth" />

    <Heading3>Address</Heading3>
    <section id="address">
      <InputText
        label="Address Line 1"
        placeholder="123 Street Name"
        hideLabel
      />
      <InputText label="Address Line 2" hideLabel />
      <section id="city-postcode" class="city-postcode">
        <InputText label="City" placeholder="City" />
        <InputText label="Postcode" placeholder="1234" />
      </section>
    </section>

    <Heading3>Contact Details</Heading3>
    <section id="contact-details">
      <InputPhone label="Phone" placeholder="012345679" required />
      <InputEmail label="Email" placeholder="you@email.com (optional)" />
      <InputText
        label="Facebook Messenger"
        placeholder="Name on Facebook (optional)"
      />
    </section>

    <section id="referred-by">
      <Heading4>How did you come to be interested in our services?</Heading4>
      {#each ['Referred myself', 'Referred by the police', 'Referred by corrections / probation', 'Referred by the family court', 'Referred by rehab / the DHB'] as referredBy}
        <InputCheckbox label={referredBy} />
      {/each}
    </section>
    <section id="services">
      <Heading4>
        I would like to register for these programmes / services...
      </Heading4>
      {#each ['AOD Counselling & Education', 'AOD Transitional Housing', 'Social Services Support', 'Advocacy', 'Anger Management', 'Te reo Māori', 'Kapahaka & waiata'] as service}
        <InputCheckbox label={service} />
      {/each}
    </section>
  </section>

  <section id="ehtnicity">
    <Heading4>Ethnicity</Heading4>
    {#each ['NZ Māori', 'NZ European', 'Samoan', 'Tongan', 'Cook Island Māori', 'Niuean', 'Other'] as ethnicity}
      <InputCheckbox label={ethnicity} />
    {/each}
  </section>

  <InputRadio
    label="Smoker?"
    options={['Yes, I am a smoker', 'No, not a smoker', 'Used to smoke']}
  />

  <InputText label="Iwi and/or hapū" placeholder="Iwi / hapū" />
  <InputNumber label="Children / dependents" placeholder="123" />
  <InputNumber label="MSD client no." placeholder="123 456 789" />
  <InputNumber label="Bank account no." placeholder="123 456 789" />
  <InputText label="Lawyers name (if applicable)" placeholder="John Smith" />
  <InputText
    label="Probation officer name (if applicable)"
    placeholder="Smith John"
  />
  <InputRadio
    label="Do you have a bank account?"
    options={['Yes, I have a bank account', "No, I don't have a bank account"]}
  />
  <InputRadio
    label="Do you have photo ID?"
    options={['Yes, I have photo ID', "No, I don't have photo ID"]}
  />
  <InputRadio
    label="Do you have access to the internet?"
    options={[
      'Yes, I have access to the internet',
      "No, I don't have access to the internet",
      'I sometimes have access to the internet'
    ]}
  />

  <Heading4>Would you like assistance with any of the above?</Heading4>
  {#each ["I'd like assistance setting up a bank account", "I'd like assistance getting photo ID", "I'd like assistance getting access to the internet"] as assistance}
    <InputCheckbox label={assistance} />
  {/each}

  <Heading2>Emergency Contact</Heading2>
  <section id="emergency-contact">
    <InputText
      label="Emergency contact's name"
      placeholder="Next of kin, or somebody close to you"
      required
    />
    <InputText
      label="Emergency contact's relation to you"
      placeholder="Partner, mother, etc."
      required
    />

    <Heading3>Address</Heading3>
    <section id="emergency-address">
      <InputText
        label="Emergency Contact Address Line 1"
        placeholder="123 Street Name"
        hideLabel
      />
      <InputText
        label="Emergency Contact Address Line 2"
        placeholder="Line 2"
        hideLabel
      />
      <section id="emergency-city-postcode" class="city-postcode">
        <InputText label="Emergency Contact City" placeholder="City" />
        <InputText label="Emergency Contact Postcode" placeholder="1234" />
      </section>
    </section>

    <Heading3>Contact Details</Heading3>
    <section id="emergency-contact-details">
      <InputPhone
        label="Emergency contact phone"
        placeholder="012345679"
        required
      />
      <InputEmail
        label="Emergency contact email address"
        placeholder="you@email.com (optional)"
      />
    </section>
  </section>

  <Heading2>Medical</Heading2>
  <InputText label="Name of Medical Center" placeholder="The Doctors" />

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
    required
  />
  <InputCheckbox
    id="understand-communication"
    label={`I understand that my healthcare provider may send my health
      information (confidentially) to other health care professionals who are
      directly involved with my health care & treatment.`}
    required
  />
  <InputCheckbox
    id="understand-confidentiality"
    label={`I understand that my health information will be restricted to
      authorised staff who will specifically access it to enable effective, safe
      & efficient care.`}
    required
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
    case, as this is part of our ethical practice.
  </Paragraph>
  <Paragraph>
    All kaimahi are supervised in their practice and they do discuss their mahi
    with their supervisor, however in this process your identity is not
    disclosed. The purpose of supervision is to focus on practice, the ensure
    that we are providing a safe and efficient service to you.
  </Paragraph>

  <Heading3>Declaration of Agreement & Understanding</Heading3>
  <InputCheckbox
    label={`I have read & understand the engagement agreement.`}
    required
  />
  <InputCheckbox
    label={`I am aware of my rights under the Code of Health & Disability Services Consumer Rights.`}
    required
  />

  <section id="honeypot" class="honeypot">
    <label>
      Don’t fill this out if you’re human: <input name="bot-field" />
    </label>
  </section>

  <div data-netlify-recaptcha="true">
    <!-- Netlify will inject recaptcha here. -->
  </div>

  <button type="submit" class="button blue">Submit</button>
</form>

<style lang="postcss">
  .honeypot {
    visibility: hidden;
  }

  @media screen(ty) {
    section.name {
      display: flex;
    }
  }
</style>
