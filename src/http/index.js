import axios from "axios";

export const URL = `${process.env.URL}api/`;

const $api = axios.create({
  withCredentials: true,
  baseURL: URL,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

// $api.interceptors.request.use((parser) => {
//   //config.data = config;
//   console.log('a');
//   parser.data = 'шаурма'
//   return parser;
// });

$api.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    console.log(error.response?.data?.message);
  }
);

export default $api;
