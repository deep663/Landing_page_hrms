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
import { useNavigate } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const navigate = useNavigate();
  // Dummy stats data for summary cards
  const stats = [
    { title: "Total Applications", value: 150, color: "bg-blue-500", link: "/" },
    { title: "Approved Applications", value: 90, color: "bg-green-500", link: "/approved" },
    { title: "Rejected Applications", value: 40, color: "bg-red-500", link: "/rejected" },
    { title: "Pending Applications", value: 20, color: "bg-yellow-500", link: "/pending" },
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
        <h3 className="text-md font-semibold">
          <span className="text-yellow-500">E-TRANSFER </span> / DASHBOARD
        </h3>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg text-white ${stat.color} hover:shadow-lg hover:scale-105 hover:border-blue-500 transition-transform duration-300 ease-in-out`}
            onClick={() => navigate(`/etransfer${stat.link}`)}
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
