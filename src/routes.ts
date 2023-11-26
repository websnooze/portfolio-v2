import { lazy } from "react";

import {
  HOME_ROUTE,
  WORKS_ROUTE,
  WORKS_ID_ROUTE,
  CONTACT_ROUTE,
  LOGIN_ROUTE,
} from "./utils/consts";

const Contact = lazy(() => import("./screens/contact"));
const Home = lazy(() => import("./screens/home"));
const Login = lazy(() => import("./screens/login"));
const Works = lazy(() => import("./screens/works"));
const WorkId = lazy(() => import("./screens/workId"));

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
    path: WORKS_ID_ROUTE,
    Component: WorkId,
  },
  {
    path: CONTACT_ROUTE,
    Component: Contact,
  },
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];
