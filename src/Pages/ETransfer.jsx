import { Outlet, useNavigate } from "react-router-dom";
import ETransferSidebar from "../components/etransfer/ETransferSidebar";
import { FaChevronLeft, FaUserCircle } from "react-icons/fa";

function ETransfer() {
    const navigate = useNavigate();
  return (
    <>
      <header className="bg-white text-gray-800 p-4 flex justify-between items-center border-b border-gray-200">
        <div className="flex items-center">
            <div onClick={() => {navigate("/admindashboard");}} className="flex items-center cursor-pointer mr-4">
                <FaChevronLeft className="text-xl text-blue-500"/>
                <h1 className="text-md font-semibold">Back</h1>
            </div>
          {/* <img
            alt="e-Transfer Logo"
            className="mr-2 h-12 md:h-16"
            src="./Transfer.png"
          /> */}
          <div className="ml-2 text-blue-400">
            <p className="text-xs font-bold md:text-2xl">
              e-Transfer {" "}
            </p>
            <p className="text-xs font-bold md:text-2xl">
              {" "}
              Mangement System
            </p>
          </div>
        </div>
        <div
          onClick={() => {
            navigate("/admindashboard/profile");
          }}
         className="flex items-center space-x-2">
           <h1 className="text-xl font-semibold">Hello, Admin</h1> 
          <FaUserCircle className="text-4xl text-blue-500" />
        </div>
      </header>
      <div className="flex">
        <ETransferSidebar />
        <Outlet />
      </div>
    </>
  );
}

export default ETransfer;
