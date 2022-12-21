import React from "react";
import style from "./style";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loadMenu, login, registr } from "../../Store/slice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const addUser = () => {
    dispatch(login({ email, password }));
    dispatch(loadMenu());
  };

  const registration = () => {
    dispatch(registr({ email, password }));
    dispatch(loadMenu());
  };

  return (
    <div className={style.form}>
      <div className={style.elems}>
        <h2 className={style.text}>Login Form</h2>
        <div className={style.inputs}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className={style.buttons}>
          <button className={style.btn} onClick={() => addUser()}>
            Логин
          </button>
          <button className={style.btn} onClick={() => registration()}>
            Регистрация
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
