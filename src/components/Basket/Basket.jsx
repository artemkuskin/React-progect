import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { appSlice, getOrders, setOrder } from "../../Store/slice";
import { GetOrders } from "../GetOrders/GetOrders";
import style from "./style";

export const Basket = () => {
  const dispatch = useDispatch();
  const { basket, sum, user} =
    useSelector((state) => state.appReducer);
  const {
    updateSum,
    deleteBasket,
    getProductOrders,
    openModalOrders,
  } = appSlice.actions;

  const deleteElem = (elem) => {
    dispatch(deleteBasket(elem.id));
    dispatch(updateSum());
  };

  const createOrder = () => {
    const order = {
      products: [],
    };
    for (let key in basket) {
      const elem = {};
      elem.id = basket[key].id;
      elem.amount = basket[key].amount;
      elem.additives = [];
      for (let key2 in basket[key].filling) {
        const fillings = basket[key].filling[key2];
        Array.isArray(fillings)
          ? fillings.forEach((el) => elem.additives.push(el.id))
          : elem.additives.push(fillings.id);
      }
      order.products.push(elem);
    }
    console.log(JSON.stringify(order));
    return order;
  };

  const getAllOrders = () => {
    dispatch(getOrders());
    dispatch(openModalOrders(true));
  };

  const createOrders = () => {
    dispatch(setOrder(createOrder()))
  }

  return (
    <div className={style.basket}>
      <div className={style.basket_icon}>
        <img
          alt=""
          src={`${process.env.URL}templates/basket.png`}
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
              return (
                <div key={elem.id} className={style.basketElem}>
                  <p className="product_name" id={elem.id}>
                    {elem.name} - {elem.amount}
                  </p>
                  <button onClick={() => deleteElem(elem)}>X</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <p id={style.result_sum}>Итого:{sum} Руб</p>
      <button
        className={style.basket_button}
        onClick={() => createOrders()}
      >
        ОФОРМИТЬ ЗАКАЗ
      </button>
      <button className={style.basket_button} onClick={() => getAllOrders()}>
        ПОКАЗАТЬ ЗАКАЗ
      </button>
    </div>
  );
};
