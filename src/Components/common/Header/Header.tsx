import { observer } from "mobx-react";
import styles from "./Header.module.scss";
import { UserOutlined } from "@ant-design/icons";
import Logo from "@assets/NEC.png";

import { Avatar, MenuProps, Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import { RoutePathsConfig } from "../SideBar/utils/links";

const Header = observer(() => {
  const navigate = useNavigate();

  const handleItemClick = async (key: string) => {
    if (key === "0") {
      navigate(RoutePathsConfig.login);
    }
  };

  const items: MenuProps["items"] = [
    {
      label: "Log Out",
      key: "0",
      onClick: () => handleItemClick("0"),
    },
  ];
  return (
    <header className={styles.header}>
      <img src={Logo} alt="VenueNow Logo" className={styles.logo} />

      <Dropdown menu={{ items }} trigger={["click"]}>
        <a className={styles.account} onClick={(e) => e.preventDefault()}>
          <Avatar
            size={42}
            style={{ backgroundColor: "rgb(52 62 89)" }}
            icon={<UserOutlined />}
          />
        </a>
      </Dropdown>
    </header>
  );
});

export default Header;
