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

// type ProjectEdit = {
//   beginningDate?: Date;
//   endingDate?: Date;
//   name?: "string";
//   description?: "string";
//   recruiterId?: number;
//   recruitmentPosition?: "string";
//   localization?: "string";
//   seniority?: "string";
//   isPublic?: boolean;
//   skills?: [
//     {
//       skillId?: number;
//       skillLevel?: number;
//     }
//   ];
// };

const client = axios.create({
  baseURL: "https://swh-t-praktyki2022-app.azurewebsites.net/Candidate/",
  withCredentials: true,
});

const candidateStatusesGet = (endpoint: string) => {
  return client.get(`${endpoint}`).then((response) => response.data);
};

const candidateStagesGet = (endpoint: string) => {
  return client.get(`${endpoint}`).then((response) => response.data);
};

const candidateHttpPost = (endpoint: string, postData: CandidatePost) => {
  return client.post(`${endpoint}`, postData).then((response) => response.data);
};

export default {
  candidateHttpPost,
  candidateStatusesGet,
  candidateStagesGet,
};
