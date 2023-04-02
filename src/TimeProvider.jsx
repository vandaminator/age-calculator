import React, { useContext, useState } from "react";

const DateProvider = React.createContext();
const MonthProvider = React.createContext();
const YearProvider = React.createContext();

// they will give the stateful variable and the function to change it
export function useDate() {
  return useContext(DateProvider);
}
export function useMonth() {
  return useContext(MonthProvider);
}
export function useYear() {
  return useContext(YearProvider);
}

// the providers are used like this to make their values statefull
const Year = ({ childern }) => {
  const [year, setYear] = useState("");
  return (
    <YearProvider.Provider value={[year, setYear]}>
      {childern}
    </YearProvider.Provider>
  );
};
const Date = ({ childern }) => {
  const [day, setDay] = useState("");
  return (
    <DateProvider.Provider value={[day, setDay]}>
      {childern}
    </DateProvider.Provider>
  );
};
const Month = ({ childern }) => {
  const [month, setMonth] = useState("");
  return (
    <MonthProvider.Provider value={[month, setMonth]}>
      {childern}
    </MonthProvider.Provider>
  );
};

export default function TimeProvider({ childern }) {
  return (
    <>
      <Year>
        <Month>
          <Date>{childern}</Date>
        </Month>
      </Year>
    </>
  );
}
