import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appSlice, getOrders } from "../../Store/slice";
import style from "./style";

export const GetOrders = () => {
  const dispatch = useDispatch();
  const { openModalOrders } = appSlice.actions;
  const { openModalOrder, orderSum, allOrders } = useSelector(
    (state) => state.appReducer
  );
  const [page, setPage] = useState(1)
  const closeModal = () => {
    dispatch(openModalOrders(false));
  };

  const nextPage = () => {
    setPage(page + 1)
    dispatch(getOrders({limit:1, page:page}));
  }

  const backPage = () => {
    setPage(paga - 1)
    dispatch(getOrders({limit:1, page:page}));
  }

  return (
    <div
      className={!openModalOrder ? style.fon : style.modalActive}
      id={style.fon}
    >
      <div className={style.content__ingredients} href="1">
        <div className={style.content__ingredients_title}>
          <span
            className={style.close_modal_window}
            onClick={() => closeModal()}
          >
            X
          </span>
          <h2 className={style.content__ingredients_title_text}>ВАШИ ЗАКАЗЫ</h2>
        </div>

        <div className={style.content__ingredients_price}>
          {allOrders.map((value) => {
            return (
              <div key={value._id}>
                {value.products.map((elem) => (
                  <p id={elem._id} key={elem._id}>
                    {elem.product.name} - {elem.quantity}
                    <select>
                      <option>НАЧИНКИ</option>
                      {elem.additives.length > 0 ? (
                        elem.additives.map((fillings) => (
                          <option
                            key={fillings._id}
                            value={fillings.key}
                            disabled
                          >
                            {fillings.additive.name}
                          </option>
                        ))
                      ) : (
                        <option disabled>НЕТ НАЧИНКИ</option>
                      )}
                      ;
                    </select>
                  </p>
                ))}
              </div>
            );
          })}
          <div>
            <button onClick={() => backPage()}>Назад</button>
            <button onClick={() => nextPage()}>Вперед</button>
            <p>Страница{page - 1}</p>
          </div>
        </div>
        <footer>
          <h2 className={style.footer_text}>Итого: {orderSum} руб</h2>
        </footer>
      </div>
    </div>
  );
};
