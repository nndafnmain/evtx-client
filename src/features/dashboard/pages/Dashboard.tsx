import { Outlet } from "react-router-dom";
import { DashboardLayout } from "./DashboardLayout";
import { HomeDashboard } from "./HomeDashboard";

export const Dashboard = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  );
};
