import React, { useEffect } from "react";
import { getMenu } from "./api/getMenu";
import { Basket } from "./Basket/Basket";
import { Product } from "./Product/Product";
import { SideMenu } from "./sideMenu/SideMenu";
import styles from "./styles.scss";



const App =  () => {

  return (
    <div>
      <h1 className={styles.title}>СДЕЛАЙТЕ ЗАКАЗ НАПРЯМУЮ ИЗ РЕСТОРАНА</h1>
      <div className={styles.contant}>
        <div className={styles.block}>
          <SideMenu />
          <Basket />
        </div>
        <div id={styles.container} className="pizza">
          <Product/>

        </div>
        <div id="fon" className="fon"></div>
      </div>
    </div>
  );
};


export default App;
