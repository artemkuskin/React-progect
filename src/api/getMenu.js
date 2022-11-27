import axios from "axios";


export const getMenu = async () => {
    let url = "http://localhost:7000/";
    let resp = await axios.get(`${url}`);
    console.log(resp);
    return resp.data.menu
  };