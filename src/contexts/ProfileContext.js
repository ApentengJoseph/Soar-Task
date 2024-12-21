import React, { createContext, useState, useContext } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    name: "Charlene Reed",
    username: "charlenereed",
    email: "charlenereed@gmail.com",
    password: "********",
    dob: "1990-01-25",
    presentAddress: "San Jose, California, USA",
    permanentAddress: "San Jose, California, USA",
    city: "San Jose",
    postalCode: "45962",
    country: "USA",
    profilePicture: "https://randomuser.me/api/portraits/women/41.jpg",
  });

  const updateProfile = (updatedData) => {
    setProfile((prev) => ({ ...prev, ...updatedData }));
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
    return useContext(ProfileContext);
  };
