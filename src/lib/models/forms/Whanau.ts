import type { Legal } from '$models/person/Legal';
import { Legal as legal } from '$models/person/Legal';
import type { Maori } from '$models/person/Maori';
import { Maori as maori } from '$models/person/Maori';
import type { Person } from '$models/person/Person';
import { Person as person } from '$models/person/Person';
import type { YesNoSometimes, YesNoUsedTo } from '$models/YesNoOther';

export class WhanauRegistration implements WhanauRegistration {
  person = new person();
  maori = new maori();
  legal = new legal();
}

export interface WhanauRegistration {
  person: Person;
  referredBy: string[];
  selectedServices: string[];
  maori: Maori;
  legal: Legal;
  smokerStatus: YesNoUsedTo;
  bankAccountStatus: boolean;
  photoIdStatus: boolean;
  internetAccessStatus: YesNoSometimes;
  bankAccount: number;
  medicalCenterName: string;
}
