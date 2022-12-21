import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appSlice } from "../../../Store/slice";
import style from "./style";

export const ResultCustomBurger = () => {
  const dispatch = useDispatch();
  const { elem, allFiling, modalSum } = useSelector(
    (state) => state.appReducer.modal
  );
  const [count, setCount] = useState(1);
  const { addBasket: getBasket, updateSum, openModal } = appSlice.actions;

  const elemBasket = {
    name: elem.name,
    id: elem._id,
    price: modalSum === 0 ? elem.price : modalSum,
    amount: count,
    filling: allFiling,
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const addBasket = () => {
    dispatch(getBasket(elemBasket));
    dispatch(updateSum());
    dispatch(openModal(false));
  };
  return (
    <div>
      <div className="price-popup2">
        <div className={style.price_boll2}>
          <div className={style.price_boll}>
            <img
              src={`${process.env.URL}/${elem.image}`}
              className={style.content__ingredients_img}
            />{" "}
          </div>
        </div>
      </div>

      <div className={style.content__ingredients_price_itog}>
        <h1 className={style.title_itog}>Ваш сендвич готов</h1>
        <div className={style.block_side}>
          <p>
            Размер:
            <strong id="sizes-name">
              {allFiling.sizes !== undefined ? allFiling.sizes.name : "15см"}
            </strong>
          </p>
          <p>
            Хлеб:
            <strong id="breads-name">
              {allFiling.breads !== undefined
                ? allFiling.breads.name
                : "Белый-итальянский"}
            </strong>
          </p>
          <p>
            Овощи:
            {allFiling.vegetables?.map((item) => (
              <strong id="veget-name" key={item._id}>
                {item !== undefined ? item.name : "Heт"},&nbsp;
              </strong>
            ))}
          </p>
          <p>
            Соусы:
            <strong id="sous-name">
              {allFiling.sauces !== undefined ? allFiling.sauces.name : "Heт"}
            </strong>
          </p>
          <p>
            Начинка:
            <strong id="fill-name">
              {allFiling.fillings !== undefined
                ? allFiling.fillings.name
                : "Heт"}
            </strong>
          </p>

          <h3 id={style.name}>{elem.name}</h3>
        </div>
        <div className={style.counter}>
          <button className={style.increase} onClick={() => increment()}>
            {" "}
            +{" "}
          </button>
          <input type="number" value={count} className={style.input} readOnly />
          <button className={style.decrease} onClick={() => decrement()}>
            {" "}
            -{" "}
          </button>{" "}
        </div>
        <button className={style.edit_button_modal} onClick={() => addBasket()}>
          В КОРЗИНУ
        </button>
      </div>
    </div>
  );
};
