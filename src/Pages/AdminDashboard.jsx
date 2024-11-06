import DashboardSidebar from "../components/adminpage/DashBoardSideBar";
import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <DashboardSidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
