import { isAllOf } from "@reduxjs/toolkit";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalSlice } from "../../../Store/modalSlice";
import { appSlice } from "../../../Store/mainSlice";
import style from "./style";

export const ModalComponent = (props) => {
  const dispatch = useDispatch();
  const { addFillings: addSize, addModalSum } = modalSlice.actions;
  const { allFiling } = useSelector(
    (state) => state.modal
  );

  const { category } = useSelector(
    (state) => state.modal
  );

  const addElem = () => {
    dispatch(addSize(props.product));
    dispatch(addModalSum());
  };

  const isActive = allFiling
    ? Array.isArray(allFiling[category])
      ? allFiling[category].find((obj) => obj.id === props.product._id)
      : allFiling[category]?.id === props.product._id
    : false;

  return category === props.product.category ? (
    <div
      className={isActive ? style.active : style.price_popup}
      onClick={addElem}
    >
      <div className={style.price_boll2}>
        <div className={style.price_boll}>
          <img
            src={`${process.env.URL}${props.product.image}`}
            className={style.content__ingredients_img}
          />
        </div>
      </div>
      <h4>{props.product.name}</h4>
      <a href="#" className={style.item_description}>
        {props.product.description}
      </a>
      <div className={style.text_block}>
        <p className={style.price_text}> {props.product.price} </p>
        <strong> руб</strong>
      </div>
    </div>
  ) : (
    ""
  );
};
