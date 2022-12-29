import React from "react";
import { OrdersAdditeves } from "./OredersAdditeves";
import "./style";

export const OrdersProducts = (props) => {
  return (
    <div>
      {props.value.map((elem) => (
        <p id={elem._id} key={elem._id}>
          {elem.product.name} - {elem.quantity}
          <select>
            <option>НАЧИНКИ</option>
            {elem.additives.length > 0 ? (
              <OrdersAdditeves additives={elem.additives} />
            ) : (
              <option disabled>НЕТ НАЧИНКИ</option>
            )}
            ;
          </select>
        </p>
      ))}
    </div>
  );
};
