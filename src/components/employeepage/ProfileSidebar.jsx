import { FaEnvelope, FaIdCard, FaMapMarker, FaPhone } from "react-icons/fa";
import PropType from "prop-types";
import { useEffect, useState } from "react";

const ProfileSidebar = () => {
    const [profilePercentage, setProfilePercentage] = useState(80);

    return (
        <div className="w-1/5 bg-white p-6 shadow-lg rounded ml-6">
            <div className="text-center mb-6">
                <div className="relative w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                    {/* <div className="absolute inset-0 rounded-full border-4 border-blue-500"></div> */}
                    <ProgressRing percentage={profilePercentage} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-blue-500 text-lg font-bold">
                        Profile <span className="text-blue-500 text-xs">{profilePercentage}% Complete </span>
                    </div>
                </div>
            </div>
            <div className="text-center mb-6">
                <h4 className="text-lg font-bold">Hello,</h4>
                <p className="text-xl font-bold">David Spade</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4">Profile Approved</button>
            </div>
            <div className="text-left">
                <p className="flex items-center mb-2">
                    <FaPhone className="mr-2" />
                    +91 8873210055
                </p>
                <p className="flex items-center mb-2">
                    <FaEnvelope className="mr-2" />
                    david@gmail.com
                </p>
                <p className="flex items-center mb-2">
                    <FaIdCard className="mr-2" />
                    PNRDGP0001
                </p>
                <p className="flex items-center">
                    <FaMapMarker className="mr-2" />
                    Kamrup Metro, Rani PT-5, Dharapur
                </p>
            </div>
        </div>
    );
};

const ProgressRing = ({ percentage }) => {
    const radius = 60; // Radius of the circle
    const strokeWidth = 5; // Width of the stroke
    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    // State for animation
    const [animatedPercentage, setAnimatedPercentage] = useState(0);

    useEffect(() => {
        const animationDuration = 1000; // Duration of the animation in milliseconds
        const stepTime = 10; // Time between each step in milliseconds
        const totalSteps = animationDuration / stepTime;
        const increment = percentage / totalSteps;

        let currentStep = 0;
        const interval = setInterval(() => {
            if (currentStep < totalSteps) {
                setAnimatedPercentage(prev => Math.min(prev + increment, percentage));
                currentStep++;
            } else {
                clearInterval(interval);
            }
        }, stepTime);

        return () => clearInterval(interval);
    }, [percentage]);

    const animatedStrokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

    return (
        <svg height={radius * 2} width={radius * 2}>
            <circle
                stroke="#e6e6e6"
                fill="transparent"
                strokeWidth={strokeWidth}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                style={{ transition: 'stroke 0.5s ease-in-out' }} // Smooth transition for the background circle
            />
            <circle
                stroke="#007bff" // Change this color for the progress ring
                fill="transparent"
                strokeWidth={strokeWidth}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                strokeDasharray={circumference + ' ' + circumference}
                strokeDashoffset={animatedStrokeDashoffset}
                style={{
                    transition: 'stroke-dashoffset 0.5s ease-in-out, stroke 0.5s ease-in-out', // Smooth transition for the progress ring
                }}
                transform={`rotate(90 ${radius} ${radius})`} 
            />
            <style>
                {`
                    @keyframes pulse {
                        0% {
                            stroke: #007bff;
                            stroke-width: 5;
                        }
                        100% {
                            stroke: #0056b3; // Darker shade for the pulsing effect
                            stroke-width: 7; // Slightly thicker during pulse
                        }
                    }
                `}
            </style>
        </svg>
    );
};

ProgressRing.propTypes = {
    percentage: PropType.number.isRequired,
};

export default ProfileSidebar;