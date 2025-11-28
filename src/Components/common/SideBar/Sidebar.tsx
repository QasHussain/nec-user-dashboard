import { Menu } from "antd";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { MenuItems } from "./utils/links";
import Aside from "../Layout/layout/Aside";

import { NotificationOutlined } from "@ant-design/icons";
import { MenuItem } from "../SideBarUtils/types";

const defaultFontSize = "1.3rem";

const Sidebar = observer(() => {
  return (
    <Aside isCollapsible={false}>
      <Menu
        style={{
          height: "100%",
          padding: "1rem",
          borderRadius: "1rem",
          color: "#e3e3e3",
        }}>
        {renderMenuItem(
          MenuItems.homePage,
          "home-link",
          defaultFontSize,
          "#e3e3e3"
        )}

        <Menu.ItemGroup style={{ margin: "1rem 0" }} title="Management">
          <Menu.SubMenu
            data-testid-cy="client-management-submenu"
            style={{ fontSize: defaultFontSize }}
            key="Client"
            title={
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#e3e3e3",
                }}>
                <NotificationOutlined style={{ color: "#e3e3e3" }} />
                <span>Add User</span>
              </span>
            }>
            {renderMenuItem(MenuItems.addUser, "Add User")}
            {renderMenuItem(MenuItems.userList, "User List")}
          </Menu.SubMenu>
        </Menu.ItemGroup>
      </Menu>
    </Aside>
  );
});

export default Sidebar;

const renderMenuItem = (
  menuItem: MenuItem,
  testId = "menu-item",
  fontSize = "1.15rem",
  subMenuFontColor = "#e3e3e3"
) => {
  return (
    <Menu.Item key={menuItem.path}>
      <Link
        style={{ color: subMenuFontColor }}
        to={menuItem.path}
        data-testid-cy={testId}>
        {menuItem.icon}
        <span style={{ fontSize }}>{menuItem.text}</span>
      </Link>
    </Menu.Item>
  );
};
