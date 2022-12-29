import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductsContainer } from "../ProductsContainer/ProductsContainer";
import { Basket } from "../Basket/Basket";
import { ModalBody } from "../Modal/ModalBody/ModalBody";
import { SideMenu } from "../SideMenu/SideMenu";
import style from "./style";
import { BodyModalOrders } from "../GetOrders/BodyModalOrders";
import { Search } from "../Search/Search";
import {  ColorRing } from "react-loader-spinner";
import { logout } from "../../Store/asyncThunk/loguot";

export const MainComponent = () => {
  const { isLoad } = useSelector((state) => state.appReducer);

  const dispatch = useDispatch();

  const exit = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1 className={style.title}>СДЕЛАЙТЕ ЗАКАЗ НАПРЯМУЮ ИЗ РЕСТОРАНА</h1>
      <button onClick={exit} className={style.exit_button}>
        Выйти
      </button>
      <Search />
      <BodyModalOrders />
      <div className={style.contant}>
        <div className={style.block}>
          <SideMenu />
          <Basket />
        </div>
        {isLoad ? (
          <ProductsContainer />
        ) : (
          <ColorRing
            visible={true}
            height="400"
            width="900"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        )}

        <ModalBody />
      </div>
    </div>
  );
};
