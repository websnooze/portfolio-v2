import { Outlet } from "react-router-dom";

import Topbar from "./topbar";
import Footer from "./footer";

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
