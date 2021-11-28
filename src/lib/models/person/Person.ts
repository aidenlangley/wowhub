import type { Address } from '$models/Address';
import { Address as address } from '$models/Address';
import type { ContactDetails } from './ContactDetails';
import { ContactDetails as contactDetails } from './ContactDetails';
import type { EmergencyContact } from './EmergencyContact';
import { EmergencyContact as emergencyContact } from './EmergencyContact';
import type { Title } from './Title';

export class Person implements Person {
  dob = new Date();
  contactDetails = new contactDetails();
  address = new address();
  emergencyContact = new emergencyContact();
}

export interface Person {
  title: Title;
  forename: string;
  surname: string;
  dob: Date;
  contactDetails: ContactDetails;
  address: Address;
  children: number;
  emergencyContact: EmergencyContact;
}
