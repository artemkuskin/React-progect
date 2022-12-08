import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../../../api/getMenu";
import { ModalCategory } from "../ModalCategory/ModalCategory";
import { ModalComponent } from "../ModalComponent/ModalComponent";
import { appSlice, modalCategorySlice, openModalSlice } from "../../../Store/slice";
import { ResultCustomBurger } from "../ResultCustomBurger/ResultCustomBurger";
import style from "./style.scss";
import { AllModalComponents } from "../ModalComponent/AllModalComponents";

export const ModalBody = () => {


  const dispatch = useDispatch();
  const { openModal } = appSlice.actions;
  const { open , category, elem, modalSum} = useSelector((state) => state.appReducer.modal);

  const closeModal = () => {
    dispatch(openModal(false))
  }

  const isResult = category === "result";

  return (
    <div id={style.fon} className={!open ? style.fon : style.modalActive}>
      <div className={style.content__ingredients} href="1">
        <div className={style.content__ingredients_title}>
          <span
            className={style.close_modal_window}
            onClick={() => {
              closeModal()
            }}
          >
            X
          </span>
          <h2 className={style.content__ingredients_title_text}>СОБЕРИТЕ СВОЙ СЕНДВИЧ</h2>
        </div>
        <ModalCategory />
        <div id={style.content__ingredients_price} className="sizes">
          {isResult ? (
            <ResultCustomBurger />
          ) : (
            <AllModalComponents />
          )}
        </div>
        <footer>
          <h2 className={style.footer_text}>Итого: {modalSum === 0 ? elem.price : modalSum} руб</h2>
        </footer>
      </div>
    </div>
  );
};
