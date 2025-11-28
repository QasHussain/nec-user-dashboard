import Container from "@src/Components/common/Layout/container/Container";
import TitleHeaderBg from "@src/Components/common/TitleHeaderBg/TitleHeaderBg";
import UserTable from "@src/Components/dashboard/Management/UserTable/UserTable";

import { Divider } from "antd";
import { FC } from "react";

const UserList: FC = () => {
  return (
    <Container>
      <TitleHeaderBg
        title="User List"
        background="linear-gradient(357deg, rgb(42, 250, 223) 10%, rgb(76, 131, 255) 100%)"
      />
      <Divider />
      <UserTable />
    </Container>
  );
};

export default UserList;
