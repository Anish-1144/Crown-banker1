import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nevbar from "../components/header/Nevbar";
import Footer from "../components/footer/Footer";
import RoundButton from "../components/ui/RoundButton";

function Signup() {
  const countries = [
    { code: "AF", name: "Afghanistan" },
    { code: "AL", name: "Albania" },
    { code: "DZ", name: "Algeria" },
    { code: "AD", name: "Andorra" },
    { code: "AO", name: "Angola" },
    { code: "AG", name: "Antigua and Barbuda" },
    { code: "AR", name: "Argentina" },
    { code: "AM", name: "Armenia" },
    { code: "AU", name: "Australia" },
    { code: "AT", name: "Austria" },
    { code: "AZ", name: "Azerbaijan" },
    { code: "BS", name: "Bahamas" },
    { code: "BH", name: "Bahrain" },
    { code: "BD", name: "Bangladesh" },
    { code: "BB", name: "Barbados" },
    { code: "BY", name: "Belarus" },
    { code: "BE", name: "Belgium" },
    { code: "BZ", name: "Belize" },
    { code: "BJ", name: "Benin" },
    { code: "BT", name: "Bhutan" },
    { code: "BO", name: "Bolivia" },
    { code: "BA", name: "Bosnia and Herzegovina" },
    { code: "BW", name: "Botswana" },
    { code: "BR", name: "Brazil" },
    { code: "BN", name: "Brunei" },
    { code: "BG", name: "Bulgaria" },
    { code: "BF", name: "Burkina Faso" },
    { code: "BI", name: "Burundi" },
    { code: "CV", name: "Cabo Verde" },
    { code: "KH", name: "Cambodia" },
    { code: "CM", name: "Cameroon" },
    { code: "CA", name: "Canada" },
    { code: "CF", name: "Central African Republic" },
    { code: "TD", name: "Chad" },
    { code: "CL", name: "Chile" },
    { code: "CN", name: "China" },
    { code: "CO", name: "Colombia" },
    { code: "KM", name: "Comoros" },
    { code: "CG", name: "Congo" },
    { code: "CD", name: "Congo (Democratic Republic)" },
    { code: "CR", name: "Costa Rica" },
    { code: "CI", name: "Côte d'Ivoire" },
    { code: "HR", name: "Croatia" },
    { code: "CU", name: "Cuba" },
    { code: "CY", name: "Cyprus" },
    { code: "CZ", name: "Czech Republic" },
    { code: "DK", name: "Denmark" },
    { code: "DJ", name: "Djibouti" },
    { code: "DM", name: "Dominica" },
    { code: "DO", name: "Dominican Republic" },
    { code: "EC", name: "Ecuador" },
    { code: "EG", name: "Egypt" },
    { code: "SV", name: "El Salvador" },
    { code: "GQ", name: "Equatorial Guinea" },
    { code: "ER", name: "Eritrea" },
    { code: "EE", name: "Estonia" },
    { code: "SZ", name: "Eswatini" },
    { code: "ET", name: "Ethiopia" },
    { code: "FJ", name: "Fiji" },
    { code: "FI", name: "Finland" },
    { code: "FR", name: "France" },
    { code: "GA", name: "Gabon" },
    { code: "DE", name: "Germany" },
    { code: "GH", name: "Ghana" },
    { code: "GR", name: "Greece" },
    { code: "IN", name: "India" },
    { code: "ID", name: "Indonesia" },
    { code: "IR", name: "Iran" },
    { code: "IQ", name: "Iraq" },
    { code: "IE", name: "Ireland" },
    { code: "IT", name: "Italy" },
    { code: "JP", name: "Japan" },
    { code: "KE", name: "Kenya" },
    { code: "KW", name: "Kuwait" },
    { code: "LB", name: "Lebanon" },
    { code: "MY", name: "Malaysia" },
    { code: "MX", name: "Mexico" },
    { code: "NL", name: "Netherlands" },
    { code: "NZ", name: "New Zealand" },
    { code: "NG", name: "Nigeria" },
    { code: "PK", name: "Pakistan" },
    { code: "PH", name: "Philippines" },
    { code: "PL", name: "Poland" },
    { code: "PT", name: "Portugal" },
    { code: "QA", name: "Qatar" },
    { code: "RU", name: "Russia" },
    { code: "SA", name: "Saudi Arabia" },
    { code: "SG", name: "Singapore" },
    { code: "ZA", name: "South Africa" },
    { code: "ES", name: "Spain" },
    { code: "LK", name: "Sri Lanka" },
    { code: "SE", name: "Sweden" },
    { code: "CH", name: "Switzerland" },
    { code: "TH", name: "Thailand" },
    { code: "TR", name: "Turkey" },
    { code: "AE", name: "United Arab Emirates" },
    { code: "GB", name: "United Kingdom" },
    { code: "US", name: "United States" },
  ];
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
    hasSponsor: "",
    sponsorName: "",
    phone: "",
    country: "",
    position: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup attempt with:", formData);
  };

  return (
    <div className="h-[30rem] w-screen flex flex-col ">
      {/* <Nevbar /> */}

      <div className="flex-grow flex bg-gray-900 ">
        {/* Left Column - Form */}
        <div className="w-full items-center justify-center md:w-1/2 flex flex-col md:mx-24">
          <div className="mt-1">
            <img
              className="h-24 w-auto"
              src="/images/logo1.png"
              alt="Crown Bankers Logo"
            />
          </div>
          <div className="">
            <div className=" flex items-center justify-start overflow-y-auto mt-2">
              <div className="w-full max-w-lg px-6">
                <form
                  className=" space-y-1 border border-green-400 px-4 py-2 rounded-md"
                  onSubmit={handleSubmit}
                >
                  {" "}
                  <h2 className="text-4xl font-bold text-white ">
                    Create a new account
                  </h2>
                  {/* <h3 className="text-white">join and grow with us</h3> */}
                  <div className="mt-2 rounded-md shadow-sm space-y-2 ">
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        name="firstName"
                        type="text"
                        required
                        className="appearance-none bg-gray-800 block w-full px-3 py-3 border border-gray-500 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-[#4CAF50] focus:border-[#4CAF50] sm:text-sm"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                      <input
                        name="lastName"
                        type="text"
                        required
                        className="appearance-none bg-gray-800 block w-full px-3 py-3 border border-gray-500 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-[#4CAF50] focus:border-[#4CAF50] sm:text-sm"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <select
                        name="hasSponsor"
                        required
                        className="appearance-none bg-gray-800 block w-full px-3 py-3 border border-gray-500 text-gray-400 focus:outline-none focus:ring-[#4CAF50] focus:border-[#4CAF50] sm:text-sm"
                        value={formData.hasSponsor}
                        onChange={handleChange}
                      >
                        <option value="">Sponsor?</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>

                      <select
                        name="position"
                        required
                        className="appearance-none bg-gray-800 block w-full px-3 py-3 border border-gray-500 text-gray-400 focus:outline-none focus:ring-[#4CAF50] focus:border-[#4CAF50] sm:text-sm"
                        value={formData.position}
                        onChange={handleChange}
                      >
                        <option value="">Position</option>
                        <option value="right">Right</option>
                        <option value="left">Left</option>
                      </select>
                    </div>

                    {formData.hasSponsor === "yes" && (
                      <input
                        name="sponsorName"
                        type="text"
                        required
                        className="appearance-none bg-gray-800 block w-full px-3 py-3 border border-gray-500 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-[#4CAF50] focus:border-[#4CAF50] sm:text-sm"
                        placeholder="Sponsor Name"
                        value={formData.sponsorName}
                        onChange={handleChange}
                      />
                    )}

                    <input
                      name="email"
                      type="email"
                      required
                      className="appearance-none bg-gray-800 block w-full px-3 py-3 border border-gray-500 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-[#4CAF50] focus:border-[#4CAF50] sm:text-sm"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={handleChange}
                    />

                    <input
                      name="confirmEmail"
                      type="email"
                      required
                      className="appearance-none bg-gray-800 block w-full px-3 py-3 border border-gray-500 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-[#4CAF50] focus:border-[#4CAF50] sm:text-sm"
                      placeholder="Confirm Email"
                      value={formData.confirmEmail}
                      onChange={handleChange}
                    />

                    <div className="grid grid-cols-2 gap-3">
                      <input
                        name="phone"
                        type="tel"
                        required
                        className="appearance-none bg-gray-800 block w-full px-3 py-3 border border-gray-500 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-[#4CAF50] focus:border-[#4CAF50] sm:text-sm"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />

                      <select
                        name="country"
                        required
                        className="appearance-none bg-gray-800 block w-full px-3 py-3 border border-gray-500 text-gray-400 focus:outline-none focus:ring-[#4CAF50] focus:border-[#4CAF50] sm:text-sm"
                        value={formData.country}
                        onChange={handleChange}
                      >
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <input
                        name="password"
                        type="password"
                        required
                        className="appearance-none bg-gray-800 block w-full px-3 py-3 border border-gray-500 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-[#4CAF50] focus:border-[#4CAF50] sm:text-sm"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <input
                        name="confirmPassword"
                        type="password"
                        required
                        className="appearance-none bg-gray-800 block w-full px-3 py-3 border border-gray-500 placeholder-gray-500 text-gray-100 focus:outline-none focus:ring-[#4CAF50] focus:border-[#4CAF50] sm:text-sm"
                        placeholder="Confirm"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="terms"
                      name="terms"
                      type="checkbox"
                      required
                      className="h-4 w-4 text-[#4CAF50] focus:ring-[#4CAF50] border-gray-300 rounded"
                    />
                    <label htmlFor="terms" className="ml-2 text-xs text-white">
                      I agree to{" "}
                      <Link
                        to="/terms"
                        className="text-[#4CAF50] hover:text-[#3d9140]"
                      >
                        Terms
                      </Link>{" "}
                      &{" "}
                      <Link
                        to="/privacy"
                        className="text-[#4CAF50] hover:text-[#3d9140]"
                      >
                        Privacy
                      </Link>
                    </label>
                  </div>
                  <RoundButton
                    text="Create Account "
                    type="submit"
                    className="w-full py-3 text-sm "
                  />
                  <p className="text-xs text-gray-300">
                    Have an account?{" "}
                    <Link
                      to="/login"
                      className="font-medium text-[#4CAF50] hover:text-[#3d9140]"
                    >
                      Log in
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="hidden md:flex md:w-1/2 bg-white">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="https://imgs.search.brave.com/G9Kif04I3Rr-UuTWYeQ9QIE4HJIbqvIDff65uEDdz5I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vaW1hZ2Vz/L2xhcmdlLXByZXZp/ZXdzL2YwOS9zb2xh/ci1wb3dlcmVkLWZh/Y3RvcnktaWxsdXN0/cmF0aW9uLTA0MTAt/NTcwMDI0MS5qcGc_/Zm10"
              alt="Secure Banking"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
export default Signup;
