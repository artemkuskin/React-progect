import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/loginForn/loginForm";
import { MainComponent } from "./components/MainComponent/MainComponent";
import { checkAuth, loadMenu } from "./Store/slice";
import styles from "./styles";

const App = () => {
  const dispatch = useDispatch();
  const { isAuth, menu2 } = useSelector((state) => state.appReducer);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuth());
    }
    dispatch(loadMenu());
  }, []);

  if (!isAuth ) {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }

  return (
  menu2 ? <MainComponent /> : '');

};

export default App;
