import { useState } from "react";
import { Camera, Lock, UserCheck } from "lucide-react";

export default function MyProfile({ isDarkMode }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    city: "Washington",
    address: "",
    postalCode: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    youtube: "",
  });

  const [activeSection, setActiveSection] = useState("personal"); // 'personal', 'password', 'kyc'
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className={`p-6 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
      {/* Navigation Buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        <button
          onClick={() => setActiveSection("personal")}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-colors ${
            activeSection === "personal"
              ? "bg-green-500 text-white"
              : isDarkMode
              ? "bg-gray-700 hover:bg-gray-600"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          Personal Information
        </button>
        <button
          onClick={() => setActiveSection("password")}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-colors ${
            activeSection === "password"
              ? "bg-green-500 text-white"
              : isDarkMode
              ? "bg-gray-700 hover:bg-gray-600"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          <Lock className="w-4 h-4" />
          Password Reset
        </button>
        <button
          onClick={() => setActiveSection("kyc")}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium transition-colors ${
            activeSection === "kyc"
              ? "bg-green-500 text-white"
              : isDarkMode
              ? "bg-gray-700 hover:bg-gray-600"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          <UserCheck className="w-4 h-4" />
          KYC Settings
        </button>
      </div>

      {/* Personal Information Form */}
      {activeSection === "personal" && (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Profile and Cover Image Section */}
          <div className="space-y-4">
            <div className="relative">
              <div
                className={`h-48 w-full rounded-lg overflow-hidden ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-200"
                } relative`}
              >
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt="Cover"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <p className="text-gray-500">Update Cover</p>
                  </div>
                )}
                <label className="absolute bottom-4 right-4 cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleCoverImageChange}
                    className="hidden"
                  />
                  <div
                    className={`p-2 rounded-full ${
                      isDarkMode ? "bg-gray-800" : "bg-white"
                    } shadow-lg`}
                  >
                    <Camera className="h-5 w-5" />
                  </div>
                </label>
              </div>

              <div className="absolute -bottom-12 left-8">
                <div className="relative">
                  <div
                    className={`h-24 w-24 rounded-full overflow-hidden ${
                      isDarkMode ? "bg-gray-700" : "bg-gray-200"
                    } border-4 ${
                      isDarkMode ? "border-gray-800" : "border-white"
                    }`}
                  >
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <p className="text-gray-500 text-sm">Update Profile</p>
                      </div>
                    )}
                  </div>
                  <label className="absolute bottom-0 right-0 cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleProfileImageChange}
                      className="hidden"
                    />
                    <div
                      className={`p-2 rounded-full ${
                        isDarkMode ? "bg-gray-800" : "bg-white"
                      } shadow-lg`}
                    >
                      <Camera className="h-4 w-4" />
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="h-12"></div>{" "}
            {/* Spacer for profile picture overflow */}
          </div>

          {/* Personal Information Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 rounded-lg ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600"
                    : "bg-white border-gray-300"
                } border focus:outline-none focus:ring-1 focus:ring-green-500`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 rounded-lg ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600"
                    : "bg-white border-gray-300"
                } border focus:outline-none focus:ring-1 focus:ring-green-500`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 rounded-lg ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600"
                    : "bg-white border-gray-300"
                } border focus:outline-none focus:ring-1 focus:ring-green-500`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 rounded-lg ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600"
                    : "bg-white border-gray-300"
                } border focus:outline-none focus:ring-1 focus:ring-green-500`}
              />
            </div>
          </div>

          {/* Personal Address Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Personal Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Country or Region
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600"
                      : "bg-white border-gray-300"
                  } border focus:outline-none focus:ring-1 focus:ring-green-500`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600"
                      : "bg-white border-gray-300"
                  } border focus:outline-none focus:ring-1 focus:ring-green-500`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600"
                      : "bg-white border-gray-300"
                  } border focus:outline-none focus:ring-1 focus:ring-green-500`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Postal Code
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600"
                      : "bg-white border-gray-300"
                  } border focus:outline-none focus:ring-1 focus:ring-green-500`}
                />
              </div>
            </div>
          </div>

          {/* Social Information Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Social Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Facebook
                </label>
                <input
                  type="url"
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600"
                      : "bg-white border-gray-300"
                  } border focus:outline-none focus:ring-1 focus:ring-green-500`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Twitter
                </label>
                <input
                  type="url"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600"
                      : "bg-white border-gray-300"
                  } border focus:outline-none focus:ring-1 focus:ring-green-500`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  LinkedIn
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600"
                      : "bg-white border-gray-300"
                  } border focus:outline-none focus:ring-1 focus:ring-green-500`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Youtube
                </label>
                <input
                  type="url"
                  name="youtube"
                  value={formData.youtube}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2 rounded-lg ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600"
                      : "bg-white border-gray-300"
                  } border focus:outline-none focus:ring-1 focus:ring-green-500`}
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Save Profile
            </button>
          </div>
        </form>
      )}

      {/* Password Reset Section */}
      {activeSection === "password" && (
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-6">Password Reset</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Current Password
              </label>
              <input
                type="password"
                className={`w-full px-4 py-2 rounded-lg ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600"
                    : "bg-white border-gray-300"
                } border focus:outline-none focus:ring-1 focus:ring-green-500`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                New Password
              </label>
              <input
                type="password"
                className={`w-full px-4 py-2 rounded-lg ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600"
                    : "bg-white border-gray-300"
                } border focus:outline-none focus:ring-1 focus:ring-green-500`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Confirm New Password
              </label>
              <input
                type="password"
                className={`w-full px-4 py-2 rounded-lg ${
                  isDarkMode
                    ? "bg-gray-700 border-gray-600"
                    : "bg-white border-gray-300"
                } border focus:outline-none focus:ring-1 focus:ring-green-500`}
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Update Password
            </button>
          </form>
        </div>
      )}

      {/* KYC Settings Section */}
      {activeSection === "kyc" && (
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold mb-6">KYC Verification</h2>
          <div
            className={`p-6 rounded-lg ${
              isDarkMode ? "bg-gray-700" : "bg-gray-50"
            } mb-6`}
          >
            <h3 className="font-medium mb-4">Required Documents</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Government ID (Passport/Driver's License)
                </label>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Proof of Address
                </label>
                <input
                  type="file"
                  accept="image/*,.pdf"
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Selfie with ID
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Submit KYC Documents
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
