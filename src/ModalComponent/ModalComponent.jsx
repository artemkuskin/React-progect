import React from "react";
import { useSelector } from "react-redux";
import style from "./style";

export const ModalComponent = (props) => {
  const { modal } = useSelector((state) => state.modalCategoryReducer);

  return modal.category === props.product.category ? (
    <div className={style.price_popup} id="${modal[key].id}">
      <div className={style.price_boll2}>
        <div className={style.price_boll}>
          <img
            src={`http://localhost:7000/${props.product.category}/${props.product.image}`}
            className={style.content__ingredients_img}
            id="img${[key]}"
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
