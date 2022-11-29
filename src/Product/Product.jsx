import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { basketSlice, categorySlice, openModalSlice } from "../redux/reducers";
import style from "./style";

export const Product = (props) => {
  const dispatch = useDispatch();
  const { openModal } = openModalSlice.actions;
  const { category } = useSelector((state) => state.categoryReducer);
  const { basket } = useSelector((state) => state.basketReducer);
  const { getBasket } = basketSlice.actions;

  const addBasketElem = () => {
    const elemBasket = {
      name: props.product.name,
      id: props.product.id,
      price: props.product.price,
      amount: props.product.count,
    };
    if (category !== "sandwiches") {
      dispatch(getBasket(elemBasket));
    } else {
      dispatch(openModal(true))
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
        <button className={style.increase} id="inc{0}">
          +
        </button>
        <input type={style.number} value={props.product.count} className={style.input} readOnly></input>
        <button className={style.decrease} id="dec{0}">
          -
        </button>
      </div>
      <button className={style.edit_button} id="button{0}" onClick={() => addBasketElem()}>
        В КОРЗИНУ
      </button>
    </div>
  ) : (
    ""
  );
};
