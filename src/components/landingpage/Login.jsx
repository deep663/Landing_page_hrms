import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import PropType from 'prop-types';

const UserLoginForm = ({ onClose }) => {
    const [role, setRole] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const handleForgotPassword = () => {
        alert("Forgot password feature triggered!");
        // Implement forgot password logic here
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Simple hardcoded credentials for demonstration purposes
        const validCredentials = {
            'Super Admin': { username: 'admin', password: 'Admin@123', navigateTo: '/admindashboard' },
            'Commissioner': { username: 'commissioner', password: 'Commissioner@123', navigateTo: '/commissionerdashboard' },
            'DNO': { username: 'dno', password: 'Dno@123', navigateTo: '/dnodashboard' },
            'Employee': { username: 'employee', password: 'Employee@123', navigateTo: '/employeedashboard' }
        };

        const currentRole = validCredentials[role];
        
        if (currentRole && username === currentRole.username && password === currentRole.password) {
            alert("Login successful!");
            navigate(currentRole.navigateTo);
            onClose();
        } else {
            alert("Invalid username or password!");
        }

        console.log('Form submitted:', { role, username, password });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="flex flex-col max-w-sm p-4 w-full rounded-md overflow-hidden bg-gray-200 shadow-lg">
                <div onClick={onClose} className="relative flex justify-end pr-2 bg-blue-500 text-white font-bold cursor-pointer">
                    <FaTimes />
                </div>
                <div className='flex flex-col items-center justify-center bg-blue-500'>
                    <img src="./src/assets/emblem-yellow.png" alt="Emblem" />
                    <h1 className="text-3xl text-white font-bold">HRMS</h1>
                    <p className="text-white text-center mb-4">Panchayat & Rural Development Department, Assam</p>
                </div>
                <div className="flex items-center">
                    <form
                        className="w-full p-6 bg-gray-100 shadow-md space-y-4"
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor="role" className="block text-gray-700">Select Role:</label>
                        <select
                            id="role"
                            name="role"
                            value={role}
                            onChange={handleRoleChange}
                            required
                            className="block w-full p-2 border border-gray-300 rounded"
                        >
                            <option value="">--Select Role--</option>
                            <option value="Super Admin">Super Admin</option>
                            <option value="Commissioner">Commissioner</option>
                            <option value="DNO">DNO</option>
                            <option value="Employee">Employee</option>
                        </select>

                        <div>
                            <label htmlFor="username" className="block text-gray-700">Username:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="block w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-gray-700">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={handleForgotPassword}
                                className="text-blue-500 hover:underline"
                            >
                                Forgot Password?
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

UserLoginForm.propTypes = {
    onClose: PropType.func.isRequired,
};

export default UserLoginForm;
