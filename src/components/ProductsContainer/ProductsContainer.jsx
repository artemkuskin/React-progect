import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../../Store/asyncThunk/getSearch";
import { Product } from "../Product/Product";
import style from "./style";

export const ProductsContainer = () => {
  const { category, searchElem } = useSelector((state) => state.appReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearch({ name: "", category: category }));
  }, [category]);

  return (
    <div id={style.container}>
      {searchElem ? (
        searchElem.map((product) => {
          return <Product product={product} key={product._id} />;
        })
      ) : (
        <div className={style.error_text}>
          Такого продукта нет в данной категории
        </div>
      )}
    </div>
  );
};
