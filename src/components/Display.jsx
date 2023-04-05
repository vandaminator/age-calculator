import { useContext } from "react";
import { DisplayContext } from "../App";

function Display() {
  const data = useContext(DisplayContext);
  const { Day, Month, Year } = data;

  const [day] = Day;
  const [month] = Month;
  const [year] = Year;
  return (
    <>
      <div className="mb-5 mt-10">
        <p className="text-5xl font-extrabold min-[360px]:text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="mr-2 text-purple-900">
            {year === "" ? "- -" : year}
          </span>
          years
        </p>
        <p className="text-5xl font-extrabold min-[360px]:text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="mr-2 text-purple-900">
            {month === "" ? "- -" : month}
          </span>
          months
        </p>
        <p className="text-5xl font-extrabold min-[360px]:text-6xl sm:text-7xl md:text-8xl lg:text-9xl ">
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
