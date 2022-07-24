export interface IPatient {
  id: string;
  name: string;
  healthInsuranceCardId: string;
  address: string;
  createdAt: string;
}

export interface IPatientDTO {
  name: string;
  healthInsuranceCardId: string;
  address: string;
}

export interface IBodyPatient {
  patient: IPatientDTO;
}
