import React from "react";
import "./style";

export const OrdersAdditeves = (props) => {
  return props.additives.map((fillings) => (
    <option key={fillings._id} value={fillings.key} disabled>
      {fillings.additive.name}
    </option>
  ));
};
