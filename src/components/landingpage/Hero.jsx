import { useState, useEffect } from "react";
import Card from "./Card";
import Notification from "./Notification";
import AboutUs from "./AboutUs";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero = () => {
  const images = [
    "./Picture1.jpg",
    "./Picture2.jpeg",
    "./Picture3.jpeg",
    "./Picture5.jpg",
    "./Picture6.jpg",
    "./Picture7.jpg",
  ];

  const captions = [
    "Mission Amrit Sarovar: Wage Employment to Sustainable Livelihood.",
    "Digital Transformation: Introducing e-Panchayat initiatives for improved governance and transparency.",
    "Empowering Farmers: Enhancing agricultural productivity through innovative training programs.",
    "Asset Creation: Developing community infrastructure projects to improve living standards in rural areas.",
    "Skill Development: Launching vocational training programs to boost local employment opportunities.",
    "Community Engagement: Organizing awareness campaigns on sanitation and hygiene for healthier villages.",
    "Rural Connectivity: Constructing new roads to link remote areas with urban centers.",
    "Water Conservation: Implementing rainwater harvesting systems to ensure sustainable water supply.",
    "Health Initiatives: Expanding access to healthcare services in rural communities through mobile clinics.",
    "Women Empowerment: Supporting self-help groups to foster entrepreneurship among women in villages.",
    "Sustainable Livelihoods: Promoting eco-friendly practices in farming to enhance resilience against climate change.",
  ];

  const notifications = [
    "The Panchayat & Rural Development Department, Assam, invites eligible rural residents to apply for the Pradhan Mantri Awaas Yojana – Gramin (PMAY-G) scheme...",
    "This is to inform all beneficiaries and stakeholders that payment processing under the Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA) may experience delays...",
    "New updates have been released for the PMAY-G scheme. Please check the official site for more details.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
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
            <FaChevronRight /> {/* Next Arrow */}
          </button>
        </div>
        <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black bg-opacity-50 p-2">
          {captions[currentIndex]}{" "}
          {/* Display the caption for the current image */}
        </div>
        <div className="flex justify-center mt-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 mx-1 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>

      <div className="bg-gray-200 flex flex-wrap justify-evenly items-center py-4 mb-8 space-y-4 sm:space-y-0 sm:space-x-4">
        <FilterEmployeeCount />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AboutUs />
        <Notification notifications={notifications} />
      </div>
    </main>
  );
};

