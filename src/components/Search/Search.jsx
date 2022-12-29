import React from "react";
import style from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getSearch } from "../../Store/asyncThunk/getSearch";

export const Search = () => {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.appReducer);
  const [name, setName] = useState("");

  const search = () => {
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
          onKeyDown={(ev) => {
            if (ev.keyCode == 13) {
              search();
            }
          }}
        />
      </p>
      <button onClick={search} className={style.search_button}>
        Поиск
      </button>
    </div>
  );
};
