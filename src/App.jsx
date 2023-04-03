import React, { useState } from "react";
import iconArrow from "./assets/images/icon-arrow.svg";
import Input from "./components/Input.jsx";
import ButtonCalcu from "./components/ButtonCalcu.jsx";
import Display from "./components/Display.jsx";

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
          <ButtonCalcu iconArrow={iconArrow} />
          <Display />
        </div>
      </TimeContext.Provider>
    </>
  );
}

export default App;
