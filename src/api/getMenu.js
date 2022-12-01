import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { appSlice } from "../Store/slice";


export const getMenu = async () => {
  let url = "http://localhost:7000/";
  let resp = await axios.get(`${url}`);

  return resp.data
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