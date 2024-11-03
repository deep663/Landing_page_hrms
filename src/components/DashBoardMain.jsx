import { Pie } from "react-chartjs-2";
import {
  FaUsers,
  FaUserCircle,
  FaUserCheck,
  FaUserClock,
} from "react-icons/fa";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required components
Chart.register(ArcElement, Tooltip, Legend);

const DashBoardMain = () => {
  return (
    <>
      {/* Main Content */}
      <div className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">DASHBOARD</h2>
          <div className="flex items-center">
            <span className="mr-2">Hello Admin</span>
            <FaUserCircle className="text-2xl" />
          </div>
        </header>
        <div className="grid grid-cols-3 gap-6 mb-6">
          <StatCard
            title="TOTAL EMPLOYEE"
            value="1000"
            icon={<FaUsers className="text-blue-500 text-4xl" />}
          />
          <StatCard
            title="TOTAL EMPLOYEE IN SERVICE"
            value="800"
            icon={<FaUserCheck className="text-blue-500 text-4xl" />}
          />
          <StatCard
            title="TOTAL EMPLOYEE ON HOLD"
            value="200"
            icon={<FaUserClock className="text-blue-500 text-4xl" />}
          />
        </div>
        <div className="grid grid-cols-3 gap-6 mb-6">
          <ProfileSubmitted />
          <AgeWiseEmployee />
          <GenderWiseEmployee />
        </div>
      </div>
    </>
  );
};

const StatCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-4 shadow-md border  rounded">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div>{icon}</div>
        <div className="text-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-3xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
};

const ProfileSubmitted = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded">
      <h3 className="text-lg font-semibold mb-4">DESIGNATION WISE EMPLOYEE</h3>
      <ul>
        <li className="flex justify-between mb-2">
          <span>Designation1</span>
          <span>353</span>
        </li>
        <li className="flex justify-between mb-2">
          <span>Designation2</span>
          <span>203</span>
        </li>
        <li className="flex justify-between">
          <span>Designation3</span>
          <span>384</span>
        </li>
      </ul>
    </div>
  );
};

const AgeWiseEmployee = () => {
  // Dummy data for the age-wise distribution
  const data = {
    labels: ["20-30", "31-40", "41-50", "51-60", "60+"],
    datasets: [
      {
        label: "Age Wise Distribution",
        data: [150, 300, 200, 100, 50], // Adjust these values as needed
        backgroundColor: [
          "#36A2EB",
          "#FF6384",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
        hoverBackgroundColor: [
          "#36A2EB",
          "#FF6384",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  return (
    <div className="bg-white p-4 shadow-md rounded">
      <h3 className="text-lg font-semibold mb-4">AGE WISE EMPLOYEE</h3>
      <div className="flex justify-center">
        <Pie
          data={data}
          width={60}
          options={{ maintainAspectRatio: false, responsive: true }}
        />
      </div>
    </div>
  );
};

const GenderWiseEmployee = () => {
  // Dummy data for the pie chart
  const data = {
    labels: ["Male", "Female", "Other"], // Gender categories
    datasets: [
      {
        data: [50, 40, 10], // Example data values representing the number of employees
        backgroundColor: [
          "#42A5F5", // Blue for Male
          "#FF6F61", // Pink for Female
          "#66BB6A", // Green for Other
        ],
        hoverBackgroundColor: ["#42A5F5", "#FF6F61", "#66BB6A"],
      },
    ],
  };

  return (
    <div className="bg-white p-4 shadow-md rounded">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold mb-4 text-wrap">
          GENDER WISE EMPLOYEE
        </h3>
        <select className="border border-gray-300 rounded p-2">
          <option>Select District</option>
        </select>
      </div>
      <div className="flex justify-center">
        <Pie
          data={data}
          options={{ maintainAspectRatio: false, responsive: true }}
          height={150}
          width={150}
        />
      </div>
    </div>
  );
};

export default DashBoardMain;