import React, { useEffect, useState } from "react";
import { getMenu } from "../api/getMenu";
import style from "./style";

export const SideMenu = () => {
  const list = [
    { name: "pizza", translation: 'Пицца'},
    { name: "burgers", translation: 'Бургеры'},
    { name: "sandwiches", translation: 'Сендвичи'},
    { name: "shaurma", translation: 'Шаурма'},
    { name: "chicken", translation: 'Курица'},
    { name: "salads", translation: 'Салаты'},
    { name: "drinks", translation: 'Напитки'},
  ];

const [menu, setMenu] = useState([])
useEffect( () => {
 a()
 console.log(1);
},[])
const a = async ()  => {
  const menu = await getMenu()
  setMenu(menu)
}

  let result = list.map(function (item) {
    return (
      <p key={item.name} onClick={(()=> console.log(1))} className={style.menu_link}>
        {item.translation} 
      </p>
    );
  });
  return <div className={style.menu}>{result}</div>;
};
