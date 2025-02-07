import React from "react";

export const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="container mx-auto">
      <div className="flex min-h-screen items-center justify-center px-4 md:justify-evenly">
        <section className="hidden md:flex md:w-[40%] md:justify-center">
          <img src="/auth/auth.svg" alt="" />
        </section>
        <section className="w-full max-w-md md:w-[40%] md:p-5">
          {children}
        </section>
      </div>
    </main>
  );
};
