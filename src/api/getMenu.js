import axios from "axios";
// .env
let url = process.env.REACT_APP_URL;

console.log(process.env.REACT_APP_URL);
const instance = axios.create({
  baseURL: url,
});

export const getMenu = async () => {
  let resp = await instance.get(`/`);

  return resp.data;
};

// export const getMenua = async () => {
//     const dispatch = useDispatch();
//     let url = "http://localhost:7000/";
//     let resp = await axios.get(`${url}`);
//     const { getMenua } = appSlice.actions;
//     dispatch(getMenua(resp))
//     console.log(resp.data);
//     return resp.data
//   };
