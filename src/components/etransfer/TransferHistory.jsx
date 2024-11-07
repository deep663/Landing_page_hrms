import { useState } from "react";
import PropTypes from "prop-types";

const TransferHistory = () => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);

  const toggleDetails = (application = null) => {
    setSelectedApplication(application);
    setShowDetailsModal(!showDetailsModal);
  };

  const applicationHistory = [
    {
      id: 1,
      applicationNo: "HISTDET00001",
      designation: "Designation1",
      district1: "District1",
      district2: "District2",
      status: "Approved",
      date: "2024-10-10",
    },
    {
      id: 2,
      applicationNo: "HISTDET00002",
      designation: "Designation2",
      district1: "District3",
      district2: "District4",
      status: "Rejected",
      date: "2024-09-15",
    },
    // Add more entries as needed
  ];

  return (
    <div className="container mx-auto bg-white">
      <header className="bg-gray-100 flex flex-col justify-center mb-6 px-5 py-2">
        <h2 className="text-2xl font-bold mb-4 sm:mb-0">APPLICATION HISTORY</h2>
        <h3 className="text-md font-semibold">
          <span className="text-yellow-500">E-TRANSFER </span> / APPLICATION HISTORY
        </h3>
      </header>

      {/* Table Section */}
      <div className="overflow-x-auto mx-4 mt-4">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border">SNo</th>
              <th className="py-2 px-4 border">Application No.</th>
              <th className="py-2 px-4 border">Designation</th>
              <th className="py-2 px-4 border">District of Employee 1</th>
              <th className="py-2 px-4 border">District of Employee 2</th>
              <th className="py-2 px-4 border">Status</th>
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {applicationHistory.map((app, index) => (
              <tr key={app.id}>
                <td className="py-2 px-4 text-center border">{index + 1}.</td>
                <td className={`py-2 px-4 text-center border font-semibold ${app.status === "Approved" ? "text-green-500" : "text-red-500"}`}>
                  {app.applicationNo}
                </td>
                <td className="py-2 px-4 text-center border">{app.designation}</td>
                <td className="py-2 px-4 text-center border">{app.district1}</td>
                <td className="py-2 px-4 text-center border">{app.district2}</td>
                <td className={`py-2 px-4 text-center border font-semibold ${app.status === "Approved" ? "text-green-500" : "text-red-500"}`}>
                  {app.status}
                </td>
                <td className="py-2 px-4 text-center border">{app.date}</td>
                <td className="py-3 px-6 text-center border">
                  <button
                    onClick={() => toggleDetails(app)}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Details Modal */}
      {showDetailsModal && selectedApplication && (
        <DetailsModal application={selectedApplication} toggleDetails={toggleDetails} />
      )}
    </div>
  );
};

const DetailsModal = ({ application, toggleDetails }) => (
  <div className="bg-black bg-opacity-30 fixed inset-0 h-screen w-full flex items-center justify-center">
    <div className="bg-white shadow-lg rounded-lg w-1/2">
      <div className={`text-white text-lg font-semibold p-4 rounded-t-lg flex justify-between items-center ${application.status === "Approved" ? "bg-green-500" : "bg-red-500"}`}>
        <span>{application.status} Application Details</span>
        <button onClick={toggleDetails}>Close</button>
      </div>
      <div className="p-6">
        <p><strong>Application No:</strong> {application.applicationNo}</p>
        <p><strong>Designation:</strong> {application.designation}</p>
        <p><strong>District of Employee 1:</strong> {application.district1}</p>
        <p><strong>District of Employee 2:</strong> {application.district2}</p>
        <p><strong>Status:</strong> {application.status}</p>
        <p><strong>Date:</strong> {application.date}</p>
        <button onClick={toggleDetails} className="bg-gray-500 text-white px-4 py-2 mt-4 rounded">
          Close
        </button>
      </div>
    </div>
  </div>
);

DetailsModal.propTypes = {
  application: PropTypes.object.isRequired,
  toggleDetails: PropTypes.func.isRequired,
};

export default TransferHistory;
