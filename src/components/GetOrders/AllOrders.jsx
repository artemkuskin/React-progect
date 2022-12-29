import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../Store/asyncThunk/getOrders";
import { OrdersProducts } from "./OrdersProducts";

import style from "./style";

export const AllOrders = (props) => {
  const dispatch = useDispatch();
  const { maxPageOrder } = useSelector((state) => state.appReducer);
  const [page, setPage] = useState(1);

  const nextPage = () => {
    if (page >= maxPageOrder) {
      setPage(maxPageOrder);
    } else {
      setPage(page + 1);
      dispatch(getOrders({ limit: 1, page: page + 1 }));
    }
  };

  const backPage = () => {
    if (page <= 1) {
      setPage(1);
    } else {
      setPage(page - 1);
      dispatch(getOrders({ limit: 1, page: page - 1 }));
    }
  };

  return props.allOrders.map((value) => {
    return (
      <div key={value._id}>
        <OrdersProducts value={value.products} />
        <div>
          <button onClick={backPage}>Назад</button>
          <button onClick={nextPage}>Вперед</button>
          <p className={style.text_page}>{page}</p>
        </div>
      </div>
    );
  });
};
