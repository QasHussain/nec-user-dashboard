import { Menu } from "antd";
import { Link } from "react-router-dom";
import { MenuItem } from "./types";

export const renderMenuItem = (
  menuItem: MenuItem,
  fontSize = "1.5rem",
  subMenuFontColor = "#222"
) => (
  <Menu.Item key={menuItem.path || "fallbackKey"}>
    <Link style={{ color: subMenuFontColor }} to={menuItem.path}>
      {menuItem.icon}
      <span style={{ fontSize: fontSize }}>{menuItem.text}</span>
    </Link>
  </Menu.Item>
);

const capitalizeAndSeparateOnCaps = (string: string): string | undefined => {
  if (!string || typeof string !== "string") return;

  return string
    .split("")
    .map((char, index) => {
      if (index === 0) {
        return char.toUpperCase();
      } else if (char === char.toUpperCase()) {
        return ` ${char}`;
      }
      return char;
    })
    .join("");
};

export const generateMenuItems = <T extends Record<keyof T, string>>(
  routes: T,
  icons = {}
) => {
  if (!routes) {
    return {};
  }

  const menuItems = {} as Record<keyof T, MenuItem>;

  for (const route in routes) {
    menuItems[route] = {
      path: routes[route],
      icon: icons[route as keyof typeof icons] || null,
      text: capitalizeAndSeparateOnCaps(route),
    };
  }

  return menuItems;
};
