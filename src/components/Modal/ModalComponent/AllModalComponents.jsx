import React, { useEffect, useState } from "react";
import { getMenu } from "../../../api/getMenu";
import { ModalComponent } from "./ModalComponent";
import style from "./style";

export const AllModalComponents = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    const getMenuApi = async () => {
      const menu = await getMenu();
      setMenu(menu.menu2);
    };

    getMenuApi();
  }, []);

  return menu.map((product) => {
    return <ModalComponent product={product} key={product.id} />;
  });
};
