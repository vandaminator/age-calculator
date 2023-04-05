import React, { useState } from "react";
import iconArrow from "./assets/images/icon-arrow.svg";
import Input from "./components/Input.jsx";
import ButtonCalcu from "./components/ButtonCalcu.jsx";
import Display from "./components/Display.jsx";

export const TimeContext = React.createContext();
export const DisplayContext = React.createContext();

function App() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [displayDay, setDisplayDay] = useState("");
  const [displayMonth, setDisplayMonth] = useState("");
  const [displayYear, setDisplayYear] = useState("");

  const data = {
    Day: [day, setDay],
    Month: [month, setMonth],
    Year: [year, setYear],
  };

  const displayData = {
    Day: [displayDay, setDisplayDay],
    Month: [displayMonth, setDisplayMonth],
    Year: [displayYear, setDisplayYear],
  };

  const currentDate = new Date();
  const currentDateInfo = {
    year: currentDate.getFullYear(),
    // january is 0
    // range is (0-11) so add one to make (1-12)
    month: currentDate.getMonth() + 1,
    day: currentDate.getDate(),
  };

  const CalCuTime = () => {
    const monthIndex = +month - 1;
    const userDate = new Date(+year, monthIndex, +day);
    const diff = currentDate - userDate;
    const diffDate = new Date(diff);

    const resultYear = Math.abs(diffDate.getUTCFullYear() - 1970);
    const resultMonth = diffDate.getUTCMonth();
    const resultDay = diffDate.getUTCDay();

    setDisplayDay(resultDay);
    setDisplayMonth(resultMonth);
    setDisplayYear(resultYear);
  };

  const checkValidate = (year, month, day) => {
    const monthIndex = month - 1;

    const userDate = new Date(year, monthIndex, day);

    const checkYear = userDate.getFullYear();
    const checkMonth = userDate.getMonth();
    const checkDay = userDate.getDate();

    const matchYear = year === checkYear;
    const matchMonth = monthIndex === checkMonth;
    const matchDay = day === checkDay;

    const isValid = matchDay && matchMonth && matchYear;
    return isValid;
  };

  const handleClick = () => {
    // these will be used when user left the fields blank
    const dayIsEmpty = day === "";
    const monthIsEmpty = month === "";
    const yearIsEmpty = year === "";

    // if all fields are filled then false
    const oneIsEmpty = dayIsEmpty | monthIsEmpty | yearIsEmpty;

    // checks if they are numbers and within their ranges e.g Month(1-12)
    const dayIsNotFormat = isNaN(day) | (+day > 31) | (+day < 1);
    const monthIsNotFormat = isNaN(month) | (+month > 12) | (+month < 1);
    const yearIsNotFormat = isNaN(year) | (year.length !== 4);

    // if all fields fit format then false
    const oneIsNotFormat = dayIsNotFormat | monthIsNotFormat | yearIsNotFormat;

    // these will be used to check if user date is in the future
    const yearIsFuture = +year > currentDateInfo.year;
    const monthIsFuture =
      +year === currentDateInfo.year && +month > currentDateInfo.month;
    const dayIsFuture =
      +year === currentDateInfo.year &&
      +month === currentDateInfo.month &&
      +day > currentDateInfo.day;

    // if user input is in the past then false
    const oneIsFuture = yearIsFuture | monthIsFuture | dayIsFuture;

    // if user gave the correct inputs then true so that it can be used to validate time format
    const allCorrect = !(oneIsEmpty | oneIsNotFormat | oneIsFuture);

    // used to give messege if user did error
    const errorDay = document.getElementById("error-day");
    const errorMonth = document.getElementById("error-month");
    const errorYear = document.getElementById("error-year");

    // used to change color incase of error with tailwind on inputs
    const inputDayList = document.getElementById("day").classList;
    const inputMonthList = document.getElementById("month").classList;
    const inputYearList = document.getElementById("year").classList;

    // and labels for inputs
    const labelDayList = document.getElementById("label-day").classList;
    const labelMonthList = document.getElementById("label-month").classList;
    const labelYearList = document.getElementById("label-year").classList;

    // reseting to show user where they did good and wrong
    inputDayList.remove("border-red-400");
    labelDayList.remove("text-red-500");
    inputMonthList.remove("border-red-400");
    labelMonthList.remove("text-red-500");
    inputYearList.remove("border-red-400");
    labelYearList.remove("text-red-500");
    errorDay.innerHTML = "";
    errorMonth.innerHTML = "";
    errorYear.innerHTML = "";

    // these check if users date is in the future
    if (oneIsFuture) {
      // give error messege to the field which makes user item in future
      if (dayIsFuture) {
        // using tailwind the field turns red if error
        inputDayList.add("border-red-400");
        labelDayList.add("text-red-500");
        // showing user error msg for this
        errorDay.innerHTML = "must be in the past";
      }
      if (monthIsFuture) {
        inputMonthList.add("border-red-400");
        labelMonthList.add("text-red-500");
        // showing user error msg for this
        errorMonth.innerHTML = "must be in the past";
      }
      if (yearIsFuture) {
        inputYearList.add("border-red-400");
        labelYearList.add("text-red-500");
        // showing user error msg for this
        errorYear.innerHTML = "must be in the past";
      }
    }
    if (oneIsNotFormat) {
      // give error messege to the field not in format
      if (dayIsNotFormat) {
        // using tailwind the field turns red if error
        inputDayList.add("border-red-400");
        labelDayList.add("text-red-500");
        // showing user error msg for this
        errorDay.innerHTML = "must be a valid day number";
      }
      if (monthIsNotFormat) {
        inputMonthList.add("border-red-400");
        labelMonthList.add("text-red-500");
        // showing user error msg for this
        errorMonth.innerHTML = "must be a valid month number";
      }
      if (yearIsNotFormat) {
        inputYearList.add("border-red-400");
        labelYearList.add("text-red-500");
        // showing user error msg for this
        errorYear.innerHTML = "must be a valid year number";
      }
    }
    if (oneIsEmpty) {
      // give error messege to the empty field
      if (dayIsEmpty) {
        // using tailwind the field turns red if error
        inputDayList.add("border-red-400");
        labelDayList.add("text-red-500");
        // showing user error msg for this
        errorDay.innerHTML = "this field is required";
      }
      if (monthIsEmpty) {
        inputMonthList.add("border-red-400");
        labelMonthList.add("text-red-500");
        // showing user error msg for this
        errorMonth.innerHTML = "this field is required";
      }
      if (yearIsEmpty) {
        inputYearList.add("border-red-400");
        labelYearList.add("text-red-500");
        // showing user error msg for this
        errorYear.innerHTML = "this field is required";
      }
    }
    // when user inputs data in the right way
    if (allCorrect) {
      const userDateInValid = !checkValidate(+year, +month, +day);
      if (userDateInValid) {
        inputYearList.add("border-red-400");
        labelYearList.add("text-red-500");
        inputMonthList.add("border-red-400");
        labelMonthList.add("text-red-500");
        inputDayList.add("border-red-400");
        labelDayList.add("text-red-500");
        errorDay.innerHTML = "must be a valid date";
      } else {
        CalCuTime();
      }
    }
  };

  return (
    <>
      <TimeContext.Provider value={data}>
        <div className="mx-5 mb-6 mt-20 rounded-3xl bg-white px-3 py-10 lg:mx-auto lg:w-[920px]">
          <Input />
          <ButtonCalcu iconArrow={iconArrow} onClick={handleClick} />
          <DisplayContext.Provider value={displayData}>
            <Display />
          </DisplayContext.Provider>
        </div>
      </TimeContext.Provider>
    </>
  );
}

export default App;
