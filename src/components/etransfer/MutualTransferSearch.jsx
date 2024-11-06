import {
  FaSearch,
  FaRedo,
  FaFileDownload,
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MutualTransferRequestSearch = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto">
      <header className="bg-gray-100 flex flex-col justify-center mb-6 px-5 py-2">
        <h2 className="text-2xl font-bold mb-4 sm:mb-0">SEARCH</h2>
        <h3 className="text-md font-semibold">
          <span className="text-yellow-500">E-TRANSFER </span> / SEARCH
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
        {/* Button Section */}
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
                <th className="py-2 px-4 border">District of Employee 1</th>
                <th className="py-2 px-4 border">District of Employee 2</th>
                <th className="py-2 px-4 border">Submitted On</th>
                <th className="py-2 px-4 border">Last Action On</th>
                <th className="py-2 px-4 border">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 text-center border">1.</td>
                <td className="py-2 px-4 text-center border text-blue-500 font-semibold">
                  PNRDET00001
                </td>
                <td className="py-2 px-4 text-center border">District1</td>
                <td className="py-2 px-4 text-center border">District2</td>
                <td className="py-2 px-4 text-center border">2024-11-04</td>
                <td className="py-2 px-4 text-center border">2024-11-04</td>
                <td
                  onClick={() => {
                    navigate("/etransfer/pending");
                  }}
                  className="py-2 px-4 text-center border text-yellow-500 font-bold hover:cursor-pointer"
                >
                  Pending
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-center border">2.</td>
                <td className="py-2 px-4 text-center border text-blue-500 font-semibold">
                  PNRDET00002
                </td>
                <td className="py-2 px-4 text-center border">District1</td>
                <td className="py-2 px-4 text-center border">District3</td>
                <td className="py-2 px-4 text-center border">2024-11-04</td>
                <td className="py-2 px-4 text-center border">2024-11-04</td>
                <td
                  onClick={() => {
                    navigate("/etransfer/rejected");
                  }}
                  className="py-2 px-4 text-center border text-red-500 font-bold hover:cursor-pointer"
                >
                  Rejected
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 text-center border">3.</td>
                <td className="py-2 px-4 text-center border text-blue-500 font-semibold">
                  PNRDET00003
                </td>
                <td className="py-2 px-4 text-center border">District3</td>
                <td className="py-2 px-4 text-center border">District4</td>
                <td className="py-2 px-4 text-center border">2024-11-04</td>
                <td className="py-2 px-4 text-center border">2024-11-04</td>
                <td
                  onClick={() => {
                    navigate("/etransfer/approved");
                  }}
                  className="py-2 px-4 text-center border text-green-500 font-bold hover:cursor-pointer"
                >
                  Approved
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
      </div>
    </div>
  );
};

export default MutualTransferRequestSearch;
