import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appSlice } from "../../../Store/slice";
import style from "./style";

export const ModalComponent = (props) => {
  const { category, allFiling, isActive2 } = useSelector((state) => state.appReducer.modal);
  const { addFillings: addSize, addModalSum, deletemodalElem } = appSlice.actions;
  const dispatch = useDispatch();
  

  const addFillings = () => {
    dispatch(deletemodalElem(props.product));
    dispatch(addSize(props.product));
    console.log(isActive2);
    dispatch(addModalSum());
    console.log(allFiling);
  };

  const isActive = allFiling
    ? Array.isArray(allFiling[category])
      ? allFiling[category].find((obj) => obj.id === props.product.id)
      : allFiling[category]?.id === props.product.id
    : false;

  return category === props.product.category ? (
    <div
      className={isActive ? style.active : style.price_popup}
      id={props.product.id * 100}
      onClick={() => addFillings()}
    >
      <div className={style.price_boll2}>
        <div className={style.price_boll}>
          <img
            src={`http://localhost:7000/${props.product.category}/${props.product.image}`}
            className={style.content__ingredients_img}
            id={props.product.id}
            // onClick={() => addFillings()}
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
