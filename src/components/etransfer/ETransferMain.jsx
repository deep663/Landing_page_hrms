import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import TransferHistory from "./TransferHistory";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  // Dummy stats data for summary cards
  const stats = [
    { title: "Total Applications", value: 150, color: "bg-blue-500" },
    { title: "Approved Applications", value: 90, color: "bg-green-500" },
    { title: "Rejected Applications", value: 40, color: "bg-red-500" },
    { title: "Pending Applications", value: 20, color: "bg-yellow-500" },
  ];

  // Data for the bar chart
  const chartData = {
    labels: ["Approved", "Rejected", "Pending"],
    datasets: [
      {
        label: "Number of Applications",
        data: [90, 40, 20], // Corresponds to Approved, Rejected, Pending
        backgroundColor: ["#22c55e", "#ef4444", "#facc15"], // Colors matching stats cards
        borderColor: ["#16a34a", "#dc2626", "#eab308"],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Application Status Breakdown",
      },
    },
  };

  return (
    <div className="container mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-600">Overview of application statuses</p>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg text-white ${stat.color}`}
          >
            <h2 className="text-lg font-semibold">{stat.title}</h2>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Application Status Overview</h2>
        <div className="flex justify-center items-center h-64">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* History Table */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Recent Application History</h2>
        <TransferHistory />
      </div>
    </div>
  );
};

export default Dashboard;
