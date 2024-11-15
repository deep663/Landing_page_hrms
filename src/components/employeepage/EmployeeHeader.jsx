import { FaBell } from "react-icons/fa";

const EmployeeHeader = () => {
    const notificationCount = 3; // Example notification count

    return (
        <div className="flex justify-between items-center mb-6">
            <div>
                <h2 className="text-2xl font-bold">Dashboard</h2>
            </div>
            <div className="flex items-center">
                <div className="relative mr-4">
                    <FaBell className="text-2xl text-gray-600" />
                    {notificationCount > 0 && (
                        <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-600 rounded-full">
                            {notificationCount}
                        </span>
                    )}
                </div>
                <div className="flex items-center">
                    <img alt="Profile Picture" className="rounded-full mr-2" height="40" src="./user3.webp" width="40" />
                    <div>
                        <p className="text-gray-800 font-bold">David Spade</p>
                        <p className="text-gray-600">Employee</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeHeader;