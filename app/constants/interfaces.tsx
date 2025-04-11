export interface Patient {
  patientId: string;
  name: string;
}

export interface CreatePatient extends Patient {
  cmasScore: number;
}

export interface LabResultGroup {
  labResultGroupId: string;
  groupName: string;
}
export interface LabResult {
  labResultId: string;
  resultName: string;
  unit: string;
  patient: Patient;
  labResultGroup: LabResultGroup;
}

export interface Appointment {
  appointmentId: string;
  patientId: string;
  patient?: Patient;
  date: string;
}
