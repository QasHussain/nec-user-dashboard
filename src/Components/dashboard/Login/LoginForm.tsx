import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { FormInstance } from "antd/lib/form";
import styles from "./Login.module.scss";

interface LoginFormProps {
  onLogin: () => void;
  form: FormInstance;
}

const LoginForm = ({ onLogin, form }: LoginFormProps) => {
  return (
    <Form
      form={form}
      name="login_form"
      layout="vertical"
      onFinish={onLogin}
      className={styles.form}>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}>
        <Input
          type="email"
          allowClear
          style={{ fontSize: "2rem", padding: ".5rem 1rem" }}
          prefix={<UserOutlined />}
          placeholder="johndoe@gmail.com"
          autoComplete="username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message:
              "There was a problem! Please check your password and try again!",
          },
        ]}>
        <Input.Password
          allowClear
          style={{ fontSize: "2rem", padding: ".5rem 1rem" }}
          prefix={<LockOutlined />}
          placeholder="***********"
          autoComplete="current-password"
        />
      </Form.Item>

      <Form.Item shouldUpdate>
        {() => (
          <Button
            style={{
              display: "block",
              margin: "0 auto",
              padding: "0 20px 0 20px",
              width: "fit-content",
            }}
            type="primary"
            htmlType="submit"
            block={true}>
            Login
          </Button>
        )}
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
