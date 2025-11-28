import Container from "@src/Components/common/Layout/container/Container";

import TitleHeaderBg from "@src/Components/common/TitleHeaderBg/TitleHeaderBg";

import AddUserForm from "@src/Components/dashboard/Management/AddUserForm/AddUserForm";

import { Divider } from "antd";

import { FC } from "react";

const AddUser: FC = () => {
  return (
    <Container>
      <TitleHeaderBg
        title="Add User"
        background="linear-gradient(135deg, rgb(171, 220, 255) 10%, rgb(3, 150, 255) 100%)"
      />
      <Divider />
      <AddUserForm />
    </Container>
  );
};

export default AddUser;
