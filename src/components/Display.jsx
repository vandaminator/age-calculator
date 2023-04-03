import { useContext } from "react";
import { TimeContext } from "../App";

function Display() {
  const data = useContext(TimeContext);
  const { Day, Month, Year } = data;

  const [day, setDay] = Day;
  const [month, setMonth] = Month;
  const [year, setYear] = Year;
  return (
    <>
      <div className="mb-5 mt-10">
        <p className="min-[360px]:text-6xl text-5xl font-extrabold sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="mr-2 text-purple-900">
            {year === "" ? "- -" : year}
          </span>
          years
        </p>
        <p className="min-[360px]:text-6xl text-5xl font-extrabold sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="mr-2 text-purple-900">
            {month === "" ? "- -" : month}
          </span>
          months
        </p>
        <p className="min-[360px]:text-6xl text-5xl font-extrabold sm:text-7xl md:text-8xl lg:text-9xl ">
          <span className="mr-2 text-purple-900">
            {day === "" ? "- -" : day}
          </span>
          days
        </p>
      </div>
    </>
  );
}

export default Display;
