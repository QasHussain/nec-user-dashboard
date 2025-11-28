import { Route, Routes, useLocation } from "react-router-dom";
import Main from "../Components/common/Main/Main";
import { RoutePathsConfig } from "@src/Components/common/SideBar/utils/links";
import HomePage from "@src/Pages/HomePage";
import AddUser from "@src/Pages/Management/Users/AddUser";
import UserList from "@src/Pages/Management/Users/UserList";

const RoutesProvider = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Main />}>
        <Route index element={<HomePage />} />

        <Route path={RoutePathsConfig.userList} element={<UserList />} />

        <Route path={RoutePathsConfig.addUser} element={<AddUser />} />
      </Route>
    </Routes>
  );
};

export default RoutesProvider;
