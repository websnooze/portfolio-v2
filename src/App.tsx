import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";

import * as Layouts from "./screens/layouts";
import { basic_Routes } from "./routes";
import { ScrollToTop } from "./modules/core/common";
import NotFound from "./screens/pages/error";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <ScrollToTop />
        <ToastContainer
          theme="dark"
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route path="/" element={<Layouts.Core />}>
            {basic_Routes.map(({ path, Component }) => (
              <Route
                key={path}
                path={path}
                element={
                  <Suspense fallback={null}>
                    <Component />
                  </Suspense>
                }
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default App;
