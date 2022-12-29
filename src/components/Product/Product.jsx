import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalSlice } from "../../Store/modalSlice";
import { appSlice } from "../../Store/mainSlice";
import style from "./style";

export const Product = (props) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.appReducer);
  const { updateSum } = appSlice.actions;

  const {modalElem, openModal, changeModalCategory } = modalSlice.actions;
  const { addBasket: getBasket} = appSlice.actions;
  

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };

  const addBasketElem = () => {
    const elemBasket = {
      name: props.product.name,
      id: props.product._id,
      price: props.product.price,
      amount: count,
    };

    if (category !== "sandwiches") {
      dispatch(getBasket(elemBasket));
      dispatch(updateSum());
    } else {
      dispatch(openModal(true));
      dispatch(modalElem(props.product));
      dispatch(changeModalCategory("sizes"));
    }
  };

  if (category !== props.product.category) {
    return "";
  }

  return (
    <div
      className={style.contant_product}
      id={props.product._id}
      href={props.product._id}
    >
      <img
        src={`${process.env.URL}images/markets/subway.png`}
        className={style.item_img}
      ></img>
      <div className={style.price_boll3}>
        <div className={style.price_boll}>
          <img
            src={`${process.env.URL}${props.product.image}`}
            className={style.img}
          ></img>
        </div>
      </div>
      <div className={style.text}>
        <p className={style.item_text}>{props.product.name}</p>
      </div>
      <div className={style.link}>
        <a href="#" className={style.item_link}>
          {props.product.description}
        </a>
      </div>
      <p className={style.container_text}>
        Цена
        <strong className={style.price_one}> {props.product.price}</strong> руб
      </p>
      <p className={style.item_link_text}>КОЛИЧЕСТВО</p>
      <div>
        <button className={style.increase} onClick={() => increment()}>
          +
        </button>
        <input
          type={style.number}
          value={count}
          className={style.input}
          readOnly
        ></input>
        <button className={style.decrease} onClick={() => decrement()}>
          -
        </button>
      </div>
      <button className={style.edit_button} onClick={() => addBasketElem()}>
        В КОРЗИНУ
      </button>
    </div>
  );
};
