export interface Candidate {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  availableFrom: Date;
  expectedMonthlySalary: number;
  otherExpectations: string;
  cvPath: string;
}
