
const ProfileDetails = () => {
    return (
        <div className="bg-gray-100 p-6">
            <div className="container mx-auto bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-xl font-bold mb-4">
                    Profile / <span className="text-blue-500">Personal Details</span>
                </h1>
                <div className="flex space-x-4 mb-6">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-inner">Personal Details</button>
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full shadow-inner">Service Details</button>
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full shadow-inner">Service Record</button>
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full shadow-inner">Promotion Details</button>
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full shadow-inner">Payslip Details</button>
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full shadow-inner">Uploaded Documents</button>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <p><span className="font-semibold">Employee Code :</span> PNRDGP0001</p>
                            <p><span className="font-semibold">Religion :</span> Hinduism</p>
                            <p><span className="font-semibold">Present Address :</span> 4GVC+JH7, Kahilipara Main Rd, Kahilipara, Guwahati, Assam 781019</p>
                            <p><span className="font-semibold">Home District :</span> Guwahati</p>
                            <p><span className="font-semibold">Aadhaar No :</span> 124421789641</p>
                            <p><span className="font-semibold">Personal Identification marks :</span> No</p>
                        </div>
                        <div>
                            <p><span className="font-semibold">Employee Name :</span> David Spade</p>
                            <p><span className="font-semibold">Nationality :</span> Indian</p>
                            <p><span className="font-semibold">Permanent Address :</span> 4GVC+JH7, Kahilipara Main Rd, Kahilipara, Guwahati, Assam 781019</p>
                            <p><span className="font-semibold">Mobile No :</span> 1010900108</p>
                            <p><span className="font-semibold">Blood Group :</span> O+</p>
                        </div>
                        <div>
                            <p><span className="font-semibold">Gender :</span> Male</p>
                            <p><span className="font-semibold">Date of Birth :</span> 10/07/1990</p>
                            <p><span className="font-semibold">Email Id :</span> abc@xyz.com</p>
                            <p><span className="font-semibold">Do you have any kind of disability?</span> No</p>
                        </div>
                        <div>
                            <p><span className="font-semibold">Caste :</span> General</p>
                            <p><span className="font-semibold">Mother&apos;s Name :</span> Rima Spade</p>
                            <p><span className="font-semibold">Father&apos;s Name :</span> John Spade</p>
                            <p><span className="font-semibold">Marital Status :</span> Unmarried</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;