import { ChartNoAxesGantt, LayoutGrid, TicketPlus } from "lucide-react";
import { Link } from "react-router-dom";

const appSidebar = [
  {
    title: "Dashboard",
    icon: (
      <LayoutGrid
        size={20}
        className="text-[#FAF6E3] transition duration-300 group-hover:text-[#2A3663]"
      />
    ),
    to: "/organizer/dashboard/home",
  },
  {
    title: "Create Event",
    icon: (
      <TicketPlus
        size={20}
        className="text-[#FAF6E3] transition duration-300 group-hover:text-[#2A3663]"
      />
    ),
    to: "/organizer/dashboard/event/create",
  },
  {
    title: "My Events",
    icon: (
      <ChartNoAxesGantt
        size={20}
        className="text-[#FAF6E3] transition duration-300 group-hover:text-[#2A3663]"
      />
    ),
    to: "/organizer/dashboard/event/lists",
  },
  {
    title: "Create Event",
    icon: (
      <TicketPlus
        size={20}
        className="text-[#FAF6E3] transition duration-300 group-hover:text-[#2A3663]"
      />
    ),
    to: "/organizer/dashboard/event/create",
  },
  {
    title: "Create Event",
    icon: (
      <TicketPlus
        size={20}
        className="text-[#FAF6E3] transition duration-300 group-hover:text-[#2A3663]"
      />
    ),
    to: "/organizer/dashboard/event/create",
  },
];

export const AppSideBar = () => {
  return (
    <main className="flex h-full flex-col justify-between">
      <div className="space-y-10">
        <section className="flex items-center justify-between text-[#FAF6E3]">
          <h1 className="text-xl font-semibold text-[#B59F78]">EVNTX</h1>
          <img
            src="https://github.com/shadcn.png"
            width={40}
            height={40}
            className="rounded-full border border-gray-400"
          />
        </section>
        <section className="space-y-5">
          <h1 className="text-xl font-semibold text-[#B59F78]">Menus</h1>
          <div className="flex flex-col justify-evenly space-y-6">
            {appSidebar.map((value) => {
              return (
                <Link
                  to={value.to}
                  className="flex w-[200px] items-center gap-5 rounded-md p-1 transition-all duration-300 hover:bg-[#FAF6E3]"
                >
                  {value.icon}
                  <p className="w-full text-sm font-semibold text-[#FAF6E3] transition-colors duration-300 hover:text-[#2A3663]">
                    {value.title}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
      <section>
        <button className="w-full rounded-md bg-[#FAF6E3] p-2 text-[#2A3663]">
          Logout
        </button>
      </section>
    </main>
  );
};
