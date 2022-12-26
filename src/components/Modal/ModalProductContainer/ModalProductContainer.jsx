import React from "react";
import { useSelector } from "react-redux";
import { ModalComponent } from "../ModalComponent/ModalComponent";

export const ModalProductContainer = () => {
  const { menu2 } = useSelector((state) => state.appReducer);

  return menu2.additives?.map((product) => (
    <ModalComponent product={product} key={product._id} />
  ));
};
