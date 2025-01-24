import React, { useState } from "react";
import countries from "./ContriesList"; // Adjust the path as necessary

const CustomDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const handleSelect = (country:any) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block text-sm">
      {/* Hidden native select for form compatibility */}
      <select
        value={selectedCountry.dialCode}
        onChange={(e) => {
          const selected = countries.find(
            (country) => country.dialCode === e.target.value
          );
          handleSelect(selected);
        }}
        className="hidden w-14"
      >
        {countries.map((country) => (
          <option key={country.code} value={country.dialCode}>
            {country.dialCode}
          </option>
        ))}
      </select>

      {/* Custom dropdown */}
      <div className="flex items-center justify-between rounded cursor-pointer bg-white" onClick={toggleDropdown}>
        <img
          src={selectedCountry.flag}
          alt={`${selectedCountry.name} flag`}
          className="w-5 h-5 mr-2"
        />
        <span>
           ({selectedCountry.dialCode})
        </span>
      </div>

      {isDropdownOpen && (

      <ul className="absolute left-0 w-[16vw] mt-2 bg-white border shadow-lg max-h-60  z-40 overflow-auto">
        {countries.map((country) => (
          <li
            key={country.code}
            onClick={() => handleSelect(country)}
            className="flex items-center p-2 cursor-pointer hover:bg-gray-100 overflow-hidden"
          >
            <img
              src={country.flag}
              alt={`${country.name} flag`}
              className="w-5 h-5 mr-2"
            />
            <span>
               ({country.name}{country.dialCode})
            </span>
          </li>
        ))}
      </ul>
      )}
    </div>
  );
};

export default CustomDropdown;

