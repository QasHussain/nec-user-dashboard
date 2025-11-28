import React from "react";
import { render } from "@testing-library/react";
import HomePage from "@src/Pages/HomePage";

// MOCK CHILD COMPONENTS

vi.mock("@src/Components/common/Layout/container/Container", () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="container">{children}</div>
  ),
}));

vi.mock("@src/Components/common/HomePageLogo/HomePageLogo", () => ({
  default: () => <div data-testid="home-logo">Home Logo</div>,
}));

vi.mock("@src/Components/common/HomeButton/HomeButton", () => ({
  default: ({
    background,
    buttonContent,
    navLink,
  }: {
    background: string;
    buttonContent: string;
    navLink: string;
  }) => (
    <button
      data-testid="home-button"
      data-background={background}
      data-link={navLink}>
      {buttonContent}
    </button>
  ),
}));

vi.mock(
  "@src/Components/dashboard/Home/PeakContainerUse/UsersAddedGraph",
  () => ({
    default: () => <div data-testid="users-added-graph">Graph</div>,
  })
);

describe("HomePage", () => {
  it("renders welcome text, quick buttons, and graph title", () => {
    const { getByText, getAllByTestId, getByTestId } = render(<HomePage />);

    // HEADER
    expect(getByText(/welcome to your home page!/i)).toBeInTheDocument();

    // NAV BUTTONS
    const buttons = getAllByTestId("home-button");
    expect(buttons).toHaveLength(2);

    // CHECK TEXT AND LINKS
    const addUserButton = getByText(/add user/i);
    const userListButton = getByText(/user list/i);

    expect(addUserButton).toBeInTheDocument();
    expect(userListButton).toBeInTheDocument();

    expect(addUserButton).toHaveAttribute("data-link", "add-user");
    expect(userListButton).toHaveAttribute("data-link", "user-list");

    // GRAPH TITLE
    expect(getByText(/users added over last month/i)).toBeInTheDocument();

    // GRAPH
    expect(getByTestId("users-added-graph")).toBeInTheDocument();
  });
});
