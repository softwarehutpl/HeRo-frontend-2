import axios from "axios";

const client = axios.create({
  baseURL: "https://swh-t-praktyki2022-app.azurewebsites.net/Recruitment/",
  withCredentials: true,
});

const recruitmentHttpGet = (endpoint: any) => {
  return client
    .get(`${endpoint}`)
    .then((response) => console.log(response.data));
};

const recruitmentHttpPost = (endpoint: any, postData: any) => {
  return client.post(`${endpoint}`, postData).then((response) => response.data);
};
// console.log(recruitmentHttpPost);

const recruitmentHttpPut = (endpoint: any, postData: any) => {
  return client
    .put(`${endpoint}`, postData)
    .then((response) => console.log(response.data));
};

const recruitmentHttpDelete = (endpoint: any) => {
  return client
    .delete(`${endpoint}`)
    .then((response) => console.log(response.data));
};

export default {
  recruitmentHttpGet,
  recruitmentHttpPost,
  recruitmentHttpPut,
  recruitmentHttpDelete,
};
