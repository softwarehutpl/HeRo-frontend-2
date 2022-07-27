export default interface Candidate {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  availableFrom: Date;
  expectedMonthlySalary: number;
  otherExpectations: string;
  cvPath: string;
  interviewName: string;
  interviewOpinionScore: number;
  interviewOpinionText: string;
  hrName: string;
  hrOpinionScore: number;
  hrOpinionText: string;
}
