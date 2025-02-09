import { Outlet } from "react-router-dom";
import { DashboardLayout } from "./DashboardLayout";

export const Dashboard = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};
