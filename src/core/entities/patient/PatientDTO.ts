import { IPatientDTO } from "../interfaces/patient";

export class PatientDTO {
  public name!: string;
  public healthInsuranceCardId!: string;
  public address!: string;

  constructor(props: IPatientDTO) {
    Object.assign(this, props);
  }
}
