import "@styles/ant-design/ant-design.scss";
import { AnimatePresence } from "framer-motion";
import { observer } from "mobx-react";
import { Outlet } from "react-router-dom";
import "./Dashboard.scss";
import Sidebar from "./Components/common/SideBar/Sidebar";
import Header from "./Components/common/Header/Header";
import Layout from "./Components/common/Layout/layout/Layout";
import RoutesProvider from "./routes/routes";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";

const Dashboard = observer(() => {
  return (
    <MantineProvider>
      <Notifications position="top-right" />
      <Header />
      <Layout>
        <Sidebar />
        <AnimatePresence>
          <RoutesProvider />
          <Outlet />
        </AnimatePresence>
      </Layout>
    </MantineProvider>
  );
});

export default Dashboard;
