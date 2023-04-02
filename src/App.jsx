import React, { useState } from "react";
import iconArrow from "./assets/images/icon-arrow.svg";
import Input from "./components/Input.jsx";

export const TimeContext = React.createContext();

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const data = {
    Day: [day, setDay],
    Month: [month, setMonth],
    Year: [year, setYear],
  };

  return (
    <>
      <TimeContext.Provider value={data}>
        <div className="mx-5 mb-6 mt-20 rounded-3xl bg-white px-3 py-10">
          <Input />
          <div className="relative" id="image-box">
            {/* <div className="absolute top-1/2 z-0 w-full border border-black"></div> */}
            <img
              className="z-10 mx-auto rounded-full bg-purple-900 p-4 opacity-100"
              src={iconArrow}
              alt="image"
            />
          </div>
        </div>
      </TimeContext.Provider>
    </>
  );
}

export default App;
