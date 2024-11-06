import { useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight, FaFileDownload, FaRedo, FaSearch, FaTimes } from "react-icons/fa";
import PropType from "prop-types";

const MutualTransferRequestPending = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const toggleApprove = () => {
    setShowModal1(!showModal1);
  };

  const toggleReject = () => {
    setShowModal2(!showModal2);
  };

  return (
    <div className="container mx-auto bg-white">
      <header className="bg-gray-100 flex flex-col justify-center mb-6 px-5 py-2">
        <h2 className="text-2xl font-bold mb-4 sm:mb-0">PENDING</h2>
        <h3 className="text-md font-semibold">
          <span className="text-yellow-500">E-TRANSFER </span> / PENDING
        </h3>
      </header>
      <div className="bg-white p-2 rounded shadow">
        {/* Filter Section */}
        <div className="bg-white p-4 rounded mb-4">
          <h2 className="bg-gray-100 text-xl font-bold mb-4 p-2">Filter</h2>
          <div className="px-6 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-bold mb-2">
                Appliction No <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter Application No"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">
                Designation <span className="text-red-500">*</span>
              </label>
              <select
                className="w-full p-2 border rounded bg-white"
                placeholder="Enter Designation"
              >
                <option value="">Select Designation</option>
                <option value="1">Designation1</option>
                <option value="2">Designation2</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">
                Submition Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="w-full p-2 border rounded"
                placeholder="dd-mm-yyyy"
              />
            </div>
            <div className="flex justify-start mt-7">
              <button className="bg-blue-500 text-white px-4 rounded mr-2 flex items-center gap-2">
                <FaSearch />
                Search
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2">
                <FaRedo />
                Reset
              </button>
            </div>
          </div>
        </div>
        <div className="flex space-x-2 mx-4 sm:mb-0 justify-between">
          <select className="bg-gray-800 text-white font-semibold px-6 py-2 rounded flex items-center">
            <option value="option1">AESC</option>
            <option value="option2">DESC</option>
          </select>
          <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
            <FaFileDownload className="mr-2" /> Download CSV
          </button>
        </div>

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
                <th className="py-2 px-4 border">Submitted On</th>
                <th className="py-2 px-4 border">Last Action On</th>
                <th className="py-2 px-4 border">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 text-center border">1.</td>
                <td className="py-2 px-4 text-center border text-blue-500 font-semibold">
                  PNRDET00001
                </td>
                <td className="py-2 px-4 text-center border">Designation1</td>
                <td className="py-2 px-4 text-center border">District1</td>
                <td className="py-2 px-4 text-center border">District2</td>
                <td className="py-2 px-4 text-center border">2024-11-04</td>
                <td className="py-2 px-4 text-center border">2024-11-04</td>
                <td className="py-3 px-6 text-center border">
                  <button
                    onClick={toggleApprove}
                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                  >
                    Approve
                  </button>
                  <button
                    onClick={toggleReject}
                    className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                  >
                    Reject
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-center border">2.</td>
                <td className="py-2 px-4 text-center border text-blue-500 font-semibold">
                  PNRDET00002
                </td>
                <td className="py-2 px-4 text-center border">Designation2</td>
                <td className="py-2 px-4 text-center border">District1</td>
                <td className="py-2 px-4 text-center border">District3</td>
                <td className="py-2 px-4 text-center border">2024-11-04</td>
                <td className="py-2 px-4 text-center border">2024-11-04</td>
                <td className="py-3 px-6 text-center border">
                  <button
                    onClick={toggleApprove}
                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                  >
                    Approve
                  </button>
                  <button
                    onClick={toggleReject}
                    className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                  >
                    Reject
                  </button>
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-center border">3.</td>
                <td className="py-2 px-4 text-center border text-blue-500 font-semibold">
                  PNRDET00003
                </td>
                <td className="py-2 px-4 text-center border">Designation3</td>
                <td className="py-2 px-4 text-center border">District3</td>
                <td className="py-2 px-4 text-center border">District4</td>
                <td className="py-2 px-4 text-center border">2024-11-04</td>
                <td className="py-2 px-4 text-center border">2024-11-04</td>
                <td className="py-3 px-6 text-center border">
                  <button
                    onClick={toggleApprove}
                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                  >
                    Approve
                  </button>
                  <button
                    onClick={toggleReject}
                    className="bg-red-500 text-white px-4 py-2 rounded ml-2"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination and Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <span>Page 1 of 0</span>
            <select className="border rounded p-1" aria-label="Select Page">
              {[...Array(5)].map((_, i) => (
                <option key={i + 1}>{i + 1}</option>
              ))}
            </select>
            <select
              className="border rounded p-1"
              aria-label="Select Rows per Page"
            >
              {[5, 10, 20].map((num) => (
                <option key={num}>Show {num}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center space-x-1">
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded-l disabled:bg-gray-300"
              disabled
            >
              <FaAngleDoubleLeft />
            </button>
            <button className="bg-blue-500 text-white px-2 py-1 disabled:bg-gray-300">
              <FaAngleLeft />
            </button>
            <button className="bg-blue-500 text-white px-2 py-1">
              <FaAngleRight />
            </button>
            <button className="bg-blue-500 text-white px-2 py-1 rounded-r">
              <FaAngleDoubleRight />
            </button>
          </div>
        </div>

        {/* Modal Section */}
        {showModal1 && <ApproveModal toggleApprove={toggleApprove} />}
        {showModal2 && <RejectModal toggleReject={toggleReject} />}
      </div>
    </div>
  );
};

const ApproveModal = ({ toggleApprove }) => {
  return (
    <div className="bg-black bg-opacity-30 fixed inset-0 h-screen w-full flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-1/2">
        <div className="bg-blue-900 text-white text-lg font-semibold p-4 rounded-t-lg flex justify-between items-center">
          <span>Approve Mutual Employee Transfer</span>
          <FaTimes className="cursor-pointer" onClick={toggleApprove} />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="w-1/2 pr-2">
              <label className="block text-blue-700 font-semibold mb-2">
                Order Document Upload<span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                className="block w-full text-gray-700 border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
            <div className="w-1/2 pl-2">
              <label className="block text-blue-700 font-semibold mb-2">
                Select Order date<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  placeholder="dd-mm-yyyy"
                  className="block w-full text-gray-700 border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
                <i className="fas fa-calendar-alt absolute right-3 top-3 text-gray-500"></i>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded hover:bg-green-600">
              SUBMIT
            </button>
            <button
              className="bg-red-500 text-white font-semibold py-2 px-6 rounded hover:bg-red-600"
              onClick={toggleApprove}
            >
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ApproveModal.propTypes = {
  toggleApprove: PropType.func,
};

const RejectModal = ({ toggleReject }) => {
    return (
      <div className="bg-black bg-opacity-30 fixed inset-0 h-screen w-full flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg w-1/2">
          <div className="bg-red-900 text-white text-lg font-semibold p-4 rounded-t-lg flex justify-between items-center">
            <span>Reject Mutual Employee Transfer</span>
            <FaTimes className="cursor-pointer" onClick={toggleReject} />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="w-1/2 pr-2">
                <label className="block text-red-700 font-semibold mb-2">
                  Reason for Rejection<span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4"
                  className="block w-full text-gray-700 border border-gray-300 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Enter reason for rejection"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <button className="bg-red-500 text-white font-semibold py-2 px-6 rounded hover:bg-red-600">
                SUBMIT
              </button>
              <button
                className="bg-gray-500 text-white font-semibold py-2 px-6 rounded hover:bg-gray-600"
                onClick={toggleReject}
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  RejectModal.propTypes = {
    toggleReject: PropType.func,
  };

export default MutualTransferRequestPending;
