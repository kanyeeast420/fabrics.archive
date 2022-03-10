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
  const state = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Rainfall",
        borderWidth: 1,
        borderColor: "#CBCBCB",
        data: [65, 59, 80, 81, 56],
        tension: 0.1,
        fill: true,
      },
    ],
  };

  return (
    <div className="flex h-screen w-full flex-col items-start justify-start gap-3 pt-20 pl-5 pr-5">
      <div className="flex flex-row gap-3">
        <Folder name="View all fabrics" url="/"></Folder>
        <Folder name="Denim" url="/denim"></Folder>
        <Folder name="TNF" url="/tnf"></Folder>
      </div>
      {/* <div>
        <Line
          data={state}
          options={{
            backgroundColor: "#fff",
          }}
        />
      </div> */}
    </div>
  );
};
