import React from "react";
import { AppSideBar } from "../components/AppSideBar";
import { DashboardHeader } from "../components/DashboardHeader";

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="flex">
      <section className="min-h-screen w-[27%] bg-[#2A3663] p-3">
        <AppSideBar />
      </section>
      <section className="min-h-screen w-full p-3">
        <DashboardHeader />
        {children}
      </section>
    </main>
  );
};
