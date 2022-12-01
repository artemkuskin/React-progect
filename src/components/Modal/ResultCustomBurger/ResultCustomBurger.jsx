import React from "react";
import { useSelector } from "react-redux";
import style from "./style";

export const ResultCustomBurger = () => {
  const { elem, allFiling } = useSelector((state) => state.appReducer.modal);
  console.log(elem);
  return (
    <div>
      <div className="price-popup2">
        <div className={style.price_boll2}>
          <div className={style.price_boll}>
            <img
              src={`http://localhost:7000/${elem.category}/${elem.image}`}
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
              {allFiling.breads !== undefined ? allFiling.breads.name : "Белый-итальянский"}
            </strong>
          </p>
          <p>
            Овощи:
            <strong id="veget-name">
              {allFiling.vegetables !== undefined ? allFiling.vegetables.name : "Heт"}
            </strong>
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
              {allFiling.fillings !== undefined ? allFiling.fillings.name : "Heт"}
            </strong>
          </p>

          <h3 id={style.name}>{elem.name}</h3>
        </div>
        <div className={style.counter}>
          <button className={style.increase}>
            {" "}
            +{" "}
          </button>
          <input type="number" value={elem.count} className={style.input} readOnly />
          <button className={style.decrease}>
            {" "}
            -{" "}
          </button>{" "}
        </div>
        <button className={style.edit_button_modal}>
          В КОРЗИНУ
        </button>
      </div>
    </div>
  );
};
