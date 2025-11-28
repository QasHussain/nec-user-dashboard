import { observer } from "mobx-react";
import { Outlet } from "react-router-dom";

import styles from "./Main.module.scss";

const Main = observer(() => {
  return (
    <main className={styles.main}>
      <Outlet />
    </main>
  );
});

export default Main;
