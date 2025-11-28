import Logo from "@assets/NEC.png";
import { Form } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import LoginForm from "./LoginForm";
import { RoutePathsConfig } from "@src/Components/common/SideBar/utils/links";

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate(RoutePathsConfig.homePage);
  };

  return (
    <main className={styles.container}>
      <section className={styles.auth}>
        <img width={450} src={Logo} alt="Logo" />
        <h1 className={styles.auth_heading}>Hello!</h1>
        <p className={styles.auth_message}>
          Welcome to your NEC Dashboard! Please enter your email address below!
          (Type anything into the field so long as there is an @ included!)
        </p>
        <LoginForm onLogin={handleLogin} form={form} />
      </section>
    </main>
  );
};

export default Login;
