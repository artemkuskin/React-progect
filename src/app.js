import React, { useEffect, useState } from "react";
import { getMenu } from "./api/getMenu";
import { Basket } from "./Basket/Basket";
import { ModalBody } from "./Modal/ModalBody";
import { Product } from "./Product/Product";
import { SideMenu } from "./sideMenu/SideMenu";
import styles from "./styles.scss";

const App = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    const getMenuApi = async () => {
      const menu = await getMenu();
      setMenu(menu.menu);
    };

    getMenuApi();
  }, []);

  return (
    <div>
      <h1 className={styles.title}>СДЕЛАЙТЕ ЗАКАЗ НАПРЯМУЮ ИЗ РЕСТОРАНА</h1>
      <div className={styles.contant}>
        <div className={styles.block}>
          <SideMenu />
          <Basket />
        </div>
        <div id={styles.container} className="pizza">
          {menu.map((product) => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
        <ModalBody />
      </div>
    </div>
  );
};

export default App;
