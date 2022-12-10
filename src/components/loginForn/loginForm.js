import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, registr } from "../../Store/slice";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useSelector((state) => state.appReducer);

  const dispatch = useDispatch();
  console.log(user);
  return (
    <div>
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
      <button onClick={() => dispatch(getUser({ email, password }))}>
        Логин
      </button>
      <button onClick={() => dispatch(registr({ email, password }))}>
        Регистрация
      </button>
    </div>
  );
};
export default LoginForm;
