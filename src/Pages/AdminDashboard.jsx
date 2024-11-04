import DashboardSidebar from "../components/Adminpage/DashBoardSideBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <DashboardSidebar />
      <Outlet />
    </div>
  );
};

export default Dashboard;
