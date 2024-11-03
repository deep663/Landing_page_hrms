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
        <div className="bg-gray-200 p-4 rounded mb-4">
          <h2 className="text-lg font-bold mb-2">Filter</h2>
          <div className="flex items-center mb-4">
            <label
              htmlFor="applicationNo"
              className="mr-2 font-bold text-red-600"
            >
              Application No *
            </label>
            <input
              type="text"
              id="applicationNo"
              className="border rounded p-2 flex-grow"
              placeholder="Application No"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded ml-2">
              <FaSearch /> Search
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded ml-2">
              <FaRedo /> Reset
            </button>
          </div>
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            <FaRedo /> Reset Filter
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border">SNo</th>
                <th className="py-2 px-4 border">
                  <span>Application No.</span>
                  <input
                    type="text"
                    className="mt-2 border rounded p-1 w-full"
                  />
                </th>
                <th className="py-2 px-4 border">
                  District of Employee 1
                  <select className="mt-2 border rounded p-1 w-full">
                    <option>All</option>
                  </select>
                </th>
                <th className="py-2 px-4 border">
                  District of Employee 2
                  <select className="mt-2 border rounded p-1 w-full">
                    <option>All</option>
                  </select>
                </th>
                <th className="py-2 px-4 border">Submitted On</th>
                <th className="py-2 px-4 border">Last Action On</th>
                <th className="py-2 px-4 border">Action</th>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b">1</td>
                <td className="py-2 px-4 border-b">xyz123</td>
                <td className="py-2 px-4 border-b">District1</td>
                <td className="py-2 px-4 border-b">District2</td>
                <td className="py-2 px-4 border-b"></td>
                <td className="py-2 px-4 border-b"></td>
                <td className="py-2 px-4 border-b"></td>
              </tr>
            </thead>
          </table>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              <FaFileDownload /> Download CSV
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded">
              <FaFilter /> Filter
            </button>
          </div>
          <div className="flex items-center">
            <span className="mr-2">Page 1 of 0</span>
            <select className="border rounded p-1 mr-2">
              <option>1</option>
            </select>
            <select className="border rounded p-1">
              <option>Show 5</option>
            </select>
          </div>
          <div className="flex items-center">
            <button className="bg-blue-500 text-white px-2 py-1 rounded-l">
              <FaAngleDoubleLeft />
            </button>
            <button className="bg-blue-500 text-white px-2 py-1">
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
