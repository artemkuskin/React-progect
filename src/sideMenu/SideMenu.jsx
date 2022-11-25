import React from "react";
import style from "./style";

export const SideMenu = (props) => {
  const list = [
    { name: "pizza", translation: 'Пицца'},
    { name: "burgers", translation: 'Бургеры'},
    { name: "sandwiches", translation: 'Сендвичи'},
    { name: "shaurma", translation: 'Шаурма'},
    { name: "chicken", translation: 'Курица'},
    { name: "salads", translation: 'Салаты'},
    { name: "drinks", translation: 'Напитки'},
  ];

  let result = list.map(function (item) {
    return (
      <p key={item.name} onClick={(()=> console.log())} className={style.menu_link}>
        {item.translation} 
      </p>
    );
  });
  return <div className={style.menu}>{result}</div>;
};
