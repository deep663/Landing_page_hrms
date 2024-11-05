import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";
import PropTypes from "prop-types";

// Register Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const EmployeeDistribution = ({ dataSets }) => {
  const [filter, setFilter] = useState("scheme");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const data = dataSets[filter];

  return (
    <div className="bg-white text-black font-sans border shadow-md rounded-sm mb-8 p-4">
      <div className="container mx-auto">
        <div className="bg-gray-200 p-4 flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-lg font-bold mb-4 sm:mb-0">EMPLOYEE DISTRIBUTION</h1>
          <select
            onChange={handleFilterChange}
            value={filter}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="scheme">Schemes</option>
            <option value="designation">Designation</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="caste">Caste</option>
          </select>
        </div>
        
        <div className="flex flex-col lg:flex-row py-4">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full h-64 lg:h-auto">
              <Pie
                data={data}
                options={{ maintainAspectRatio: false, responsive: true }}
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
            <h2 className="text-xl font-bold">{data.datasets[0].label}</h2>
            <div className="mt-4">
              <div className="flex items-center">
                <span className="text-lg font-bold">TOTAL</span>
                <span className="text-4xl font-bold ml-4">
                  {data.datasets[0].data.reduce((a, b) => a + b, 0)}
                </span>
              </div>

              {/* Distribution Details */}
              <div className="mt-4">
                <div className="flex font-bold border-b border-gray-300 pb-2">
                  <div className="w-1/3">CATEGORY</div>
                  <div className="w-1/3">COUNT</div>
                </div>
                {data.labels.map((label, index) => (
                  <div className="flex mt-2" key={index}>
                    <div className="w-1/3">{label}</div>
                    <div
                      className="w-1/3 text-2xl font-bold"
                      style={{ color: data.datasets[0].backgroundColor[index] }}
                    >
                      {data.datasets[0].data[index]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EmployeeDistribution.propTypes = {
  dataSets: PropTypes.object.isRequired,
};

export default EmployeeDistribution;
