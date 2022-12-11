import React from "react";
import style from './style'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, registr } from "../../Store/slice";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, menu2 } = useSelector((state) => state.appReducer);

  const dispatch = useDispatch();
  console.log(menu2);
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
