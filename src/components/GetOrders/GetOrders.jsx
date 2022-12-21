import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { appSlice, getOrders } from "../../Store/slice";
import style from "./style";

export const GetOrders = () => {
  const dispatch = useDispatch();
  const { basket, sum, user, allOrders, productOrder } = useSelector(
    (state) => state.appReducer
  );
  const { updateSum, deleteBasket, getProductOrders } = appSlice.actions;

  const getPrduct = () => {
    dispatch(getOrders());
    dispatch(getProductOrders());
    console.log(allOrders);
  };
  return <button onClick={() => getPrduct()}>getOrders</button>;
};
