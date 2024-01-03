import { Outlet } from "react-router-dom";

import Topbar from ".";
import Footer from ".";

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
