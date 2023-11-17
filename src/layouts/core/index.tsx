import { Outlet } from "react-router-dom";

import { Topbar, Footer } from "./components";

import "./css/module.layouts.css";

const CoreLayout = () => {
  return (
    <>
      <Topbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default CoreLayout;
