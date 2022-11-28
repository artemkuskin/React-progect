import React from "react";
import { useSelector } from "react-redux";
import style from "./style";

export const Basket = () => {
  const { basket } = useSelector((state) => state.basketReducer);
  console.log(basket);
  return (
    <div className={style.basket}>
      <div className={style.basket_icon}>
        <img alt="" src="http://localhost:7000/basketImg/basket.png" className={style.icon}></img>
        <h2 className={style.basket_title}>КОРЗИНА</h2>
      </div>
      <div className={style.basket_text}>
        <div id={style.tovar}>
          <span className={style.basket_name}>Название</span>
          <span className={style.basket_amoun}>Количество</span>
        </div>
        <div>
          <div id={style.counter_text}>
            {basket.map((elem) => {
              return (
                <div key={elem.id}  className="basketElem" id="idBasket">
                  <p className="product-name" id="idBa">
                    {elem.name} - {elem.amount}
                  </p>
                  <button id="0" className="0">
                    X
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <p id={style.result_sum}>Итого:0 Руб</p>
      <button className={style.basket_button}>ОФОРМИТЬ ЗАКАЗ</button>
    </div>
  );
};
