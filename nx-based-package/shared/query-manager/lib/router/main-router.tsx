import { FC, ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export interface IRouterProps {
  routes: {
    path: string;
    element: JSX.Element;
  }[];
}

export const MainRouter: FC<IRouterProps> = ({ routes }) => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          ></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
