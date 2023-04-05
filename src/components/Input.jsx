import { useContext } from "react";
import { TimeContext } from "../App";

function Input({}) {
  const data = useContext(TimeContext);
  const { Day, Month, Year } = data;

  const [day, setDay] = Day;
  const [month, setMonth] = Month;
  const [year, setYear] = Year;

  return (
    <div className="flex gap-2 p-4 lg:w-3/5">
      <div className="flex flex-col">
        <label
          htmlFor="day"
          className="font-bold uppercase opacity-50"
          id="label-day"
        >
          Day
        </label>
        <input
          placeholder="DD"
          type="text"
          name="day"
          id="day"
          className="decoration-none w-full rounded-lg border-2 pl-5 text-[32px] font-bold hover:border-purple-900 active:border-purple-900"
          value={day}
          onChange={({ target }) => {
            let { value } = target;
            value = value.slice(0, 2);
            setDay(value);
          }}
        />
        <p className="text-sm text-red-400" id="error-day"></p>
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="month"
          className="font-bold uppercase opacity-50"
          id="label-month"
        >
          Month
        </label>
        <input
          placeholder="MM"
          type="text"
          name="month"
          id="month"
          className="decoration-none w-full rounded-lg border-2 pl-5 text-[32px] font-bold hover:border-purple-900 active:border-purple-900"
          value={month}
          onChange={({ target }) => {
            let { value } = target;
            value = value.slice(0, 2);
            setMonth(value);
          }}
        />
        <p className="text-sm text-red-400" id="error-month"></p>
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="year"
          className="font-bold uppercase opacity-50"
          id="label-year"
        >
          Year
        </label>
        <input
          placeholder="YYYY"
          type="text"
          name="year"
          id="year"
          className="decoration-none w-full rounded-lg border-2 pl-3 text-[32px] font-bold hover:border-purple-900 active:border-purple-900"
          value={year}
          onChange={({ target }) => {
            let { value } = target;
            value = value.slice(0, 4);
            setYear(value);
          }}
        />
        <p className="text-sm text-red-400" id="error-year"></p>
      </div>
    </div>
  );
}

export default Input;
