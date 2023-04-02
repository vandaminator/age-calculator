import { useContext } from "react";
import { TimeContext } from "../App";

function Input({}) {
  const data = useContext(TimeContext);
  const { Day, Month, Year } = data;

  const [day, setDay] = Day;
  const [month, setMonth] = Month;
  const [year, setYear] = Year;

  return (
    <div className="flex gap-2 p-4">
      <div className="flex flex-col">
        <label htmlFor="day" className="font-bold uppercase opacity-50">
          Day
        </label>
        <input
          type="number"
          name="day"
          id="day"
          className="decoration-none w-full rounded-lg border-2 pl-5 text-[32px] font-bold"
          value={day}
          onChange={({ target }) => setDay(target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="month" className="font-bold uppercase opacity-50">
          Month
        </label>
        <input
          type="number"
          name="month"
          id="month"
          className="decoration-none w-full rounded-lg border-2 pl-5 text-[32px] font-bold"
          value={month}
          onChange={({ target }) => setMonth(target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="year" className="font-bold uppercase opacity-50">
          Year
        </label>
        <input
          type="number"
          name="year"
          id="year"
          className="decoration-none w-full rounded-lg border-2 pl-5 text-[32px] font-bold"
          value={year}
          onChange={({ target }) => setYear(target.value)}
        />
      </div>
    </div>
  );
}

export default Input;
