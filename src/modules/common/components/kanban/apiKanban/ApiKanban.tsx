import axios from "axios";

type CandidatePost = {
  status?: string[];
  stage?: string;
  paging: {
    pageSize: number;
    pageNumber: number;
  };
  sortOrder?: {
    sort: [
      {
        key: "string";
        value: "string";
      }
    ];
  };
};

type CandidateUpdate = {
  candidateId: number;
  status?: string;
  stage?: string;
};

const client = axios.create({
  baseURL: "https://swh-t-praktyki2022-app.azurewebsites.net/Candidate/",
  withCredentials: true,
});

const candidateHttpPost = (endpoint: string, postData: CandidatePost) => {
  return client.post(`${endpoint}`, postData).then((response) => response.data);
};

const candidateUpdatePost = (endpoint: string, postData: CandidateUpdate) => {
  return client.post(`${endpoint}`, postData).then((response) => response.data);
};

export default {
  candidateHttpPost,
  candidateUpdatePost,
};
