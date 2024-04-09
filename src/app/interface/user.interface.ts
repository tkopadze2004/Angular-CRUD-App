export interface User {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  phone: string;
  address: Address;
  skills: {
    skill: string;
  }[];

  workExperiance: {
    workplace: string;
    position: string;
    startYear: string;
    endYear: string;
  }[];
}

interface Address {
  city: string;
  address: string;
}
