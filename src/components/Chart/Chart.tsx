import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.plugins.tooltip.enabled = false;

export default function Chart({
  data = [100],
  colorlist,
}: {
  data: number[];
  colorlist: string[];
}) {
  const chartData = {
    datasets: [
      {
        data: data,
        backgroundColor: colorlist,
      },
    ],
  };
  return (
    <div>
      <Doughnut data={chartData}></Doughnut>
    </div>
  );
}
