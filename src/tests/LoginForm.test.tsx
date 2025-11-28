import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "antd";
import LoginForm from "@src/Components/dashboard/Login/LoginForm";

const renderLoginForm = (onLogin = vi.fn()) => {
  const Wrapper = () => {
    const [form] = Form.useForm();
    return <LoginForm form={form} onLogin={onLogin} />;
  };

  const utils = render(<Wrapper />);

  return {
    onLogin,
    user: userEvent.setup(),
    ...utils,
  };
};

describe("LoginForm", () => {
  it("renders username, password and login button", () => {
    const { getByPlaceholderText, getByRole } = renderLoginForm();

    expect(getByPlaceholderText(/johndoe@gmail.com/i)).toBeInTheDocument();

    expect(getByPlaceholderText("***********")).toBeInTheDocument();

    expect(getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  it("shows validation messages when submitting empty form", async () => {
    const { user, getByRole, findByText } = renderLoginForm();

    await user.click(getByRole("button", { name: /login/i }));

    expect(
      await findByText(/please input your username!/i)
    ).toBeInTheDocument();

    expect(
      await findByText(
        /There was a problem! Please check your password and try again!/i
      )
    ).toBeInTheDocument();
  });

  it("calls onLogin when form is valid", async () => {
    const onLogin = vi.fn();
    const { user, getByPlaceholderText, getByRole } = renderLoginForm(onLogin);

    await user.type(
      getByPlaceholderText(/johndoe@gmail.com/i),
      "johndoe@gmail.com"
    );
    await user.type(getByPlaceholderText("***********"), "supersecret");

    await user.click(getByRole("button", { name: /login/i }));

    expect(onLogin).toHaveBeenCalledTimes(1);
  });
});
