import type { Address } from '$models/Address';
import { Address as address } from '$models/Address';
import type { ContactDetails } from './ContactDetails';
import { ContactDetails as contactDetails } from './ContactDetails';

export class EmergencyContact implements EmergencyContact {
  address = new address();
  contactDetails = new contactDetails();
}

export interface EmergencyContact {
  address: Address;
  contactDetails: ContactDetails;
}
