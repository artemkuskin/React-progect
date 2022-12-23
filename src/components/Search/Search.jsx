import React from "react";
import style from "./style";
import { useDispatch, useSelector } from "react-redux";
import { appSlice, getSearch } from "../../Store/slice";
import { useState } from "react";

export const Search = () => {
  const dispatch = useDispatch();
  const { searchElem, category } = useSelector((state) => state.appReducer);
  const [name, setName] = useState("");

  const search = () => {
    console.log(searchElem);
    dispatch(getSearch({ name: name, category: category }));
  };

  return (
    <div className={style.search_contant}>
      <p>
        <input
          list="character"
          placeholder="Найти"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <datalist id="character">
          {/* {searchElem.map((fillings) => (
            <option key={fillings._id} value={fillings.name} ></option>
          ))} */}
        </datalist>
      </p>
      <button onClick={() => search()} className={style.search_button}>Поиск</button>
    </div>
  );
};
