import { SquareChartGantt } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export interface IEventInfo {
  icon: any;
  title: string;
  to: string;
  total: number;
  subTitle: string;
}

export const EventInfoCard: React.FC<IEventInfo> = ({
  icon,
  subTitle,
  title,
  to,
  total,
}) => {
  return (
    <article className="w-80 space-y-5 border border-gray-400 p-3">
      <section className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          {icon}
          <p className="text-base text-gray-600">{title}</p>
        </div>
        <Link to={to}>
          <p className="text-sm text-pink-700">DETAIL</p>
        </Link>
      </section>
      <hr />
      <section className="flex items-center gap-5">
        <p className="text-5xl font-normal text-gray-600">{total}</p>
        <p className="text-xl font-normal text-gray-500">{subTitle}</p>
      </section>
    </article>
  );
};
