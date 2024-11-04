import { FaDownload } from 'react-icons/fa';

const MutualTransferRequestPending = () => {
    return (
        <div className="container mx-auto bg-white p-6 rounded shadow">
            <div className="mb-4">
                <h1 className="text-2xl font-bold">MUTUAL TRANSFER REQUEST - PENDING</h1>
            </div>

            {/* Filter Section */}
            <div className="bg-gray-200 p-4 rounded mb-4">
                <h2 className="text-xl font-bold mb-4">Filter</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                        <label className="block text-sm font-bold mb-2">Application No <span className="text-red-500">*</span></label>
                        <input type="text" placeholder="Application No" className="w-full p-2 border rounded" />
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
                    <div>
                        <label className="block text-sm font-bold mb-2">From Date <span className="text-red-500">*</span></label>
                        <input type="date" className="w-full p-2 border rounded" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2">To Date <span className="text-red-500">*</span></label>
                        <input type="date" className="w-full p-2 border rounded" />
                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Search</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded">Reset</button>
                </div>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">SNo</th>
                            <th className="py-3 px-6 text-left">Application No.</th>
                            <th className="py-3 px-6 text-left">District of Employee 1</th>
                            <th className="py-3 px-6 text-left">District of Employee 2</th>
                            <th className="py-3 px-6 text-left">Submitted On</th>
                            <th className="py-3 px-6 text-left">Last Action On</th>
                            <th className="py-3 px-6 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {[1, 2, 3, 4, 5].map((index) => (
                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left">{index}.</td>
                                <td className="py-3 px-6 text-left">EE/M-03-00000{69 - index}</td>
                                <td className="py-3 px-6 text-left">District {index}</td>
                                <td className="py-3 px-6 text-left">District {index}</td>
                                <td className="py-3 px-6 text-left">{new Date().toLocaleDateString()}</td>
                                <td className="py-3 px-6 text-left">{new Date().toLocaleDateString()}</td>
                                <td className="py-3 px-6 text-left">
                                    <button className="bg-yellow-500 text-white px-4 py-2 rounded">View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination and Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center mb-4 sm:mb-0" aria-label="Download CSV">
                    <FaDownload className="mr-2" /> Download CSV
                </button>

                <div className="flex items-center mb-4 sm:mb-0">
                    <span className="mr-2">Page 1 of 15</span>
                    <button className="bg-gray-300 text-gray-700 px-2 py-1 rounded mr-1" aria-label="First Page">&lt;&lt;</button>
                    <button className="bg-gray-300 text-gray-700 px-2 py-1 rounded mr-1" aria-label="Previous Page">&lt;</button>
                    <button className="bg-gray-300 text-gray-700 px-2 py-1 rounded mr-1" aria-label="Next Page">&gt;</button>
                    <button className="bg-gray-300 text-gray-700 px-2 py-1 rounded" aria-label="Last Page">&gt;&gt;</button>
                </div>

                <div>
                    <select className="p-2 border rounded" aria-label="Rows per page">
                        {[5, 10, 15, 20].map((num) => (
                            <option key={num}>Show {num}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default MutualTransferRequestPending;
