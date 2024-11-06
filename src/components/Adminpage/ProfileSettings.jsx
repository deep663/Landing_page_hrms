import { useState } from "react";

const ProfileSettings = () => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    profilePicture: null,
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (formData.newPassword && formData.newPassword.length < 6)
      newErrors.newPassword = "Password must be at least 6 characters.";
    if (formData.newPassword !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setMessage("Profile updated successfully!");
      setIsEditing(false);
    }
  };

  const handleBack = () => {
    setErrors({});
    setMessage("");
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">PROFILE SETTINGS</h2>
      <h3 className="text-lg font-semibold mb-4">
        <span className="text-yellow-500">DASHBOARD</span> / PROFILE
      </h3>

      {message && (
        <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
          {message}
        </div>
      )}

      {isEditing ? (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Profile Picture */}
          <div>
            <label className="block text-sm font-medium mb-1">Profile Picture</label>
            <input
              type="file"
              name="profilePicture"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {formData.profilePicture && (
              <p className="text-sm text-gray-600 mt-2">{formData.profilePicture.name}</p>
            )}
          </div>

          {/* Current Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Current Password</label>
            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium mb-1">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.newPassword && (
              <p className="text-red-500 text-sm">{errors.newPassword}</p>
            )}
          </div>

          {/* Confirm New Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Confirm New Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Submit and Back Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleBack}
              className="bg-gray-500 text-white px-4 py-2 rounded font-semibold hover:bg-gray-600"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 border border-gray-300">
              {formData.profilePicture ? (
                <img
                  src={URL.createObjectURL(formData.profilePicture)}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-gray-400 text-3xl font-semibold flex items-center justify-center h-full">
                  {formData.name.charAt(0)}
                </span>
              )}
            </div>

            <div>
              <h3 className="text-xl font-semibold">{formData.name}</h3>
              <p className="text-gray-600">{formData.email}</p>
            </div>

            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-600"
            >
              Edit Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileSettings;
