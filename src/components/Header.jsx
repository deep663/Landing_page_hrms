import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="header p-4 flex max-w-full justify-between items-center border-b border-gray-200">
            <div onClick={() => navigate("/")} className="flex items-center">
                <img alt="Government Logo" className="mr-2 h-14 md:h-20" src="./emblem-dark.png" />
                <div>
                    <h1 className="text-md md:text-3xl font-bold">HRMS</h1>
                    <p className="text-xs font-semibold md:text-base">Panchayat & Rural </p>
                    <p className="text-xs font-semibold md:text-base"> Development, Assam</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-x-4 ">
                <img alt="Indian Flag" className="h-8 md:h-10" src="./flag_india.gif" />
                <img alt="Swachh Bharat Logo" className="h-8 md:h-10" src="./swach-bharat.png" />
            </div>
        </header>
    )
};

export default Header;