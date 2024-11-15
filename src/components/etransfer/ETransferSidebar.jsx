import {
    FaFileExcel,
    FaHistory,
    FaHome,
    FaHourglassHalf,
    FaSearch,
    FaTimesCircle,
    FaUserCheck,
  } from "react-icons/fa";
  import { useNavigate, useLocation } from "react-router-dom";
  
  function ETransferSidebar() {
    const navigate = useNavigate();
    const location = useLocation();
  
    const menuItems = [
      {
        label: "Home",
        icon: <FaHome className="mr-2" />,
        path: "/etransfer",
      },
      {
        label: "Search",
        icon: <FaSearch className="mr-2" />,
        path: "/etransfer/search",
      },
      {
        label: "Approved",
        icon: <FaUserCheck className="mr-2" />,
        path: "/etransfer/approved",
      },
      {
        label: "Pending",
        icon: <FaHourglassHalf className="mr-2" />,
        path: "/etransfer/pending",
      },
      {
        label: "Rejected",
        icon: <FaTimesCircle className="mr-2" />,
        path: "/eTransfer/rejected",
      },
      {
        label: "Transfer History",
        icon: <FaHistory className="mr-2" />,
        path: "/eTransfer/history",
      },
      {
        label: "Reports",
        icon: <FaFileExcel className="mr-2" />,
        path: "/eTransfer/reports",
      },
    ];
  
    return (
      <div className="bg-white py-2 min-h-screen w-64 shadow-md z-50">
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`flex items-center px-4 py-2 text-gray-700 font-semibold cursor-pointer ${
                location.pathname === item.path ? "bg-blue-600 text-white border-l-4 border-red-500 hover:bg-blue-600" : "hover:bg-gray-300"
              }`}
              tabIndex={0}
              aria-label={item.label}
            >
              {item.icon}
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ETransferSidebar;