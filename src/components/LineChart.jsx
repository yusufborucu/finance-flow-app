import { Line } from "react-chartjs-2"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.map((_, i) => `Month ${i + 1}`),
    datasets: [
      {
        label: "Savings",
        data: data,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
    },
  }

  return <Line data={chartData} options={options} />
}

export default LineChart
