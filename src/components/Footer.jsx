import { FaEnvelope, FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
    <footer className="footer p-8 mt-8 bg-gradient-to-b from-blue-600 to-blue-900 text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div className="flex items-center mb-4 md:mb-0">
                <div>
                    <h2 className="text-3xl font-bold">HRMS</h2>
                    <p className="text-base">Panchayat & Rural Development, Assam</p>
                </div>
            </div>
            <div className="flex items-center text-base mb-4 md:mb-0">
                <div>
                    <div className="flex items-center">
                        <FaEnvelope className="mr-2" /> {/* Email Icon */}
                        <p className="font-semibold">Email</p>
                    </div>
                    <p className="hover:underline cursor-pointer">example@gmail.com</p>
                </div>
            </div>
            <div className="flex items-center text-base">
                <div>
                    <div className="flex items-center">
                        <FaPhoneAlt className="mr-2" /> {/* Phone Icon */}
                        <p className="font-semibold">Contact Numbers</p>
                    </div>
                    <p>123-456-7890</p>
                    <p>098-765-4321</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 border-t border-gray-200 pt-4">
            <ul className="flex space-x-8 mb-4 md:mb-0 text-base">
                <li><a className="hover:underline transition duration-300" href="#">HOME</a></li>
                <li><a className="hover:underline transition duration-300" href="#">ABOUT US</a></li>
                <li><a className="hover:underline transition duration-300" href="#">FAQ</a></li>
            </ul>
            <div className="flex space-x-4 mb-4 md:mb-0">
                <a href="#"><FaFacebook className="hover:text-blue-400 transition duration-300" /></a>
                <a href="#"><FaTwitter className="hover:text-blue-400 transition duration-300" /></a>
                <a href="#"><FaLinkedin className="hover:text-blue-400 transition duration-300" /></a>
            </div>
            <p className="text-sm text-center md:text-right">
                ©2024, P&RD HRMS, DEVELOPED & MAINTAINED BY GRATIA TECHNOLOGY.
            </p>
        </div>
    </footer>
);

export default Footer;
