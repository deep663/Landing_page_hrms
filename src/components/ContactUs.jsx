import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
            <div className="flex flex-col md:flex-row justify-between mb-6">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                    <p className="flex items-center mb-2">
                        <FaEnvelope className="mr-2" />
                        <span>Email: <a href="mailto:example@gmail.com" className="hover:underline">example@gmail.com</a></span>
                    </p>
                    <p className="flex items-center mb-2">
                        <FaPhoneAlt className="mr-2" />
                        <span>Phone: <a href="tel:+1234567890" className="hover:underline">123-456-7890</a></span>
                    </p>
                    <p className="flex items-center mb-2">
                        <FaPhoneAlt className="mr-2" />
                        <span>Phone: <a href="tel:+0987654321" className="hover:underline">098-765-4321</a></span>
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <h3 className="text-xl font-semibold mb-4">Our Location</h3>
                    <div className="h-64">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095094!2d144.9537353156188!3d-37.81627997975196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f5f0c81%3A0x7eb8654e8454483e!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1620135605648!5m2!1sen!2sau"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
