import React, { useEffect, useState } from "react";
import { getMenu } from "./api/getMenu";
import { Basket } from "./Basket/Basket";
import { Product } from "./Product/Product";
import { SideMenu } from "./sideMenu/SideMenu";
import styles from "./styles.scss";



const App =  () => {

  const [menu, setMenu] = useState([])
useEffect( () => {
  getMenuApi()
},[])
const getMenuApi = async ()  => {
  const menu = await getMenu()
  setMenu(menu)
}

  return (
    <div>
      <h1 className={styles.title}>СДЕЛАЙТЕ ЗАКАЗ НАПРЯМУЮ ИЗ РЕСТОРАНА</h1>
      <div className={styles.contant}>
        <div className={styles.block}>
          <SideMenu />
          <Basket />
        </div>
        <div id={styles.container} className="pizza">
          {menu.map(product => 
            <Product product={product} key={product.id}/> )}

        </div>
        <div id={styles.fon} className="fon"></div>
      </div>
    </div>
  );
};


export default App;
