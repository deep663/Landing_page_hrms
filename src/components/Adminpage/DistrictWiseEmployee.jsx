import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { useState } from "react";
import PropTypes from "prop-types";

// Register Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

const DistrictWiseDetails = ({ dataSets }) => {
  const [selectedDistrict, setSelectedDistrict] = useState(Object.keys(dataSets)[0]); 
  const [selectedFilter, setSelectedFilter] = useState("scheme");

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const districtData = dataSets[selectedDistrict];

  return (
    <div className="bg-white text-black font-sans border shadow-md rounded-sm p-4">
      <div className="container mx-auto">
        <div className="bg-gray-200 p-4 flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-lg font-bold mb-4 sm:mb-0">EMPLOYEE DISTRICT WISE DISTRIBUTION</h1>

          <select
            onChange={handleDistrictChange}
            value={selectedDistrict}
            className="p-2 border border-gray-300 rounded"
          >
            {Object.keys(dataSets).map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>

          <select
            onChange={handleFilterChange}
            value={selectedFilter}
            className="p-2 border border-gray-300 rounded ml-4"
          >
            <option value="scheme">Schemes</option>
            <option value="service">Services</option>
          </select>
        </div>

        
      </div>
    </div>
  );
};

DistrictWiseDetails.propTypes = {
  dataSets: PropTypes.object.isRequired,
};

export default DistrictWiseDetails;
