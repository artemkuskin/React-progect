export const getMenu = async () => {
    let url = "http://localhost:7000/";
    let resp = await fetch(`${url}`);
    let result = await resp.json();
    
    return result;
  };