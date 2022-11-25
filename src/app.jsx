import React from "react";
import { Basket } from "./Basket/Basket";
import { SideMenu } from "./sideMenu/SideMenu";
import styles from "./styles.scss";



const App =  () => {
  return (
    <div>
      <h1 className="title">СДЕЛАЙТЕ ЗАКАЗ НАПРЯМУЮ ИЗ РЕСТОРАНА</h1>
      <div className="contant">
        <div className="block">
          <SideMenu />
          <Basket />
        </div>
        <div id="container" className="pizza"></div>
        <div id="fon" className="fon"></div>
      </div>
    </div>
  );
};


export default App;
