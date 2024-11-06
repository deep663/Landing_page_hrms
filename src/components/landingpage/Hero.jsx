import { useState, useEffect } from 'react';
import Card from './Card';
import Notification from './Notification';
import AboutUs from './AboutUs';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Hero = () => {
    const images = [
        "./Picture1.jpg",
        "./Picture2.jpeg",
        "./Picture3.jpeg",
        "./Picture5.jpg",
        "./Picture6.jpg",
       
    ];

    const captions = [
        "Mission Amrit Sarovar: Wage Employment to Sustainable Livelihood.",
        "Rural Infrastructure: Building roads to connect remote villages.",
        "Sustainable Practices: Introducing eco-friendly farming techniques.",
        "Community Health: Providing essential medical services to rural areas.",
    ];

    const notifications = [
        "The Panchayat & Rural Development Department, Assam, invites eligible rural residents to apply for the Pradhan Mantri Awaas Yojana – Gramin (PMAY-G) scheme...",
        "This is to inform all beneficiaries and stakeholders that payment processing under the Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA) may experience delays...",
        "New updates have been released for the PMAY-G scheme. Please check the official site for more details."
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedBlock, setSelectedBlock] = useState('');

    // Automatically switch images every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    // Navigation functions
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };


    return (
        <main id="home" className="p-6">
            <div className="mb-8 h-[400px] w-full overflow-hidden shadow-lg relative">
            <img
                alt="Rural Development Slideshow"
                className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-100"
                src={images[currentIndex]}
                key={currentIndex}
            />
            <div className="absolute inset-0 flex justify-between items-center">
                <button
                    onClick={prevImage}
                    className="bg-white bg-opacity-70 p-2 rounded-full shadow-lg hover:bg-opacity-100 transition"
                >
                    <FaChevronLeft /> {/* Previous Arrow */}
                </button>
                <button
                    onClick={nextImage}
                    className="bg-white bg-opacity-70 p-2 rounded-full shadow-lg hover:bg-opacity-100 transition"
                >
                    <FaChevronRight />   {/* Next Arrow */}
                </button>
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black bg-opacity-50 p-2">
                {captions[currentIndex]} {/* Display the caption for the current image */}
            </div>
            <div className="flex justify-center mt-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 w-2 mx-1 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
                    ></button>
                ))}
            </div>
        </div>

            <div className="bg-gray-200 flex flex-wrap justify-evenly items-center py-4 mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
                {/* Districts Dropdown */}
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
                    <label className="text-gray-600 font-medium">DISTRICTS:</label>
                    <select
                        className="bg-white border-2 border-blue-300 text-gray-700 px-4 py-2 rounded-full shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-full sm:w-auto"
                        value={selectedDistrict}
                        onChange={(e) => {
                            setSelectedDistrict(e.target.value);
                            setSelectedBlock(''); // Reset block when district changes
                        }}
                    >
                        <option value="">ALL DISTRICTS</option>
                        {/* Add district options here */}
                        <option value="District1">District 1</option>
                        <option value="District2">District 2</option>
                    </select>
                </div>

                {/* Blocks Dropdown - Shown only if a district is selected */}
                {selectedDistrict && (
                    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
                        <label className="text-gray-600 font-medium">BLOCKS:</label>
                        <select
                            className="bg-white border-2 border-blue-300 text-gray-700 px-4 py-2 rounded-full shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-full sm:w-auto"
                            value={selectedBlock}
                            onChange={(e) => setSelectedBlock(e.target.value)}
                        >
                            <option value="">ALL BLOCKS</option>
                            {/* Add block options here */}
                            <option value="Block1">Block 1</option>
                            <option value="Block2">Block 2</option>
                        </select>
                    </div>
                )}

                {/* GPs Dropdown - Shown only if a block is selected */}
                {selectedBlock && (
                    <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
                        <label className="text-gray-600 font-medium">GPs:</label>
                        <select
                            className="bg-white border-2 border-blue-300 text-gray-700 px-4 py-2 rounded-full shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-full sm:w-auto"
                        >
                            <option>ALL GPs</option>
                            {/* Add GP options here */}
                            <option value="GP1">GP 1</option>
                            <option value="GP2">GP 2</option>
                        </select>
                    </div>
                )}

                {/* Designations Dropdown */}
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
                    <label className="text-gray-600 font-medium">DESIGNATIONS:</label>
                    <select className="bg-white border-2 border-blue-300 text-gray-700 px-4 py-2 rounded-full shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-full sm:w-auto">
                        <option>ALL DESIGNATIONS</option>
                        {/* Add designation options here */}
                    </select>
                </div>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card title="MGNREGA" total="6565" imgSrc="./MGNREGA.webp" />
                <Card title="PMAYG" total="370" imgSrc="./pmay-g-logo.png" />
                <Card title="14th FINANCE COMMISSION" total="6565"  imgSrc="./FC.webp" />
                <Card title="RGSA" total="62" imgSrc="./RGSA.jfif" />
                <Card title="NSAP" total="2"  imgSrc="./NSAP.png" />
                <Card title="RURBAN" total="15"  imgSrc="./Rurban.jpg" />
                <Card title="CFP" total="12"  imgSrc="./CFP.jpg"/>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AboutUs />
                <Notification notifications={notifications} />
            </div>
        </main>
    );
};

export default Hero;
