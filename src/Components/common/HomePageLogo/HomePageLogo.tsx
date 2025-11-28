import { FC } from "react";
import styles from "./HomePageLogo.module.scss";
import Logo from "@assets/NEC.png";

const HomePageLogo: FC = () => {
  return (
    <div className={styles.logoContainer}>
      <img className={styles.logoContainer_logo} alt="UserLogo" src={Logo} />
    </div>
  );
};

export default HomePageLogo;
