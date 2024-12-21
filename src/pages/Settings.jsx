import React, { useState } from "react";
import { useProfile } from "./ProfileContext";

const Settings = () => {
  const { profile, updateProfile } = useProfile();
  const [form, setForm] = useState(profile);
  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(profile.profilePicture);

  const validate = () => {
    let validationErrors = {};

    if (!form.name) validationErrors.name = "Name is required.";
    if (!form.username) validationErrors.username = "Username is required.";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
      validationErrors.email = "Valid email is required.";
    if (!form.password || form.password.length < 6)
      validationErrors.password = "Password must be at least 6 characters.";
    if (!form.dob) validationErrors.dob = "Date of birth is required.";
    if (!form.city) validationErrors.city = "City is required.";
    if (!form.postalCode)
      validationErrors.postalCode = "Postal code is required.";
    if (!form.country) validationErrors.country = "Country is required.";

    return validationErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      if (value.trim()) {
        delete newErrors[name]; // Clear the error if the field is valid
      }
      return newErrors;
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Preview image
        setForm((prevForm) => ({ ...prevForm, profilePicture: reader.result })); // Update form state
        console.log(profile);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      updateProfile(form);
      alert("Profile updated successfully!");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="p-6 w-[95%] card-border-radius mx-auto bg-white">
      {/* Tabs */}
      <div className="flex justify-start border-[#F4F5F7] border-b mb-6">
        <button className="pb-2 px-4 border-darkText rounded-tl-lg rounded-tl-md text-darkText border-b-4 font-medium text-sm sm:text-base">
          Edit Profile
        </button>
        <button className="pb-2 px-4 text-textBlueLight hover:text-textBlueDark text-sm sm:text-base">
          Preferences
        </button>
        <button className="pb-2 px-4 text-textBlueLight hover:text-textBlueDark text-sm sm:text-base">
          Security
        </button>
      </div>

      {/* Main Layout */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center w-full sm:w-auto sm:flex-row md:flex-row lg:items-start md:space-x-10"
      >
        {/* Profile Image */}
        <div className="flex justify-center md:justify-start mb-6 md:mb-0">
          <div className="relative">
            <img
              src={imagePreview || profile.profilePicture}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border"
            />
            <label
              htmlFor="profilePictureUpload"
              className="absolute bottom-0 right-0 bg-black rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
            >
              <img
                src="icons/pencil-alt.png"
                alt="Edit Profile"
                className="w-4 h-4"
              />
            </label>
            <input
              id="profilePictureUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
          {[
            { label: "Your Name", name: "name" },
            { label: "User Name", name: "username" },
            { label: "Email", name: "email" },
            { label: "Password", name: "password", type: "password" },
            { label: "Date of Birth", name: "dob", type: "date" },
            { label: "Present Address", name: "presentAddress" },
            { label: "Permanent Address", name: "permanentAddress" },
            { label: "City", name: "city" },
            { label: "Postal Code", name: "postalCode" },
            { label: "Country", name: "country" },
          ].map(({ label, name, type = "text" }) => (
            <div key={name}>
              <label className="block text-darkText font-medium mb-1">
                {label}
              </label>
              <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleInputChange}
                className="w-full p-3 text-textBlueLight border border-[#DFEAF2] rounded-[15px] focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors[name] && (
                <p className="text-red-500 text-sm">{errors[name]}</p>
              )}
            </div>
          ))}
        </div>
      </form>

      {/* Save Button */}
      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="px-6 py-3 bg-darkText text-white rounded-lg font-medium hover:bg-gray-800 transition"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Settings;
