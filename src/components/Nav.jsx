import { useState } from 'react';
import { FaHome, FaInfoCircle, FaPhoneAlt, FaQuestionCircle } from 'react-icons/fa';
import UserLoginForm from './Login';

const Nav = () => {
    const [activeItem, setActiveItem] = useState('HOME');
    const [isModalActive, setIsModalActive] = useState(false);

    const toggleModal = () => {
        setIsModalActive(!isModalActive);
    };

    return (
        <>
            <nav className="bg-white px-4 flex justify-between items-center border-b border-gray-200 shadow-md">
                <ul className="flex space-x-6">
                    <li className={`flex items-center space-x-2 ${activeItem === 'HOME' ? 'border-b-2 border-blue-500' : 'border-none'}`} onClick={() => setActiveItem('HOME')}>
                        <FaHome className="text-blue-500" />
                        <a className="text-gray-800 hover:text-blue-500 p-2 rounded transition-colors duration-300" href="#">HOME</a>
                    </li>
                    <li className={`flex items-center space-x-2 ${activeItem === 'ABOUT' ? 'border-b-2 border-blue-500' : 'border-none'}`} onClick={() => setActiveItem('ABOUT')}>
                        <FaInfoCircle className="text-blue-500" />
                        <a className="text-gray-800 hover:text-blue-500 p-2 rounded transition-colors duration-300" href="#">ABOUT US</a>
                    </li>
                    <li className={`flex items-center space-x-2 ${activeItem === 'CONTACT' ? 'border-b-2 border-blue-500' : 'border-none'}`} onClick={() => setActiveItem('CONTACT')}>
                        <FaPhoneAlt className="text-blue-500" />
                        <a className="text-gray-800 hover:text-blue-500 p-2 rounded transition-colors duration-300" href="#">CONTACT US</a>
                    </li>
                    <li className={`flex items-center space-x-2 ${activeItem === 'FAQS' ? 'border-b-2 border-blue-500' : 'border-none'}`} onClick={() => setActiveItem('FAQS')}>
                        <FaQuestionCircle className="text-blue-500" />
                        <a className="text-gray-800 hover:text-blue-500 p-2 rounded transition-colors duration-300" href="#">FAQs</a>
                    </li>
                </ul>
                <button onClick={toggleModal} className="text-blue-600 border border-blue-600 px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                    Log In
                </button>
            </nav>
            {isModalActive && (
                <UserLoginForm onClose={toggleModal} />
            )}
        </>
    );
};

export default Nav;
