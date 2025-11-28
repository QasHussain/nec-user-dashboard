import { HomeOutlined, PlusCircleOutlined } from "@ant-design/icons";

import { generateMenuItems } from "../../SideBarUtils/SideBarUtils";
import { MenuItem } from "../../SideBarUtils/types";

type ValueOf<T> = T[keyof T];

export type RoutePath = ValueOf<typeof RoutePathsConfig>;

export const RoutePathsConfig = {
  login: "/",
  dashboard: "/dashboard/*",
  homePage: "/dashboard",
  addUser: "add-user",
  userList: "user-list",
} as const;

const iconStyles = { fontSize: "1.7rem" };

const IconMap = {
  homePage: <HomeOutlined style={iconStyles} />,
  godPage: <HomeOutlined style={iconStyles} />,
  addUser: <PlusCircleOutlined style={iconStyles} />,
  userList: <PlusCircleOutlined style={iconStyles} />,
};

export const MenuItems: Record<string, MenuItem> = generateMenuItems(
  RoutePathsConfig,
  IconMap
);
