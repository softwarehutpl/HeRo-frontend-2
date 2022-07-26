import axios from "axios";

type UserPost = {
  totalCount?: number;
  userDTOs?: [
    {
      id?: number;
      email?: "string";
      userStatus?: "string";
      roleName?: "string";
    }
  ];
  userFiltringDTO?: {
    email?: string;
    userStatus?: string;
    roleName?: string;
  };
  sortOrder?: {
    sort?: [
      {
        key?: string;
        value?: string;
      }
    ];
  };
  paging?: {
    pageSize?: number;
    pageNumber?: number;
  };
};

const client = axios.create({
  baseURL: "https://swh-t-praktyki2022-app.azurewebsites.net/User/",
  withCredentials: true,
});

const userHttpGet = (endpoint: string) => {
  return client.get(`${endpoint}`).then((response) => response.data);
};

const userHttpPost = (endpoint: string, postData?: UserPost) => {
  return client.post(`${endpoint}`, postData).then((response) => response.data);
};

const userHttpDelete = (endpoint: string) => {
  return client.delete(`${endpoint}`).then((response) => response.data);
};

export default {
  userHttpGet,
  userHttpPost,
  userHttpDelete,
};
