const Header = () => (
    <header className="header p-4 flex justify-between items-center border-b border-gray-200">
        <div className="flex items-center">
            <img alt="Government Logo" className="mr-2" height="50" width="50" src="./src/assets/emblem-dark.png"  />
            <div>
                <h1 className="text-xl font-bold">HRMS</h1>
                <p>Panchayat & Rural Development Department, Assam</p>
            </div>
        </div>
        <div className="flex space-x-4">
            <img alt="Indian Flag" src="./src/assets/flag_india.gif" />
            <img alt="Swachh Bharat Logo" height="50" src="./src/assets/swach-bharat.png" width="100" />
        </div>
    </header>
);

export default Header;