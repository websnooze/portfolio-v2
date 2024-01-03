import { Outlet } from "react-router-dom";

import { Topbar, Footer } from "./components";

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
