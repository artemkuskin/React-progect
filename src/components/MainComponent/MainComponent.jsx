import React from "react";
import { useDispatch } from "react-redux";
import { ProductsContainer } from "../productsContainer/ProductsContainer";
import { Basket } from "../Basket/Basket";
import { ModalBody } from "../Modal/ModalBody/ModalBody";
import { SideMenu } from "../SideMenu/SideMenu";
import style from "./style";
import { logout } from "../../Store/slice";
import { GetOrders } from "../GetOrders/GetOrders";

export const MainComponent = () => {
  const dispatch = useDispatch();

  const exit = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1 className={style.title}>СДЕЛАЙТЕ ЗАКАЗ НАПРЯМУЮ ИЗ РЕСТОРАНА</h1>
      <button onClick={() => exit()}>Выйти</button>
      <GetOrders />
      <div className={style.contant}>
        <div className={style.block}>
          <SideMenu />
          <Basket />
        </div>
        <ProductsContainer />
        <ModalBody />
      </div>
    </div>
  );
};
