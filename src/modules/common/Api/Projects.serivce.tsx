import axios from 'axios';

type ProjectPost = {
  name?: string;
  description?: string;
  showOpen?: boolean;
  showClosed?: boolean;
  beginningDate?: string;
  endingDate?: string;
  recruiterId?: number;
  recruitmentPosition?: string;
  localization?: string;
  seniority?: string;
  isPublic?: boolean;
  skills?: [
    {
      skillId: number;
      skillLevel: number;
    }
  ];
  paging?: {
    pageSize: number;
    pageNumber: number;
  };
  sortOrder?: {
    sort: [
      {
        key: 'string';
        value: 'string';
      }
    ];
  };
};

type ProjectEdit = {
  beginningDate?: Date;
  endingDate?: Date;
  name?: 'string';
  description?: 'string';
  recruiterId?: number;
  recruitmentPosition?: 'string';
  localization?: 'string';
  seniority?: 'string';
  isPublic?: boolean;
  skills?: [
    {
      skillId?: number;
      skillLevel?: number;
    }
  ];
};

const client = axios.create({
  baseURL: 'https://swh-t-praktyki2022-app.azurewebsites.net/Recruitment/',
  withCredentials: true,
});

const recruitmentHttpGet = (endpoint: string) => {
  return client.get(`${endpoint}`);
};

const recruitmentHttpPost = (endpoint: string, postData: ProjectPost) => {
  return client.post(`${endpoint}`, postData);
};

const recruitmentHttpPut = (endpoint: string, postData: ProjectEdit) => {
  return client.put(`${endpoint}`, postData);
};

const recruitmentHttpDelete = (endpoint: string) => {
  return client.delete(`${endpoint}`);
};

export default {
  recruitmentHttpGet,
  recruitmentHttpPost,
  recruitmentHttpPut,
  recruitmentHttpDelete,
};
