import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../../api/getMenu";
import { appSlice } from "../../Store/slice";
import style from "./style";

export const SideMenu = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.appReducer);
  const { setCategory } = appSlice.actions;

  const list = [
    { name: "pizza", translation: "Пицца" },
    { name: "burgers", translation: "Бургеры" },
    { name: "sandwiches", translation: "Сендвичи" },
    { name: "shaurma", translation: "Шаурма" },
    { name: "chicken", translation: "Курица" },
    { name: "salads", translation: "Салаты" },
    { name: "drinks", translation: "Напитки" },
  ];

  let result = list.map(function (item) {
    return (
      <p
        key={item.name}
        id={item.name}
        onClick={() => dispatch(setCategory(item.name))}
        className={category === item.name ? style.active : style.menu_link}
      >
        {item.translation}
      </p>
    );
  });
  return <div className={style.menu}>{result}</div>;
};
