import { useState } from "react";
import {
  FaBars,
  FaHome,
  FaUsers,
  FaExchangeAlt,
  FaSearch,
  FaHourglassHalf,
  FaFileInvoice,
  FaHistory,
  FaTimesCircle,
  FaSearchPlus,
  FaChevronRight,
  FaChevronDown,
  FaUser,
  FaUserShield,
  FaLock,
} from "react-icons/fa";
import { FaRightFromBracket } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const DashboardSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar visibility on smaller screens
  const [showTransferSubmenu2, setShowTransferSubmenu2] = useState(false);
  const [showTransferSubmenu3, setShowTransferSubmenu3] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const toggleTransferSubmenu = (item) => {
    switch (item) {
      case 2:
        setShowTransferSubmenu2(!showTransferSubmenu2);
        break;
      case 3:
        setShowTransferSubmenu3(!showTransferSubmenu3);
        navigate("/admindashboard/mutualtransfersearch");
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Toggle button for smaller screens */}
      <button
        className="md:hidden p-4 text-gray-700 focus:outline-none"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 w-64 h-full bg-white shadow-md transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
      >
        <nav className="mt-6">
          <ul>
            <li
              onClick={() => navigate("/admindashboard")}
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer"
            >
              <FaHome className="mr-2" />
              Dashboard
            </li>
            <li
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer"
              onClick={() => toggleTransferSubmenu(2)}
            >
              <FaUsers className="mr-2" />
              Manage Users
              <span className="ml-auto">
                {showTransferSubmenu2 ? <FaChevronDown /> : <FaChevronRight />}
              </span>
            </li>
            {showTransferSubmenu2 && <Submenu2 />}
            <li
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer"
              onClick={() => toggleTransferSubmenu(3)}
            >
              <FaExchangeAlt className="mr-2" />
              Manage Mutual Transfer Request
              <span className="ml-auto">
                {showTransferSubmenu3 ? <FaChevronDown /> : <FaChevronRight />}
              </span>
            </li>
            {showTransferSubmenu3 && <Submenu3 />}
            
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"/>
            <li
              className="flex items-center px-4 py-2 text-red-700 hover:bg-gray-200 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <FaRightFromBracket className="mr-2" />
              Log Out
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

// Submenu components (no changes required for responsiveness)
const Submenu3 = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 p-4">
      <ul className="ml-6 mt-2">
        <li
          onClick={() => navigate("/admindashboard/mutualtransfersearch")}
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer"
        >
          <FaSearch className="mr-2" />
          Search
        </li>
        <li
          onClick={() => navigate("/admindashboard/mutualtransferpending")}
          className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer"
        >
          <FaHourglassHalf className="mr-2" />
          Pending
        </li>
        <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
          <FaHistory className="mr-2" />
          Order History
        </li>
        {/* <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
          <FaFileInvoice className="mr-2" />
          Order Generate
        </li>
        
        <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
          <FaTimesCircle className="mr-2" />
          Rejected
        </li>
        <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
          <FaSearchPlus className="mr-2" />
          Master Search
        </li> */}
      </ul>
    </div>
  );
};

const Submenu2 = () => {
  return (
    <div className="bg-gray-100 p-4">
      <ul className="ml-6 mt-2">
        <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
          <FaUser className="mr-2" />
          Users
        </li>
        <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
          <FaUserShield className="mr-2" />
          Roles & Permissions
        </li>
        <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
          <FaLock className="mr-2" />
          Permission
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
