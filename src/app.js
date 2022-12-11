import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { Basket } from "./components/Basket/Basket";
import LoginForm from "./components/loginForn/loginForm";
import { MainComponent } from "./components/MainComponent/MainComponent";
import { ModalBody } from "./components/Modal/ModalBody/ModalBody";
import { Product } from "./components/Product/Product";
import { SideMenu } from "./components/SideMenu/SideMenu";
import MenuServices from "./services/MenuServices";
import { checkAuth,  loadMenu,  logout } from "./Store/slice";
import styles from "./styles.scss";

const App = () => {
 // const [menu, setMenu] = useState([]);
 const dispatch = useDispatch()
  const { isAuth, user, menu2 } = useSelector((state) => state.appReducer);
// создать экен "загрузить продукты", запрос к АПИ будет в нем, вызывать через диспатч
const [asd, setAsd] = useState([])


  useEffect(() => {
    if(localStorage.getItem('token')) {
      dispatch(checkAuth())
      
      console.log(22222222222222222222222222222);
    }

  }, []);
  const logout2 = () =>  {
    dispatch(logout())
  }

  const getMenu = () => {
    dispatch(loadMenu())
    console.log(menu2);
  }

  const getUser = async () =>  {
    try {
      const response = await MenuServices.fetchMenu()
      setAsd(response.data)
      if (asd.length >= 1) {

        console.log(asd);
      }
     if(asd) {
     }
    } catch (e) {
     console.log(e);
    }
   }

  // console.log(menu);

// dispatch(loadMenu())
// console.log(menu2);


if (!isAuth) {
  return (
    <LoginForm />
  )
}  

  return (
    <MainComponent />
/* <div>
<h1>{isAuth ? `Пользователь авторизован ${user.email}` : 'АВТОРИЗУЙТЕСЬ'}</h1>
      <button onClick={() => logout2()}>Выйти</button>
      <button onClick={() => getUser()}>Меню</button>
      {/* <div>
        <button onClick={getUser}>Получить пользователей</button>
      </div>
      {users.map(user => 
        <div key={user.email}>{user.email}</div>
        )} */
//</div> */}

      
  //   <div>
  //     <h1 className={styles.title}>СДЕЛАЙТЕ ЗАКАЗ НАПРЯМУЮ ИЗ РЕСТОРАНА</h1>
  //     <div className={styles.contant}>
  //       <div className={styles.block}>
  //         <SideMenu />
  //         <Basket />
  //       </div>
  //       <div id={styles.container} className="pizza">
  //         {menu.map((product) => {
  //           return <Product product={product} key={product.id} />;
  //         })}
  //       </div>
  //       <ModalBody />
  //     </div>
  //   </div>
  // );
  )
};

export default App;
