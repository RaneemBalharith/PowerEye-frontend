import React, { createContext, useEffect, useState } from "react";
export const PowerEyeContext = createContext();
export const PowerEyeContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [image, setImage] = useState(null);
  const [username, setUsername] = useState("defaultName");

  const [notifications, setNotifications] = useState([
    { id: 1, screen: "", title: "" },
    { id: 2, screen: "", title: "" },
    { id: 3, screen: "", title: "" },
    { id: 4, screen: "", title: "" },
  ]);
  const [progress, setProgress] = useState(60);
  const [onAddDevice, setOnAddDevice] = useState(false);
  const [devices, setDevices] = useState([
    {
      id: "1",
      title: "coolers",
      on: true,
      device: 1,
      consumption: 42,
      cost: 375,
    },
    {
      id: "2",
      title: "lamp",
      on: false,
      device: 2,
      consumption: 42,
      cost: 375,
    },
  ]);

  const consumption = 421.8;
  const cost = (consumption * 8.90701754386).toFixed(2);
 
  return (
    <PowerEyeContext.Provider value={{ image,username,setUsername, setImage,loggedIn, setLoggedIn,progress,onAddDevice,setOnAddDevice,devices,setDevices }}>
      {children}
    </PowerEyeContext.Provider>
  );
};
