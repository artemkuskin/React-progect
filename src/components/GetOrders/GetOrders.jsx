import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appSlice, getOrders } from "../../Store/slice";
import style from "./style";

export const GetOrders = () => {
  const dispatch = useDispatch();
  const { openModalOrders } = appSlice.actions;
  const { productOrder, openModalOrder } = useSelector(
    (state) => state.appReducer
  );

  useEffect(() => {
    dispatch(getOrders());
  }, []);

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
          <span
            className={style.close_modal_window}
            onClick={() => closeModal()}
          >
            X
          </span>
          <h2 className={style.content__ingredients_title_text}>ВАШИ ЗАКАЗЫ</h2>
        </div>

        <div className={style.content__ingredients_price}>
          {productOrder.length > 0 ? (
            productOrder.map((elem) => {
              return (
                <div key={elem._id}>
                  <p className="product_name" id={elem._id}>
                    {elem.product.name} - {elem.quantity}
                    <select name="select">
                      <option value="asd">НАЧИНКИ</option>
                      {elem.additives.length > 0 ? (
                        elem.additives.map((fbb) => (
                          <option key={fbb.key} value={fbb.key} disabled>
                            {fbb.additive.name}
                          </option>
                        ))
                      ) : (
                        <option value="asd" disabled>
                          НЕТ НАЧИНКИ
                        </option>
                      )}
                      ;
                    </select>
                  </p>
                </div>
              );
            })
          ) : (
            <div>ЗАКАЗОВ НЕТ</div>
          )}
        </div>
      </div>
    </div>
  );
  //   <button onClick={() => getPrduct()}>getOrders</button>;
};
