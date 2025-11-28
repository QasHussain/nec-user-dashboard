import Container from "@src/Components/common/Layout/container/Container";
import { Divider } from "antd";
import { FC } from "react";
import styles from "./HomePage.module.scss";

import HomePageLogo from "@src/Components/common/HomePageLogo/HomePageLogo";

import HomeButton from "@src/Components/common/HomeButton/HomeButton";
import UsersAddedGraph from "@src/Components/dashboard/Home/PeakContainerUse/UsersAddedGraph";

const HomePage: FC = () => {
  const buttonMap = [
    {
      color:
        "linear-gradient(135deg, rgb(171, 220, 255) 10%, rgb(3, 150, 255) 100%)",
      text: "Add User",
      link: "add-user",
    },
    {
      color:
        "linear-gradient(135deg, rgb(42, 250, 223) 10%, rgb(76, 131, 255) 100%)",
      text: "User List",
      link: "user-list",
    },
  ];

  return (
    <Container>
      <HomePageLogo />
      <Divider />
      <p className={styles.homeTitle}>
        Welcome to your Home page! Use the quick buttons or check out your
        analytics below!
      </p>
      <div className={styles.quickButtons}>
        {buttonMap.map((button) => (
          <HomeButton
            background={button.color}
            buttonContent={button.text}
            navLink={button.link}
          />
        ))}
      </div>

      <p className={styles.graphTitle}> Users added over last month:</p>

      <UsersAddedGraph />
    </Container>
  );
};

export default HomePage;
