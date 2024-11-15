import { FaHome, FaSync, FaUser } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const EmplyoeeSidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        {
            label: "Dashboard",
            icon: <FaHome className="mr-2" />,
            path: "/employeedashboard",
        },
        {
            label: "Profile",
            icon: <FaUser className="mr-2" />,
            path: "/employeedashboard/profile",
        },
        {
            label: "Mutual Transfer",
            icon: <FaSync className="mr-2" />,
            path: "/employeedashboard/mutualtransfer",
        },
    ];

    return (
        <div className="w-1/5 bg-white h-screen shadow-lg">
            <ul className="mt-10">
                {menuItems.map((item) => (
                    <li
                        key={item.label}
                        onClick={() => navigate(item.path)}
                        className={`flex items-center px-4 py-2 text-gray-600 hover:cursor-pointer ${
                            location.pathname === item.path 
                                ? "bg-blue-600 text-white border-l-4" : "hover:bg-gray-300"  
                        }`}
                    >
                        {item.icon} {item.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmplyoeeSidebar;