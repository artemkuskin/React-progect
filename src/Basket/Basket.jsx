import React from "react";
import style from './style'

export const Basket = () => {
    return (
        <div className={style.basket}>
            <div className={style.basket_icon}>
                <img alt="" className={style.icon}></img>
              <h2 className={style.basket_title}>КОРЗИНА</h2>
            </div>
            <div className={style.basket_text}>
              <div id={style.tovar}>
                <span className={style.basket_name}>Название</span>
                <span className={style.basket_amoun}>Количество</span>
              </div>
              <div>
                <div id={style.counter_text}></div>
              </div>
            </div>
            <p id={style.result_sum}>Итого:0 Руб</p>
            <button className={style.basket_button}>ОФОРМИТЬ ЗАКАЗ</button>
          </div>
    )
}