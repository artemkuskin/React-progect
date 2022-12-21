import React from "react";
import { useSelector } from "react-redux";
import { Product } from "../Product/Product";
import style from "./style";

export const ProductsContainer = () => {
  const { menu2 } = useSelector((state) => state.appReducer);

  return (
    <div id={style.container} className="pizza">
      {menu2.menu?.map((product) => {
        return <Product product={product} key={product._id} />;
      })}
    </div>
  );
};
