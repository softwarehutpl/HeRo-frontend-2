import axios from 'axios';

// type SkillGet = {
//   id: number;
//   name: string;
// };

const client = axios.create({
  baseURL: 'https://swh-t-praktyki2022-app.azurewebsites.net/Skill/',
  withCredentials: true,
});

const skillHttpGet = (endpoint: string) => {
  return client.get(`${endpoint}`).then(response => response.data);
};

export default {
  skillHttpGet,
};
