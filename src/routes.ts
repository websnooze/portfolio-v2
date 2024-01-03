import { lazy } from "react";

import {
  HOME_ROUTE,
  WORKS_ROUTE,
  WORKS_ID_ROUTE,
  CONTACT_ROUTE,
} from "./modules/core/utils";

const Contact = lazy(() => import("./screens/pages/contact"));
const Home = lazy(() => import("./screens/pages/home"));
const Works = lazy(() => import("./screens/pages/works"));
const WorkId = lazy(() => import("./screens/pages/workId"));

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
];
