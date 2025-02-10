import React from "react";

export const ExploreEventLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="flex">
      <section>
        <h1>FILTERING</h1>
      </section>
      <section>
        <h1>PAGES</h1>
        {children}
      </section>
    </main>
  );
};
