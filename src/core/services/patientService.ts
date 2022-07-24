import PatientModel from "../../db/models/patient";
import { IPatientDTO } from "../entities/interfaces/patient";
import { Patient } from "../entities/patient/Patient";
import { PatientDTO } from "../entities/patient/PatientDTO";

const getAllPatients = () => {
  try {
    return PatientModel.find();
  } catch (error: any) {
    throw error;
  }
};

const postPatient = async (data: IPatientDTO) => {
  try {
    const patientDTO: IPatientDTO = new PatientDTO(data);
    const patient = new Patient(patientDTO);
    PatientModel.create(patient);
  } catch (error: any) {
    throw error;
  }
};

const findPatient = (id: string) => {
  try {
    return PatientModel.findOne({ id: id });
  } catch (error: any) {
    throw error;
  }
};
const updatePatient = (id: string, data: IPatientDTO) => {
  try {
    const patientDTO: IPatientDTO = new PatientDTO(data);
    return PatientModel.updateOne({ id: id }, patientDTO);
  } catch (error: any) {
    throw error;
  }
};

const deletePatient = async (id: string) => {
  try {
    return PatientModel.findOneAndDelete()
  } catch (error: any) {
    throw error;
  }
};

export default {
  postPatient,
  updatePatient,
  deletePatient,
  findPatient,
  getAllPatients,
};
