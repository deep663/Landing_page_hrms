import DashboardCards from "./DashboardCards";
import EmployeeHeader from "./EmployeeHeader";
import ProfileSidebar from "./ProfileSidebar";

function EmpDashboard() {
  return (
    <div className="flex w-full">
      <div className="w-4/5 p-6">
        <EmployeeHeader />
        <DashboardCards />
      </div>

      <ProfileSidebar />
    </div>
  );
}

export default EmpDashboard;
