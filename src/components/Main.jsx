import { useState, useEffect } from 'react';
import Card from './Card';
import Notification from './Notification';
import AboutUs from './AboutUs';

const Main = () => {
    const images = [
        "./src/assets/slide_image_1.jpg",
        "./src/assets/slide_image_2.jpg",
        "./src/assets/slide_image_3.jpg",
        "./src/assets/slide_image_4.jpg",
    ];

    const notifications = [
        "The Panchayat & Rural Development Department, Assam, invites eligible rural residents to apply for the Pradhan Mantri Awaas Yojana – Gramin (PMAY-G) scheme...",
        "This is to inform all beneficiaries and stakeholders that payment processing under the Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA) may experience delays...",
        "New updates have been released for the PMAY-G scheme. Please check the official site for more details."
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically switch images every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images.length]);

    return (
        <main className="p-6">
            <div className="mb-8 h-[400px] w-full rounded-lg overflow-hidden shadow-lg relative">
                <img
                    alt="Rural Development Slideshow"
                    className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                    src={images[currentIndex]}
                    key={currentIndex}
                />
            </div>

            <div className="bg-gray-200 flex flex-wrap justify-evenly items-center py-2 mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
                <div className='flex items-center space-x-2'>
                    <label className="block mb-1 text-gray-600 font-medium">DISTRICTS:</label>
                    <select className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded shadow">
                        <option>ALL DISTRICTS</option>
                        {/* Add more district options here */}
                    </select>
                </div>
                <div className='flex items-center space-x-2'>
                    <label className="block mb-1 text-gray-600 font-medium">BLOCKS:</label>
                    <select className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded shadow">
                        <option>ALL BLOCKS</option>
                        {/* Add more block options here */}
                    </select>
                </div>
                <div className='flex items-center space-x-2'>
                    <label className="block mb-1 text-gray-600 font-medium">GPs:</label>
                    <select className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded shadow">
                        <option>ALL GPs</option>
                        {/* Add more GP options here */}
                    </select>
                </div>
                <div className='flex items-center space-x-2'>
                    <label className="block mb-1 text-gray-600 font-medium">DESIGNATIONS:</label>
                    <select className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded shadow">
                        <option>ALL DESIGNATIONS</option>
                        {/* Add more designation options here */}
                    </select>
                </div>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card title="MGNREGA" total="6565" inService="5720" imgSrc="./src/assets/MGNREGA.webp" />
                <Card title="PMAYG" total="370" inService="240" imgSrc="./src/assets/pmay-g-logo.png" />
                <Card title="14th FINANCE COMMISSION" total="6565" inService="5720" imgSrc="./src/assets/FC.webp" />
                <Card title="RGSA" total="62" inService="46" imgSrc="./src/assets/RGSA.jfif" />
                <Card title="NSAP" total="2" inService="0" imgSrc="./src/assets/NSAP.png" />
                <Card title="RURBAN" total="15" inService="8" imgSrc="./src/assets/RURBAN.jfif" />
                <Card title="SOCIAL ASSISTANT" total="12" inService="7" imgSrc="https://storage.googleapis.com/a1aa/image/eklfHD4FgntgkkjInSlgrzfh0rWbZFycr44tgP2cOJEd6ZWnA.jpg" />
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AboutUs />
                <Notification notifications={notifications} />
            </div>
        </main>
    );
};

export default Main;
