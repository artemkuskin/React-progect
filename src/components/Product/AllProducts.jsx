import React, { useEffect, useState } from "react";
import style from "./style";
import { Product } from "./Product";
import { getMenu } from "../../api/getMenu";

export const AllProducts = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const getMenuApi = async () => {
      const menu = await getMenu();
      setMenu(menu.menu);
    };

    getMenuApi();
  }, []);

  console.log(menu);
  return (
    <div id={style.container} className="pizza">
      {menu.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
};
