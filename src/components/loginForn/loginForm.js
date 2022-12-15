import React from "react";
import style from './style'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUser, registr } from "../../Store/slice";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={style.form}>
      <div className={style.elems}>
      <h2 className={style.text}>Авторизуйтесь</h2>
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
        type="text"
        placeholder="Password"
      />
      </div>
      <div className={style.buttons}>
      <button onClick={() => dispatch(getUser({ email, password }))}>
        Логин
      </button>
      <button onClick={() => dispatch(registr({ email, password }))}>
        Регистрация
      </button>
      </div>
      </div>
    </div>
  );
};
export default LoginForm;
