import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalCategory } from "../ModalCategory/ModalCategory";
import { appSlice } from "../../../Store/mainSlice";
import { ResultCustomBurger } from "../ResultCustomBurger/ResultCustomBurger";
import style from "./style.scss";
import { ModalProductContainer } from "../ModalProductContainer/ModalProductContainer";
import { modalSlice } from "../../../Store/modalSlice";

export const ModalBody = () => {
  const dispatch = useDispatch();
  const { openModal } = modalSlice.actions;
  const { open, category, elem, modalSum } = useSelector(
    (state) => state.modal
  );

  const closeModal = () => {
    dispatch(openModal(false));
  };

  const isResult = category === "result";

  return (
    <div id={style.fon} className={!open ? style.fon : style.modalActive}>
      <div className={style.content__ingredients} href="1">
        <div className={style.content__ingredients_title}>
          <span className={style.close_modal_window} onClick={closeModal}>
            X
          </span>
          <h2 className={style.content__ingredients_title_text}>
            СОБЕРИТЕ СВОЙ СЕНДВИЧ
          </h2>
        </div>
        <ModalCategory />
        <div id={style.content__ingredients_price} className="sizes">
          {isResult ? <ResultCustomBurger /> : <ModalProductContainer />}
        </div>
        <footer>
          <h2 className={style.footer_text}>
            Итого: {modalSum === 0 ? elem.price : modalSum} руб
          </h2>
        </footer>
      </div>
    </div>
  );
};
