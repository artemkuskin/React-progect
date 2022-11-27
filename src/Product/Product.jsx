import React from "react"
import style from './style'



export  const Product = () => (
  <div className={style.contant_product}>
    <img src="{0}" className={style.item_img}></img>
    <div className={style.price_boll3}>
      <div className={style.price_boll}>
        <img src='#' className={style.img} id={"y"}></img>
      </div>
    </div>
    <div className={style.text}><p className={style.item_text} id={"b"}> {0}</p></div>
    <div className={style.link}> <a href="#" className={style.item_link}></a> </div>
    <p className={style.container_text}> Цена <strong className={style.price_one} id={"v"}> {0}</strong> руб</p>
    <p className={style.item_link_text}>КОЛИЧЕСТВО</p>
    <div id="{1000}">
      <button className={style.increase} id='inc{0}'> + </button>
      <input type={style.number}  className="input" readOnly></input>
      <button className={style.decrease} id='dec{0}'> - </button>

    </div>
    <button className={style.edit_button} id="button{0}"> В КОРЗИНУ  </button>

  </div>
)