import { lazy } from "react";

import {
  HOME_ROUTE,
  WORKS_ROUTE,
  // WORKS_ID_ROUTE,
  CONTACT_ROUTE,
  LOGIN_ROUTE,
  DASH_ROUTE,
} from "./utils/consts";

const Dashboard = lazy(() => import("./screens/admin"));
const Contact = lazy(() => import("./screens/contact"));
const Home = lazy(() => import("./screens/home"));
const Login = lazy(() => import("./screens/login"));
const Works = lazy(() => import("./screens/works"));

export const basic_Routes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: WORKS_ROUTE,
    Component: Works,
  },
  {
    path: CONTACT_ROUTE,
    Component: Contact,
  },
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
  {
    path: DASH_ROUTE,
    Component: Dashboard,
  },
];
