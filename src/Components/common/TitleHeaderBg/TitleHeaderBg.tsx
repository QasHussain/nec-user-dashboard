import { FC } from "react";
import styles from "./TitleHeaderBg.module.scss";

interface ITitleProps {
  title: string;
  background: string;
}

const TitleHeaderBg: FC<ITitleProps> = ({ title, background }) => {
  return (
    <div className={styles.container} style={{ background: background }}>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default TitleHeaderBg;
