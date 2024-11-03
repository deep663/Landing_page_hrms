import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div id='contact' className="bg-gray-100 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl text-blue-600 font-bold mb-6 text-center">Contact Us</h2>
            <div className="flex flex-col md:flex-row justify-between mb-6">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                    <p className="flex items-center mb-2">
                        <FaEnvelope className="mr-2" />
                        <span>Email: <a href="mailto:example@gmail.com" className="hover:underline">pnrdhcms@gmail.com</a></span>
                    </p>
                    <p className="flex items-center mb-2">
                        <FaPhoneAlt className="mr-2" />
                        <span>Phone: <a href="tel:+1234567890" className="hover:underline">18001233230</a></span>
                    </p>
                    <p className="flex items-center mb-2">
                        <FaPhoneAlt className="mr-2" />
                        <span>Phone: <a href="tel:+0987654321" className="hover:underline">098-765-4321</a></span>
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <h3 className="text-xl font-semibold mb-4">Our Location</h3>
                    <div className="h-64">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.961808912589!2d91.81508397533345!3d26.132788193172146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a58b12f636fcf%3A0x83ded46de44c71c9!2sOffice%20Of%20The%20Commissioner%2C%20Panchayat%20%26%20Rural%20Development%20Department%2C%20Assam!5e0!3m2!1sen!2sin!4v1730548131407!5m2!1sen!2sin" width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
