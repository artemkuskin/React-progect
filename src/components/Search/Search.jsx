import React from "react";
import style from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../../Store/slice";
import { useState } from "react";

export const Search = () => {
  const dispatch = useDispatch();
  const { searchElem, category } = useSelector((state) => state.appReducer);
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
              search()
            }
          }}
        />
        <datalist id="character"></datalist>
      </p>
      <button onClick={() => search()} className={style.search_button}>
        Поиск
      </button>
    </div>
  );
};
