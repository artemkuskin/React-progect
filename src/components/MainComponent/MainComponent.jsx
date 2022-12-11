import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../Store/slice";
import { Basket } from "../Basket/Basket";
import { ModalBody } from "../Modal/ModalBody/ModalBody";
import { Product } from "../Product/Product";
import { SideMenu } from "../SideMenu/SideMenu";
import style from './style'

 

 export const MainComponent = () => {

  const exit = () => {
    dispatch(logout)
  }

  const dispatch = useDispatch()
   return (
        <div>
      <h1 className={style.title}>СДЕЛАЙТЕ ЗАКАЗ НАПРЯМУЮ ИЗ РЕСТОРАНА</h1>
      <button onClick={() => exit()}>Выйти</button>
      <div className={style.contant}>
        <div className={style.block}>
          <SideMenu />
          <Basket />
        </div>
        {/* <div id={style.container} className="pizza">
          {menu.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div> */}
        <ModalBody />
      </div>
    </div>
  );
   
 }