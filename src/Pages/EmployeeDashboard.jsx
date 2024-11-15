import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import EmplyoeeSidebar from "../components/employeepage/EmployeeSidebar";

function EmployeeDashboard() {
  return (
    <div>
      <Header />
      <div className="flex bg-gray-200">
        <EmplyoeeSidebar />
        <Outlet />
      </div>
    </div>
  );
}
export default EmployeeDashboard;
