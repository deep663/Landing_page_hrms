import { FaHandsHelping, FaBuilding, FaHome, FaPeopleArrows, FaBroom, FaUsers } from 'react-icons/fa';

const AboutUs = () => (
    <div id='about' className="about-us bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
        <h2 className="text-blue-500 font-semibold text-2xl mb-4">About Us</h2>
        <p className="text-gray-700 mb-4">
            The Panchayat & Rural Development Department largely works to enhance livelihood opportunities...
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li className="flex items-center">
                <FaHandsHelping className="text-blue-500 mr-2" />
                Reduction of Rural Poverty
            </li>
            <li className="flex items-center">
                <FaPeopleArrows className="text-blue-500 mr-2" />
                Employment Generation in Rural Areas
            </li>
            <li className="flex items-center">
                <FaBuilding className="text-blue-500 mr-2" />
                Development of Rural Infrastructure
            </li>
            <li className="flex items-center">
                <FaHome className="text-blue-500 mr-2" />
                Removal of Regional Imbalance
            </li>
            <li className="flex items-center">
                <FaBroom className="text-blue-500 mr-2" />
                Housing for Rural Poor
            </li>
            <li className="flex items-center">
                <FaUsers className="text-blue-500 mr-2" />
                Community Participation
            </li>
        </ul>
    </div>
);

export default AboutUs;
