import React from "react";
import { useSelector } from "react-redux";
import { ModalComponent } from "../ModalComponent/ModalComponent";
import style from "./style";

export const ModalProductContainer = () => {
  const { menu2 } = useSelector((state) => state.appReducer);
  return menu2.map((product) => {
    return <ModalComponent product={product} key={product.id} />;
  });
};