const FilterEmployeeCount = () => {
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedBlock, setSelectedBlock] = useState("");
  const [selectedGP, setSelectedGP] = useState("");

  const dummyData = {
    District1: {
      Block1: {
        GP1: {
          MGNREGA: 150,
          PMAYG: 200,
          "14th FINANCE COMMISSION": 50,
          RGSA: 30,
          NSAP: 20,
          RURBAN: 10,
          CFP: 0,
        },
        GP2: {
          MGNREGA: 120,
          PMAYG: 180,
          "14th FINANCE COMMISSION": 60,
          RGSA: 40,
          NSAP: 25,
          RURBAN: 15,
          CFP: 5,
        },
      },
      Block2: {
        GP1: {
          MGNREGA: 90,
          PMAYG: 250,
          "14th FINANCE COMMISSION": 70,
          RGSA: 50,
          NSAP: 30,
          RURBAN: 12,
          CFP: 0,
        },
        GP2: {
          MGNREGA: 200,
          PMAYG: 210,
          "14th FINANCE COMMISSION": 80,
          RGSA: 20,
          NSAP: 35,
          RURBAN: 8,
          CFP: 4,
        },
      },
    },
    District2: {
      Block1: {
        GP1: {
          MGNREGA: 160,
          PMAYG: 230,
          "14th FINANCE COMMISSION": 40,
          RGSA: 25,
          NSAP: 18,
          RURBAN: 11,
          CFP: 0,
        },
        GP2: {
          MGNREGA: 140,
          PMAYG: 195,
          "14th FINANCE COMMISSION": 55,
          RGSA: 35,
          NSAP: 22,
          RURBAN: 13,
          CFP: 0,
        },
      },
      Block2: {
        GP1: {
          MGNREGA: 3,
          PMAYG: 2,
          "14th FINANCE COMMISSION": 65,
          RGSA: 45,
          NSAP: 28,
          RURBAN: 14,
          CFP: 0,
        },
        GP2: {
          MGNREGA: 2,
          PMAYG: 3,
          "14th FINANCE COMMISSION": 75,
          RGSA: 1,
          NSAP: 3,
          RURBAN: 9,
          CFP: 2,
        },
      },
    },
  };

  const calculateTotalCounts = () => {
    let totalCounts = {
      MGNREGA: 0,
      PMAYG: 0,
      "14th FINANCE COMMISSION": 0,
      RGSA: 0,
      NSAP: 0,
      RURBAN: 0,
      CFP: 0,
    };

    const districts = selectedDistrict
      ? [selectedDistrict]
      : Object.keys(dummyData);
    districts.forEach((district) => {
      const blocks = selectedBlock
        ? [selectedBlock]
        : Object.keys(dummyData[district]);
      blocks.forEach((block) => {
        const gps = selectedGP
          ? [selectedGP]
          : Object.keys(dummyData[district][block]);
        gps.forEach((gp) => {
          const schemeCounts = dummyData[district][block][gp];
          Object.keys(schemeCounts).forEach((scheme) => {
            totalCounts[scheme] += schemeCounts[scheme];
          });
        });
      });
    });

    return totalCounts;
  };

  const totalCounts = calculateTotalCounts();

  return (
    <div>
      <div className="flex items-center justify-evenly mb-4">
        {/* Districts Dropdown */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
          <label className="text-gray-600 font-medium">DISTRICTS:</label>
          <select
            className="bg-white border-2 border-blue-300 text-gray-700 px-4 py-2 rounded-full shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-full sm:w-auto"
            value={selectedDistrict}
            onChange={(e) => {
              setSelectedDistrict(e.target.value);
              setSelectedBlock(""); // Reset block when district changes
              setSelectedGP(""); // Reset GP when district changes
            }}
          >
            <option value="">ALL DISTRICTS</option>
            <option value="District1">District 1</option>
            <option value="District2">District 2</option>
          </select>
        </div>

        {/* Blocks Dropdown */}
        {selectedDistrict && (
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
            <label className="text-gray-600 font-medium">BLOCKS:</label>
            <select
              className="bg-white border-2 border-blue-300 text-gray-700 px-4 py-2 rounded-full shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-full sm:w-auto"
              value={selectedBlock}
              onChange={(e) => {
                setSelectedBlock(e.target.value);
                setSelectedGP(""); // Reset GP when block changes
              }}
            >
              <option value="">ALL BLOCKS</option>
              {selectedDistrict &&
                Object.keys(dummyData[selectedDistrict]).map((block) => (
                  <option key={block} value={block}>
                    {block}
                  </option>
                ))}
            </select>
          </div>
        )}

        {/* GPs Dropdown */}
        {selectedBlock && (
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
            <label className="text-gray-600 font-medium">GPs:</label>
            <select
              className="bg-white border-2 border-blue-300 text-gray-700 px-4 py-2 rounded-full shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-full sm:w-auto"
              value={selectedGP}
              onChange={(e) => setSelectedGP(e.target.value)}
            >
              <option value="">ALL GPs</option>
              {selectedBlock &&
                Object.keys(dummyData[selectedDistrict][selectedBlock]).map(
                  (gp) => (
                    <option key={gp} value={gp}>
                      {gp}
                    </option>
                  )
                )}
            </select>
          </div>
        )}
      </div>
      <div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card
            title="MGNREGA"
            total={totalCounts.MGNREGA}
            imgSrc="./MGNREGA.webp"
          />
          <Card
            title="PMAYG"
            total={totalCounts.PMAYG}
            imgSrc="./pmay-g-logo.png"
          />
          <Card
            title="14th FINANCE COMMISSION"
            total={totalCounts["14th FINANCE COMMISSION"]}
            imgSrc="./FC.webp"
          />
          <Card title="RGSA" total={totalCounts.RGSA} imgSrc="./RGSA.jfif" />
          <Card title="NSAP" total={totalCounts.NSAP} imgSrc="./NSAP.png" />
          <Card
            title="RURBAN"
            total={totalCounts.RURBAN}
            imgSrc="./Rurban.jpg"
          />
          <Card title="CFP" total={totalCounts.CFP} imgSrc="./CFP.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
