import { createBrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

const router = [
  {
    path: "/",
    element: <Home />,
  },
];

const routerBrowser = createBrowserRouter(router);

export const Router = () => {
  return (
    <Routes>
      {router.map((route, i) => (
        <Route key={i} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
