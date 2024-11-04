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
          <h2 className="text-xl font-bold mb-4">Filter</h2>
          <div className="flex flex-col sm:flex-row items-center mb-4">
            <label className="mr-2 font-bold text-gray-800">Employee Code <span className="text-red-500">*</span></label>
            <input
              type="text"
              className="border rounded p-2 flex-grow mb-2 sm:mb-0"
              placeholder="Enter Employee Code"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-bold mb-2">District <span className="text-red-500">*</span></label>
              <select className="w-full p-2 border rounded bg-white">
                <option>Select District</option>
                <option>District 1</option>
                <option>District 2</option>
                <option>District 3</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Block <span className="text-red-500">*</span></label>
              <select className="w-full p-2 border rounded bg-white">
                <option>Select Block</option>
                <option>Block 1</option>
                <option>Block 2</option>
                <option>Block 3</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">GP <span className="text-red-500">*</span></label>
              <select className="w-full p-2 border rounded bg-white">
                <option>Select GP</option>
                <option>GP 1</option>
                <option>GP 2</option>
                <option>GP 3</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">Designation <span className="text-red-500">*</span></label>
              <select className="w-full p-2 border rounded bg-white">
                <option>Select Designation</option>
                <option>Designation 1</option>
                <option>Designation 2</option>
                <option>Designation 3</option>
              </select>
            </div>

          </div>
          <div className="flex justify-end mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 flex items-center gap-2">
              <FaSearch />
              Search</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2">
              <FaRedo />
              Reset</button>
          </div>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border">SNo</th>
                <th className="py-2 px-4 border">Employee Code</th>
                <th className="py-2 px-4 border">District of Employee 1</th>
                <th className="py-2 px-4 border">District of Employee 2</th>
                <th className="py-2 px-4 border">Submitted On</th>
                <th className="py-2 px-4 border">Last Action On</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b">1</td>
                <td className="py-2 px-4 border-b text-blue-700 font-semibold">PNRDGP00123</td>
                <td className="py-2 px-4 border-b">District1</td>
                <td className="py-2 px-4 border-b">District2</td>
                <td className="py-2 px-4 border-b">2024-11-04</td>
                <td className="py-2 px-4 border-b">2024-11-04</td>
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
