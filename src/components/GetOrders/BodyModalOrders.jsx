import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { appSlice } from "../../Store/mainSlice";
import { AllOrders } from "./AllOrders";
import style from "./style";

export const BodyModalOrders = () => {
  const dispatch = useDispatch();
  const { openModalOrders } = appSlice.actions;
  const { openModalOrder, orderSum, allOrders } = useSelector(
    (state) => state.appReducer
  );

  const closeModal = () => {
    dispatch(openModalOrders(false));
  };

  return (
    <div
      className={!openModalOrder ? style.fon : style.modalActive}
      id={style.fon}
    >
      <div className={style.content__ingredients} href="1">
        <div className={style.content__ingredients_title}>
          <span className={style.close_modal_window} onClick={closeModal}>
            X
          </span>
          <h2 className={style.content__ingredients_title_text}>ВАШИ ЗАКАЗЫ</h2>
        </div>

        <div className={style.content__ingredients_price}>
          {allOrders.length > 0 ? (
            <AllOrders allOrders={allOrders} />
          ) : (
            <div className={style.err_text}>У вас нет заказов</div>
          )}
        </div>
        <footer>
          <h2 className={style.footer_text}>Итого: {orderSum} руб</h2>
        </footer>
      </div>
    </div>
  );
};
