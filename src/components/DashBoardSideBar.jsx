import { useState } from "react";
import {
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
import { useNavigate } from "react-router-dom";

const DashboardSidebar = () => {
  // State to track the visibility of the submenu
  const [showTransferSubmenu2, setShowTransferSubmenu2] = useState(false);
  const [showTransferSubmenu3, setShowTransferSubmenu3] = useState(false);
  const navigate = useNavigate();

  // Toggle submenu visibility
  function toggleTransferSubmenu(item) {
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
  }

  return (
    <div className="w-64 bg-white h-screen shadow-md">
      <nav className="mt-6">
        <ul>
          <li onClick={() => navigate("/admindashboard")} className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer">
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
          {/* Submenu for Manage Users */}
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
          {/* Submenu for Transfer Request */}
          {showTransferSubmenu3 && <Submenu3 />}
        </ul>
      </nav>
    </div>
  );
};

// Submenu component
const Submenu3 = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 p-4">
      <ul className="ml-6 mt-2">
        <li onClick={() => navigate("/admindashboard/mutualtransfersearch")} className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer">
          <FaSearch className="mr-2" />
          Search
        </li>
        <li onClick={() => navigate("/admindashboard/mutualtransferpending")} className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 cursor-pointer">
          <FaHourglassHalf className="mr-2" />
          Pending
        </li>
        <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
          <FaFileInvoice className="mr-2" />
          Order Generate
        </li>
        <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
          <FaHistory className="mr-2" />
          Order History
        </li>
        <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
          <FaTimesCircle className="mr-2" />
          Rejected
        </li>
        <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200">
          <FaSearchPlus className="mr-2" />
          Master Search
        </li>
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
