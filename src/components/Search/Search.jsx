import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { appSlice, getSearch } from "../../Store/slice";

export const Search = () => {
  const dispatch = useDispatch();
  const { searchElem } = useSelector((state) => state.appReducer);
  const {
    addBasket: getBasket,
    modalElem,
    updateSum,
    changeModalCategory,
    openModal,
  } = appSlice.actions;

  const search = () => {
    console.log(searchElem);
  };

  return (
    <div>
      <p>Поиск</p>
      <p>
        <input list="character" />
        <datalist id="character">
          {searchElem.map((fillings) => (
            <option key={fillings._id} value={fillings.name} ></option>
          ))}
        </datalist>
      </p>
      <button onClick={() => search()}>Поиск</button>
    </div>
  );
};
