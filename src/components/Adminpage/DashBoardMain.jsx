import { Pie } from "react-chartjs-2";
import {
  FaUsers,
  FaUserCircle,
  FaUserCheck,
  FaUserClock,
} from "react-icons/fa";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import AssamMapIcon from "../common/AssamMapIcon";

// Register the required components
Chart.register(ArcElement, Tooltip, Legend);

const DashBoardMain = () => {
  return (
    <>
      {/* Main Content */}
      <div className="flex-1 p-6">
        <header className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-bold mb-4 sm:mb-0">DASHBOARD</h2>
          <div className="flex items-center">
            <span className="mr-2">Hello Admin</span>
            <FaUserCircle className="text-2xl" />
          </div>
        </header>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
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
            title="TOTAL VACANCY"
            value="200"
            icon={<FaUserClock className="text-blue-500 text-4xl" />}
          />
        </div>

        {/* Charts and Lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <ProfileSubmitted />
          <AgeWiseEmployee />
          <GenderWiseEmployee />
          {/* <AssamMapIcon  fill="#a8b9f4" stroke="black" height="400px" className=""/> */}
        </div>
      </div>
    </>
  );
};

const StatCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-4 shadow-md border rounded text-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div>{icon}</div>
        <div>
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
        data: [150, 300, 200, 100, 50],
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0", "#9966FF"],
        hoverBackgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0", "#9966FF"],
      },
    ],
  };

  return (
    <div className="bg-white p-4 shadow-md rounded">
      <h3 className="text-lg font-semibold mb-4">AGE WISE EMPLOYEE</h3>
      <div className="flex justify-center">
        <Pie
          data={data}
          options={{ maintainAspectRatio: false, responsive: true }}
          width={150}
          height={150}
        />
      </div>
    </div>
  );
};

const GenderWiseEmployee = () => {
  // Dummy data for the pie chart
  const data = {
    labels: ["Male", "Female", "Other"],
    datasets: [
      {
        data: [50, 40, 10],
        backgroundColor: ["#42A5F5", "#FF6F61", "#66BB6A"],
        hoverBackgroundColor: ["#42A5F5", "#FF6F61", "#66BB6A"],
      },
    ],
  };

  return (
    <div className="bg-white p-4 shadow-md rounded">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold mb-4">GENDER WISE EMPLOYEE</h3>
        <select className="border border-gray-300 rounded p-2">
          <option>Select District</option>
          <option>District 1</option>
          <option>District 2</option>
          <option>District 3</option>
        </select>
      </div>
      <div className="flex justify-center">
        <Pie
          data={data}
          options={{ maintainAspectRatio: false, responsive: true }}
          width={150}
          height={150}
        />
      </div>
    </div>
  );
};

export default DashBoardMain;
