import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/dashboard/Login/Login.tsx";
import { RoutePathsConfig } from "./Components/common/SideBar/utils/links.tsx";
import Dashboard from "./Dashboard.tsx";
import { UsersProvider } from "./Components/stores/UsersContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UsersProvider>
        <Routes>
          <Route path={RoutePathsConfig.dashboard} element={<Dashboard />} />
          <Route path={RoutePathsConfig.login} element={<Login />} />
        </Routes>
      </UsersProvider>
    </BrowserRouter>
  </StrictMode>
);
