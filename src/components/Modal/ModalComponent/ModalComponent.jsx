import { all } from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appSlice } from "../../../Store/slice";
import { ResultCustomBurger } from "../ResultCustomBurger/ResultCustomBurger";
import style from "./style";

export const ModalComponent = (props) => {
  const { category, allFiling, elem } = useSelector((state) => state.appReducer.modal);
  const { addSize, addBread, addSous, addFilling, addVeget, addModalSum, modalDeleteElem } = appSlice.actions;
  const dispatch = useDispatch();
  console.log(allFiling);
  //dispatch(loadMenu())

  const addFillings = () => {
    if (category === "sizes") {
      dispatch(addSize(props.product));
    } else if (category === "breads") {
      dispatch(addBread(props.product));
    } else if (category === "vegetables") {
      dispatch(addVeget(props.product));
    } else if (category === "sauces") {
      dispatch(addSous(props.product));
    } else if (category === "fillings") {
      dispatch(addFilling(props.product));
    }
    dispatch(addModalSum());
    
  };

  const isActive = allFiling
  ? Array.isArray(allFiling[category])
    ? allFiling[category].includes(props.product.id)
    : allFiling[category]?.id === props.product.id
    : false;

  
  return category === props.product.category ? (
    <div
      className={isActive ? style.active : style.price_popup}
      id={props.product.id * 100}
    >
      <div className={style.price_boll2}>
        <div className={style.price_boll}>
          <img
            src={`http://localhost:7000/${props.product.category}/${props.product.image}`}
            className={style.content__ingredients_img}
            id={props.product.id}
            onClick={() => addFillings()}
          />{" "}
        </div>
      </div>
      <h4 className="name">{props.product.name}</h4>
      <a href="#" className={style.item_description}>
        {props.product.description}{" "}
      </a>
      <div className={style.text_block}>
        <p className={style.price_text}> {props.product.price} </p>
        <strong> руб</strong>{" "}
      </div>
    </div>
  ) : (
    ""
  );
};
