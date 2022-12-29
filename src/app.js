import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/LoginForn/LoginForm";
import { MainComponent } from "./components/MainComponent/MainComponent";
import { checkAuth } from "./Store/asyncThunk/checkAuth";
import { loadMenu } from "./Store/asyncThunk/loadMenu";
import { appSlice } from "./Store/mainSlice";
import "./styles.scss";

const App = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.appReducer.isAuth);
  const { load } = appSlice.actions;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuth());
      dispatch(loadMenu());
      setTimeout(() => {
        dispatch(load());
      }, 500);
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
