import { SquareChartGantt } from "lucide-react";
import { EventInfoCard, IEventInfo } from "../components/EventInfoCard";

const homeDashboard: IEventInfo[] = [
  {
    title: "Event Aktif",
    icon: <SquareChartGantt className="text-gray-600" size={20} />,
    subTitle: "Event",
    to: "/organizer/dashboard/event",
    total: 10,
  },
  {
    title: "Event Aktif",
    icon: <SquareChartGantt className="text-gray-600" size={20} />,
    subTitle: "Event",
    to: "/organizer/dashboard/event",
    total: 10,
  },
  {
    title: "Event Aktif",
    icon: <SquareChartGantt className="text-gray-600" size={20} />,
    subTitle: "Event",
    to: "/organizer/dashboard/event",
    total: 10,
  },
  {
    title: "Event Aktif",
    icon: <SquareChartGantt className="text-gray-600" size={20} />,
    subTitle: "Event",
    to: "/organizer/dashboard/event",
    total: 10,
  },
  {
    title: "Event Aktif",
    icon: <SquareChartGantt className="text-gray-600" size={20} />,
    subTitle: "Event",
    to: "/organizer/dashboard/event",
    total: 10,
  },
  {
    title: "Event Aktif",
    icon: <SquareChartGantt className="text-gray-600" size={20} />,
    subTitle: "Event",
    to: "/organizer/dashboard/event",
    total: 10,
  },
];

export const HomeDashboard = () => {
  return (
    <main className="mt-5 space-y-7">
      <h1 className="text-2xl font-semibold text-[#B59F78]">Home Dashboard</h1>
      <section className="grid grid-cols-3 gap-y-5">
        {homeDashboard.map((val, idx) => {
          return (
            <div key={idx}>
              <EventInfoCard
                icon={val.icon}
                subTitle={val.subTitle}
                title={val.title}
                to={val.to}
                total={val.total}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
};
