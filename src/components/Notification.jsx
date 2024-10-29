import { FaBell } from 'react-icons/fa';

const Notification = ({ notifications }) => (
    <div className="notification bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500 hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-red-500 font-semibold text-2xl mb-4 flex items-center">
            <FaBell className="mr-2 text-red-500" />
            NOTIFICATIONS
        </h2>
        <ul className="list-disc pl-5 space-y-4">
            {notifications.length > 0 ? (
                notifications.map((notification, index) => (
                    <li key={index} className="text-gray-700">
                        {notification}
                    </li>
                ))
            ) : (
                <li className="text-gray-500">No notifications available.</li>
            )}
        </ul>
    </div>
);

export default Notification;
