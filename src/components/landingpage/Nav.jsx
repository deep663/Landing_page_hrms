import { useState } from 'react';
import { FaHome, FaInfoCircle, FaPhoneAlt, FaQuestionCircle, FaBars, FaTimes } from 'react-icons/fa';
import UserLoginForm from './Login';

const Nav = () => {
    const [activeItem, setActiveItem] = useState('HOME');
    const [isModalActive, setIsModalActive] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleModal = () => {
        setIsModalActive(!isModalActive);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className="bg-white max-w-full px-4 flex justify-between items-center border-b border-gray-200 shadow-md">

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
                    {['HOME', 'ABOUT', 'CONTACT', 'FAQS'].map((item) => (
                        <li
                            key={item}
                            className={`flex items-center space-x-2 ${
                                activeItem === item ? 'border-b-2 border-blue-500' : ''
                            }`}
                            onClick={() => setActiveItem(item)}
                        >
                            {item === 'HOME' && <FaHome className="text-blue-500" />}
                            {item === 'ABOUT' && <FaInfoCircle className="text-blue-500" />}
                            {item === 'CONTACT' && <FaPhoneAlt className="text-blue-500" />}
                            {item === 'FAQS' && <FaQuestionCircle className="text-blue-500" />}
                            <a
                                className="text-gray-800 hover:text-blue-500 p-2 rounded transition-colors duration-300"
                                href={`#${item.toLowerCase()}`}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Icon */}
                <div className="md:hidden w-full flex justify-between">
                    <button onClick={toggleMenu} className="text-blue-600">
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                    <button
                        onClick={toggleModal}
                        className="text-white border border-green-600 px-6 py-2 rounded-full bg-green-500 transition-colors duration-300"
                    >
                        Log In
                    </button>
                </div>

                {/* Log In Button */}
                <button
                    onClick={toggleModal}
                    className="hidden md:inline-block text-white font-bold border border-green-600 px-6 py-2 rounded-full shadow-md bg-green-500 hover:bg-white hover:text-green-500 transition-colors duration-300"
                >
                    LOG IN
                </button>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <ul className="md:hidden flex flex-col items-center space-y-2 p-4 border-t border-gray-200 bg-white">
                    {['HOME', 'ABOUT', 'CONTACT', 'FAQS'].map((item) => (
                        <li
                            key={item}
                            className={`flex items-center space-x-2 ${
                                activeItem === item ? 'border-b-2 border-blue-500' : ''
                            }`}
                            onClick={() => {
                                setActiveItem(item);
                                setMenuOpen(false); // Close menu on item select
                            }}
                        >
                            {item === 'HOME' && <FaHome className="text-blue-500" />}
                            {item === 'ABOUT' && <FaInfoCircle className="text-blue-500" />}
                            {item === 'CONTACT' && <FaPhoneAlt className="text-blue-500" />}
                            {item === 'FAQS' && <FaQuestionCircle className="text-blue-500" />}
                            <a
                                className="text-gray-800 hover:text-blue-500 p-2 rounded transition-colors duration-300"
                                href="#"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                    {/* <button
                        onClick={toggleModal}
                        className="text-white border border-green-600 px-6 py-2 rounded-full bg-green-500 hover:bg-green-600 hover:text-white transition-colors duration-300 mt-4"
                    >
                        Log In
                    </button> */}
                </ul>
            )}

            {/* Modal */}
            {isModalActive && <UserLoginForm onClose={toggleModal} />}
        </>
    );
};

export default Nav;
