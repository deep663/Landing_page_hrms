import { useState } from "react";
import PropTypes from "prop-types";

const TransferReject = () => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const toggleDetails = () => {
    setShowDetailsModal(!showDetailsModal);
  };

  return (
    <div className="container mx-auto bg-white">
      <header className="bg-gray-100 flex flex-col justify-center mb-6 px-5 py-2">
        <h2 className="text-2xl font-bold mb-4 sm:mb-0">REJECTED</h2>
        <h3 className="text-md font-semibold">
          <span className="text-yellow-500">E-TRANSFER </span> / REJECTED
        </h3>
      </header>

      {/* Table Section */}
      {/* <div className="overflow-x-auto mx-4 mt-4">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border">SNo</th>
              <th className="py-2 px-4 border">Application No.</th>
              <th className="py-2 px-4 border">Designation</th>
              <th className="py-2 px-4 border">District of Employee 1</th>
              <th className="py-2 px-4 border">District of Employee 2</th>
              <th className="py-2 px-4 border">Rejected On</th>
              <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 text-center border">1.</td>
              <td className="py-2 px-4 text-center border text-red-500 font-semibold">
                PNRDET00004
              </td>
              <td className="py-2 px-4 text-center border">Designation1</td>
              <td className="py-2 px-4 text-center border">District1</td>
              <td className="py-2 px-4 text-center border">District2</td>
              <td className="py-2 px-4 text-center border">2024-11-05</td>
              <td className="py-3 px-6 text-center border">
                <button onClick={toggleDetails} className="bg-red-500 text-white px-4 py-2 rounded">
                  Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}

      {/* Details Modal */}
      {showDetailsModal && <DetailsModal toggleDetails={toggleDetails} />}
    </div>
  );
};

const DetailsModal = ({ toggleDetails }) => (
  <div className="bg-black bg-opacity-30 fixed inset-0 h-screen w-full flex items-center justify-center">
    <div className="bg-white shadow-lg rounded-lg w-1/2">
      <div className="bg-red-900 text-white text-lg font-semibold p-4 rounded-t-lg flex justify-between items-center">
        <span>Rejection Details</span>
        <button onClick={toggleDetails}>Close</button>
      </div>
      <div className="p-6">
        <p>Details about the rejected transfer...</p>
        <button onClick={toggleDetails} className="bg-gray-500 text-white px-4 py-2 mt-4 rounded">
          Close
        </button>
      </div>
    </div>
  </div>
);

DetailsModal.propTypes = {
  toggleDetails: PropTypes.func.isRequired,
};

export default TransferReject;
