import React from "react";
import style from "./style";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loadMenu } from "../../Store/asyncThunk/loadMenu";
import { registration } from "../../Store/asyncThunk/registration";
import { login } from "../../Store/asyncThunk/login";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    dispatch(login({ email, password }));
    dispatch(loadMenu());
  };

  const registrationUser = () => {
    dispatch(registration({ email, password }));
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
          <button className={style.btn} onClick={() => loginUser()}>
            Логин
          </button>
          <button className={style.btn} onClick={() => registrationUser()}>
            Регистрация
          </button>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
