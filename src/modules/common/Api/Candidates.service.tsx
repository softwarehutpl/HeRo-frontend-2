import axios from "axios";

type CandidatePost = {
  status?: string[];
  stage?: string[];
  paging: {
    pageSize: number;
    pageNumber: number;
  };
  sortOrder?: {
    sort: [
      {
        key: string;
        value: string;
      }
    ];
  };
};

type CandidateEdit = {
  name?: "string";
  lastName?: "string";
  email?: "string";
  availableFrom?: Date;
  expectedMonthlySalary?: number;
  otherExpectations?: "string";
  cvPath?: "string";
  recruitmentId?: number;
};

const client = axios.create({
  baseURL: "https://swh-t-praktyki2022-app.azurewebsites.net/Candidate/",
  withCredentials: true,
});

const candidateHttpGet = (endpoint: string) => {
  return client.get(`${endpoint}`);
};

const candidateHttpPost = (endpoint: string, postData: CandidatePost) => {
  return client.post(`${endpoint}`, postData);
};

const candidateHttpPut = (endpoint: string, postData: CandidateEdit) => {
  return client.put(`${endpoint}`, postData);
};

const candidatetHttpDelete = (endpoint: string) => {
  return client.delete(`${endpoint}`);
};

export default {
  candidateHttpGet,
  candidateHttpPost,
  candidateHttpPut,
  candidatetHttpDelete,
};
