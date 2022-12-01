import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "./api/getMenu";
import { Basket } from "./components/Basket/Basket";
import { ModalBody } from "./components/Modal/ModalBody/ModalBody";
import { Product } from "./components/Product/Product";
import { SideMenu } from "./components/SideMenu/SideMenu";
import { loadMenu } from "./Store/slice";
import styles from "./styles.scss";

const App = () => {
  const [menu, setMenu] = useState([]);
  const { menu2 } = useSelector((state) => state.appReducer);
// создать экен "загрузить продукты", запрос к АПИ будет в нем, вызывать через диспатч

  useEffect(() => {
    const getMenuApi = async () => {
      const menu = await getMenu();
      setMenu(menu.menu);
    };

    getMenuApi();
  }, []);

  console.log(menu);

//   const dispatch = useDispatch()
// dispatch(loadMenu())
// console.log(menu2);



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
