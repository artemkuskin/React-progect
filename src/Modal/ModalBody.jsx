import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../api/getMenu";
import { ModalCategory } from "../ModalCategory/ModalCategory";
import { ModalComponent } from "../ModalComponent/ModalComponent";
import { modalCategorySlice, openModalSlice } from "../redux/reducers";
import style from "./style.scss";

export const ModalBody = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    const getMenuApi = async () => {
      const menu = await getMenu();
      setMenu(menu.menu2);
    };

    getMenuApi();
  }, []);

  console.log(menu);
  const dispatch = useDispatch();
  const { openModal } = openModalSlice.actions;
  const { modal } = useSelector((state) => state.openModalReducer);
  // console.log(deleteBasket());

  return (
    <div id={style.fon} className={!modal.open ? style.fon : style.modalActive}>
      <div className={style.content__ingredients} href="1">
        <div className={style.content__ingredients_title}>
          <span className={style.close_modal_window} onClick={() => {dispatch(openModal(false))}}>X</span>
          <h2 className={style.content__ingredients_title_text}>СОБЕРИТЕ СВОЙ СЕНДВИЧ</h2>
        </div>
        <ModalCategory />
        {/* <div className={style.content__ingredients_button}>
          <button className={style.content__ingredients_button_next}> ВПЕРЕД </button>
          <button className={style.content__ingredients_button_next_back}>НАЗАД</button>
        </div> */}
        <div id={style.content__ingredients_price} className="sizes">
          {menu.map((product) => {
            return <ModalComponent product={product} key={product.id} />;
          })}
        </div>
        <footer>
          <h2 className={style.footer_text}>Итого: 0 руб</h2>
        </footer>
      </div>
    </div>
  );
};
