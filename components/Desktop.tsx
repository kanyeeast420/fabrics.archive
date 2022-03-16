import React from "react";
import { Folder } from "./UI/Folder";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Desktop {}

export const Desktop: React.FC<Desktop> = ({}) => {

  return (
    <div className="flex h-screen w-full flex-col items-start justify-start gap-3 pt-20 pl-5 pr-5">
      <div className="flex flex-row gap-3">
        <Folder name="View all fabrics" url="/"></Folder>
        <Folder name="Denim" url="/denim"></Folder>
        <Folder name="The North Face" url="/tnf"></Folder>
      </div>
    </div>
  );
};
