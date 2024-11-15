import { Stats } from "@/models/pokemonModel";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Enregistre les composants de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ComponentNameProps {
  stats: Stats;
  name: string;
}

export const StatsPoke = ({ stats, name }: ComponentNameProps) => {
  const labels = Object.keys(stats);
  const values = Object.values(stats);

  const data = {
    labels: labels,
    datasets: [
      {
        label: `Stats de ${name}`,
        data: values,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
        labels: {
          color: "white",
        },
      },
      title: {
        display: true,
        text: `Statistiques de ${name}`,
        color: "white",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "white",
        },
      },
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.1)",
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};
