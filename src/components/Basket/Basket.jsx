import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { appSlice } from "../../Store/slice";
import style from "./style";

export const Basket = () => {
  const dispatch = useDispatch();
  const { basket, sum } = useSelector((state) => state.appReducer);
  const { updateSum, deleteBasket } = appSlice.actions;

  return (
    <div className={style.basket}>
      <div className={style.basket_icon}>
        <img
          alt=""
          src="http://localhost:5000/basketImg/basket.png"
          className={style.icon}
        ></img>
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
              const deleteElem = () => {
                dispatch(deleteBasket(elem.id));
                dispatch(updateSum());
              };
              return (
                <div key={elem.id} className={style.basketElem}>
                  <p className="product_name" id="idBa">
                    {elem.name} - {elem.amount}
                  </p>
                  <button
                    className="idBasketButton"
                    onClick={() => deleteElem()}
                  >
                    X
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <p id={style.result_sum}>Итого:{sum} Руб</p>
      <button className={style.basket_button}>ОФОРМИТЬ ЗАКАЗ</button>
    </div>
  );
};
