import {
  FaUsers,
  FaUserCircle,
  FaUserCheck,
  FaUserClock,
} from "react-icons/fa";
import PropTypes from "prop-types";
import EmployeeDistribution from "./EmployeeDistribution";
import { useNavigate } from "react-router-dom";

// Data sets for the charts
const dataSetEmpDist = {
  scheme: {
    labels: ["Scheme A", "Scheme B", "Scheme C", "Scheme D"],
    datasets: [
      {
        data: [250, 150, 300, 200],
        backgroundColor: ["#2196F3", "#4CAF50", "#FF9800", "#9C27B0"],
        hoverBackgroundColor: ["#1976D2", "#388E3C", "#F57C00", "#7B1FA2"],
        label: "Scheme Wise Distribution",
      },
    ],
  },

  gender: {
    labels: ["Male", "Female", "Other"],
    datasets: [
      {
        data: [50, 40, 10],
        backgroundColor: ["#42A5F5", "#FF6F61", "#66BB6A"],
        hoverBackgroundColor: ["#42A5F5", "#FF6F61", "#66BB6A"],
        label: "Gender Wise Distribution",
      },
    ],
  },
  age: {
    labels: ["20-30", "31-40", "41-50", "51-60", "60+"],
    datasets: [
      {
        data: [150, 300, 200, 100, 50],
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
        label: "Age Wise Distribution",
      },
    ],
  },
  designation: {
    labels: ["Manager", "Team Lead", "Developer", "Tester", "HR"],
    datasets: [
      {
        data: [100, 150, 300, 120, 80],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#66CC99",
          "#9966FF",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#66CC99",
          "#9966FF",
        ],
        label: "Designation Wise Distribution",
      },
    ],
  },
  caste: {
    labels: ["General", "OBC", "SC", "ST", "Others"],
    datasets: [
      {
        data: [200, 300, 150, 100, 50],
        backgroundColor: [
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FFCD56",
          "#FF6384",
        ],
        hoverBackgroundColor: [
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#FFCD56",
          "#FF6384",
        ],
        label: "Caste Wise Distribution",
      },
    ],
  },
};

const DashBoardMain = () => {
  const navigate = useNavigate();
  return (
    <div className="flex-1">
      <header className="bg-gray-100 flex justify-between items-center mb-6 p-5">
        <h2 className="text-2xl font-bold mb-4 sm:mb-0">DASHBOARD</h2>
        <div className="flex items-center">
          <span className="mr-2 text-lg font-semibold">Hello, Admin</span>
          <FaUserCircle className="text-4xl text-blue-500" />
        </div>
      </header>
      <div className="p-6">
        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <StatCard
            title="TOTAL EMPLOYEE"
            value="1000"
            icon={<FaUsers className="text-white text-4xl" />}
          />
          <StatCard
            title="TOTAL EMPLOYEE IN SERVICE"
            value="800"
            icon={<FaUserCheck className="text-white text-4xl" />}
          />
          <StatCard
            title="TOTAL VACANCY"
            value="200"
            icon={<FaUserClock className="text-white text-4xl" />}
          />
        </div>

        {/* Employee Distribution */}
        <EmployeeDistribution dataSets={dataSetEmpDist} />

        {/* Modules */}
        <div className="container mx-auto bg-white text-black border shadow-md mb-6">
          <div className="bg-gray-200 p-4 flex flex-col sm:flex-row justify-between items-center">
            <h1 className="text-lg font-bold mb-4 sm:mb-0">MODULES</h1>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            <div className="card p-6 text-center border border-gray-300 rounded-lg bg-white shadow-md hover:shadow-lg hover:scale-105 hover:bordee-2 transition-transform duration-300 ease-in-out">
              <div onClick={() => navigate("/etransfer")} className="flex flex-col items-center space-x-4">
                <img src="./Transfer.png" className="mx-auto mb-4 h-16" alt="e-Transfer" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  e-Transfer Management
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-6 md:p-4 shadow-md border rounded-lg text-center hover:shadow-lg transition-transform duration-300 ease-in-out">
      <div className="flex flex-col items-center space-y-3 md:space-y-4">
        <div className="text-4xl md:text-5xl bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <h3 className="text-md md:text-lg font-semibold text-gray-600">
            {title}
          </h3>
          <p className="text-2xl md:text-3xl font-bold text-gray-800">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default DashBoardMain;
