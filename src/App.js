import React from "react";
import Header from "./View/Header/Header";
import Home from "./components/slider/Home";
import { Route, Routes } from "react-router-dom";
import Network from "./View/NetworkLog/Network";
import Notification from "./View/Notification/Notification";
import SignIn from "./View/SignIn/SignIn";
import "./App.css"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/network-log" element={<Network />} />
        <Route exact path="/notification" element={<Notification />} />
        <Route exact path="/sign-in" element={<SignIn />} />

      </Routes>
    </>
  );
};

export default App;
