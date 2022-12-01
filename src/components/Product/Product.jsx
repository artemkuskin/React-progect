import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appSlice, basketSlice, categorySlice, openModalSlice } from "../../Store/slice";
import style from "./style";

export const Product = (props) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const { openModal } = appSlice.actions;
  const { category } = useSelector((state) => state.appReducer);
  const { addBasket: getBasket } = appSlice.actions;
  const { modalElem } = appSlice.actions;
  const { updateSum } = appSlice.actions;
  const { changeModalCategory, updateBasket } = appSlice.actions;

  const increment = () => {
    setCount((props.product.count += 1));
  };

  const decrement = () => {
    setCount((props.product.count -= 1));
  };

  const addBasketElem = () => {
    const elemBasket = {
      name: props.product.name,
      id: props.product.id,
      price: props.product.price,
      amount: props.product.count,
    };
    if (category !== "sandwiches") {
      dispatch(getBasket(elemBasket));
      dispatch(updateSum());
      //dispatch(updateBasket(props.product));
    } else {
      dispatch(openModal(true));
      dispatch(modalElem(props.product));
      dispatch(changeModalCategory("sizes"));
    }
  };
  return category === props.product.category ? (
    <div className={style.contant_product} id={props.product.id}>
      <img src="http://localhost:7000/markets/subway_logo.png" className={style.item_img}></img>
      <div className={style.price_boll3}>
        <div className={style.price_boll}>
          <img
            src={`http://localhost:7000/${props.product.category}/${props.product.image}`}
            className={style.img}
            id={"y"}
          ></img>
        </div>
      </div>
      <div className={style.text}>
        <p className={style.item_text} id={"b"}>
          {props.product.name}
        </p>
      </div>
      <div className={style.link}>
        {" "}
        <a href="#" className={style.item_link}>
          {props.product.description}
        </a>{" "}
      </div>
      <p className={style.container_text}>
        Цена
        <strong className={style.price_one} id={"v"}>
          {" "}
          {props.product.price}
        </strong>{" "}
        руб
      </p>
      <p className={style.item_link_text}>КОЛИЧЕСТВО</p>
      <div id="{1000}">
        <button className={style.increase} onClick={() => increment()}>
          +
        </button>
        <input type={style.number} value={count} className={style.input} readOnly></input>
        <button className={style.decrease} onClick={() => decrement()}>
          -
        </button>
      </div>
      <button className={style.edit_button} onClick={() => addBasketElem()}>
        В КОРЗИНУ
      </button>
    </div>
  ) : (
    ""
  );
};
