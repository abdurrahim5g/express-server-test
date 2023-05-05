import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className="main-layout">
      <Navbar></Navbar>
      <div className="shadow p-1 my-6"></div>
      <Outlet></Outlet>
    </main>
  );
};

export default Main;
