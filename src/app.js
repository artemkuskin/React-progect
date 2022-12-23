import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/loginForn/loginForm";
import { MainComponent } from "./components/MainComponent/MainComponent";
import { checkAuth, getSearch, loadMenu } from "./Store/slice";
import styles from "./styles";

const App = () => {
  const dispatch = useDispatch();
  const { isAuth, menu2, category } = useSelector((state) => state.appReducer);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuth());
      dispatch(getSearch({ name: "", category: category }));
      dispatch(getSearch());
    }
  }, []);

  if (!isAuth) {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }

  return menu2 ? (
    <MainComponent />
  ) : (
    <div className={styles.text}>isLoading.....</div>
  );
};

export default App;
