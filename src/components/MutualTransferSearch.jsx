import {
  FaSearch,
  FaRedo,
  FaFileDownload,
  FaFilter,
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
} from "react-icons/fa";

const MutualTransferRequestSearch = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-4 rounded shadow">
        <h1 className="text-xl font-bold mb-4">MUTUAL TRANSFER - SEARCH</h1>
        
        {/* Filter Section */}
        <div className="bg-gray-200 p-4 rounded mb-4">
          <h2 className="text-lg font-bold mb-2">Filter</h2>
          <div className="flex flex-col sm:flex-row items-center mb-4">
            <label
              htmlFor="applicationNo"
              className="mr-2 font-bold text-red-600"
            >
              Application No *
            </label>
            <input
              type="text"
              id="applicationNo"
              className="border rounded p-2 flex-grow mb-2 sm:mb-0"
              placeholder="Application No"
              aria-label="Application Number"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded ml-2 flex items-center">
              <FaSearch className="mr-2" /> Search
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded ml-2 flex items-center">
              <FaRedo className="mr-2" /> Reset
            </button>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            <FaRedo className="mr-2" /> Reset Filter
          </button>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border">SNo</th>
                <th className="py-2 px-4 border">Application No.</th>
                <th className="py-2 px-4 border">District of Employee 1</th>
                <th className="py-2 px-4 border">District of Employee 2</th>
                <th className="py-2 px-4 border">Submitted On</th>
                <th className="py-2 px-4 border">Last Action On</th>
                <th className="py-2 px-4 border">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">1</td>
                <td className="py-2 px-4 border-b">xyz123</td>
                <td className="py-2 px-4 border-b">District1</td>
                <td className="py-2 px-4 border-b">District2</td>
                <td className="py-2 px-4 border-b">2024-11-04</td>
                <td className="py-2 px-4 border-b">2024-11-04</td>
                <td className="py-2 px-4 border-b">View</td>
              </tr>
              {/* More rows as needed */}
            </tbody>
          </table>
        </div>

        {/* Pagination and Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-4">
          <div className="flex space-x-2 mb-4 sm:mb-0">
            <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center">
              <FaFileDownload className="mr-2" /> Download CSV
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded flex items-center">
              <FaFilter className="mr-2" /> Filter
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <span>Page 1 of 5</span>
            <select className="border rounded p-1" aria-label="Select Page">
              {[...Array(5)].map((_, i) => (
                <option key={i + 1}>{i + 1}</option>
              ))}
            </select>
            <select className="border rounded p-1" aria-label="Select Rows per Page">
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
