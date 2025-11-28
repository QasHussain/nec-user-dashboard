import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MantineProvider } from "@mantine/core";
import AddUserForm from "@src/Components/dashboard/Management/AddUserForm/AddUserForm";
import { RoutePathsConfig } from "@src/Components/common/SideBar/utils/links";

//HOISTS
const mocks = vi.hoisted(() => {
  return {
    addUserMock: vi.fn(),
    navigateMock: vi.fn(),
    showNotificationMock: vi.fn(),
  };
});

//MOCKS
vi.mock("@src/Components/stores/UsersContext", () => ({
  useUsers: () => ({
    addUser: mocks.addUserMock,
  }),
}));

vi.mock("react-router-dom", () => ({
  useNavigate: () => mocks.navigateMock,
}));

vi.mock("@mantine/notifications", () => ({
  notifications: {
    show: mocks.showNotificationMock,
  },
}));

//HELPER AS MANTINE IS A NIGHTMARE TO TEST
const renderWithMantine = () =>
  render(
    <MantineProvider>
      <AddUserForm />
    </MantineProvider>
  );

describe("AddUserForm", () => {
  beforeEach(() => {
    mocks.addUserMock.mockClear();
    mocks.navigateMock.mockClear();
    mocks.showNotificationMock.mockClear();
  });

  it("renders all fields and submit button", () => {
    const { getByLabelText, getByText } = renderWithMantine();

    expect(getByLabelText(/full name/i)).toBeInTheDocument();
    expect(getByLabelText(/age/i)).toBeInTheDocument();
    expect(getByText(/country/i)).toBeInTheDocument();
    expect(getByText(/interests/i)).toBeInTheDocument();
    expect(getByText(/submit/i)).toBeInTheDocument();
  });

  it("does not submit when form is invalid (empty submit)", async () => {
    const { getByText } = renderWithMantine();
    const user = userEvent.setup();

    await user.click(getByText(/submit/i));

    //ADDUSER NOT CALLED ON INVALID
    expect(mocks.addUserMock).not.toHaveBeenCalled();
    expect(mocks.navigateMock).not.toHaveBeenCalled();
    expect(mocks.showNotificationMock).not.toHaveBeenCalled();
  });

  it("adds user, shows notification and navigates on valid submit", async () => {
    const { getByLabelText, getByText, getByPlaceholderText } =
      renderWithMantine();
    const user = userEvent.setup();

    const setTimeoutSpy = vi
      .spyOn(globalThis, "setTimeout")
      // @ts-ignore
      .mockImplementation((cb: TimerHandler) => {
        if (typeof cb === "function") {
          cb();
        }
        //FAKE ID
        return 0 as unknown as number;
      });

    //FIELDS
    await user.type(getByLabelText(/full name/i), "John Doe");
    await user.type(getByLabelText(/age/i), "25");

    //MANTINE SELECt
    await user.click(getByPlaceholderText(/select country/i));
    await user.click(getByText(/united kingdom/i));

    //CHECKBOX
    await user.click(getByLabelText(/sports/i));

    //SUBMIT
    await user.click(getByText(/submit/i));

    //PAYLOAD CHECK
    expect(mocks.addUserMock).toHaveBeenCalledTimes(1);
    expect(mocks.addUserMock).toHaveBeenCalledWith({
      fullName: "John Doe",
      age: 25,
      country: "uk",
      interests: ["sports"],
    });

    //NOTIFSHOWNN
    expect(mocks.showNotificationMock).toHaveBeenCalledTimes(1);
    expect(mocks.showNotificationMock).toHaveBeenCalledWith(
      expect.objectContaining({ title: "User Added!" })
    );

    //NAVIGATE CALLED AFTER TIMEOUT
    expect(mocks.navigateMock).toHaveBeenCalledWith(RoutePathsConfig.userList);

    setTimeoutSpy.mockRestore();
  });
});
