import { FC, useEffect, useState } from "react";
import { Table, Switch, Button, Modal } from "antd";
import { IUser, useUsers } from "@src/Components/stores/UsersContext";
import styles from "./UserTable.module.scss";

interface TableUser extends IUser {
  key: string;
  active: boolean;
}

const UserTable: FC = () => {
  const { users } = useUsers();

  const [data, setData] = useState<TableUser[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<TableUser | null>(null);

  useEffect(() => {
    setData((prev) => {
      const activeById = new Map(prev.map((u) => [u.id, u.active]));

      return users.map((u) => ({
        ...u,
        key: u.id,
        active: activeById.get(u.id) ?? true,
      }));
    });
  }, [users]);

  const handleSwitchChange = (checked: boolean, key: string) => {
    setData((prev) =>
      prev.map((item) =>
        item.key === key ? { ...item, active: checked } : item
      )
    );
  };

  const handleView = (user: TableUser) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Active",
      dataIndex: "active",
      key: "active",
      render: (active: boolean, record: TableUser) => (
        <Switch
          checked={active}
          checkedChildren="Active"
          unCheckedChildren="Inactive"
          onChange={(checked) => handleSwitchChange(checked, record.key)}
        />
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: unknown, record: TableUser) => (
        <Button
          style={{
            background:
              "linear-gradient(135deg, rgb(238, 154, 229) 10%, rgb(89, 97, 249) 100%)",
            color: "#fff",
            border: "none",
          }}
          onClick={() => handleView(record)}>
          View
        </Button>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} />

      <Modal
        title="User Details"
        open={isModalOpen}
        onCancel={handleCloseModal}
        footer={null}>
        {selectedUser && (
          <div className={styles.modalContainer}>
            <p>
              <strong>Name:</strong> {selectedUser.fullName}
            </p>
            <p>
              <strong>Age:</strong> {selectedUser.age}
            </p>
            <p>
              <strong>Country:</strong> {selectedUser.country}
            </p>
            <p>
              <strong>Interests:</strong>{" "}
              {selectedUser.interests && selectedUser.interests.length > 0
                ? selectedUser.interests.join(", ")
                : "None"}
            </p>
          </div>
        )}
      </Modal>
    </>
  );
};

export default UserTable;
