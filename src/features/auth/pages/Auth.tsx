import React from "react";
import { AuthLayout } from "./AuthLayout";
import { Outlet } from "react-router-dom";

export const Auth = () => {
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
};
