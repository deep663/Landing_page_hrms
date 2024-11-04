import { useState } from 'react';
import { FaDownload, FaRedo, FaSearch } from 'react-icons/fa';

const MutualTransferRequestPending = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleApprove = () => {
        setShowModal(!showModal);
    };

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
                        <label className="block text-sm font-bold mb-2">District Name<span className="text-red-500">*</span></label>
                        <input type="text" placeholder="District Name" className="w-full p-2 border rounded" />
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
                    <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2 flex items-center gap-2"><FaSearch />Search</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center gap-2"><FaRedo />  Reset</button>
                </div>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">SNo</th>
                            <th className="py-3 px-6 text-left">Employee Code 1</th>
                            <th className="py-3 px-6 text-left">Designation</th>
                            <th className="py-3 px-6 text-left">District of Employee 1</th>
                            <th className="py-3 px-6 text-left">Employee Code 2</th>
                            <th className="py-3 px-6 text-left">District of Employee 2</th>
                            <th className="py-3 px-6 text-left">Submitted On</th>
                            <th className="py-3 px-6 text-left">Last Action On</th>
                            <th className="py-3 px-6 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {[1, 2, 3, 4, 5].map((index) => (
                            <tr key={index} className="border-b font-semibold border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left">{index}.</td>
                                <td className="py-3 px-6 text-left text-blue-700">PNRDGP001{69 - index}</td>
                                <td className="py-3 px-6 text-left">Designation {index}</td>
                                <td className="py-3 px-6 text-left">District {index}</td>
                                <td className="py-3 px-6 text-left text-blue-700">PNRDGP001{69 - index}</td>
                                <td className="py-3 px-6 text-left">District {index}</td>
                                <td className="py-3 px-6 text-left">{new Date().toLocaleDateString()}</td>
                                <td className="py-3 px-6 text-left">{new Date().toLocaleDateString()}</td>
                                <td className="py-3 px-6 text-left">
                                    <button onClick={toggleApprove} className="bg-yellow-500 text-white px-4 py-2 rounded">View</button>
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

            {/* Modal Section */}
            {showModal && <ApproveModal toggleApprove={toggleApprove} />}
        </div>
    );
};

const ApproveModal = ({ toggleApprove }) => {
    return (
        <div className="bg-black bg-opacity-30 fixed inset-0 h-screen w-full flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg w-1/2">
                <div className="bg-blue-900 text-white text-lg font-semibold p-4 rounded-t-lg flex justify-between items-center">
                    <span>Approve Mutual Employee Transfer</span>
                    <i className="fas fa-times cursor-pointer" onClick={toggleApprove}></i>
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
                        <button className="bg-red-500 text-white font-semibold py-2 px-6 rounded hover:bg-red-600" onClick={toggleApprove}>
                            CANCEL
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MutualTransferRequestPending;
