import { FC } from "react";
import styles from "./HomeButton.module.scss";

import { useNavigate } from "react-router-dom";

interface IHomeBtnProps {
  background: string;
  buttonContent: string;
  navLink: string;
}

const HomeButton: FC<IHomeBtnProps> = ({
  background,
  buttonContent,
  navLink,
}) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`${navLink}`);
  };
  return (
    <div
      className={styles.btnContainer}
      style={{ background: background }}
      onClick={onClick}>
      <span className={styles.btnContainer_content}>{buttonContent}</span>
    </div>
  );
};

export default HomeButton;
