import { useState, useEffect } from 'react';
import Card from './Card';
import Notification from './Notification';
import AboutUs from './AboutUs';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Hero = () => {
    const images = [
        "./src/assets/slide_image_1.jpg",
        "./src/assets/slide_image_2.jpg",
        "./src/assets/slide_image_3.jpg",
        "./src/assets/slide_image_4.jpg",
    ];

    const captions = [
        "Empowering Communities: Farmers harvesting crops under the bright sun.",
        "Sustainable Practices: Introducing eco-friendly farming techniques.",
        "Rural Infrastructure: Building roads to connect remote villages.",
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

        return () => clearInterval(interval); // Cleanup on unmount
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

export default Hero;