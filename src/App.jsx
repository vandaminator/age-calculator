function App() {
  return (
    <>
      <div className="mx-5 mb-6 mt-20 rounded-3xl bg-white px-3 py-10">
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
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
