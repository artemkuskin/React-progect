import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { appSlice, modalCategorySlice } from "../../../Store/slice";
import style from "./style";

const categorys = [
  { name: "sizes", translation: "Размер", id: 0.1 },
  { name: "breads", translation: "Хлеб", id: 0.2 },
  { name: "vegetables", translation: "Овощи", id: 0.3 },
  { name: "sauses", translation: "Соусы", id: 0.4 },
  { name: "fillings", translation: "Начинка", id: 0.5 },
  { name: "result", translation: "Итог", id: 0.6 },
];

export const ModalCategory = () => {
  const dispatch = useDispatch();
  const { changeModalCategory } = appSlice.actions;
  const { modal } = useSelector((state) => state.appReducer);

  const changeCategory = (name) => {
    dispatch(changeModalCategory(name));
  };

  const result = categorys.map(function (item) {
    return (
      <a
        key={item.name}
        id={item.name}
        onClick={() => changeCategory(item.name)}
        className={
          modal.category === item.name ? style.active : style.categories_link
        }
      >
        {item.translation}
      </a>
    );
  });
  return <div className={style.categories}>{result}</div>;
};
