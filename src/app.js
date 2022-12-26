import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/loginForn/loginForm";
import { MainComponent } from "./components/MainComponent/MainComponent";
import { checkAuth, getSearch, loadMenu } from "./Store/slice";
import styles from "./styles";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.appReducer.isAuth);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuth());
      // dispatch(getSearch({ name: "", category: category }));
      dispatch(loadMenu());
      // dispatch(getSearch());
    }
  }, []);

  if (!isAuth) {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }

  return <MainComponent />;
};

export default App;
