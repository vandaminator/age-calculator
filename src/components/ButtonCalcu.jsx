function ButtonCalcu({ iconArrow, onClick }) {
  return (
    <div className="flex justify-center lg:justify-end" id="image-box">
      {/* <div className="absolute top-1/2 z-0 w-full border border-black"></div> */}
      <button className="" onClick={onClick}>
        <img
          className="z-10 rounded-full bg-purple-900 p-4 opacity-100 hover:bg-purple-700 active:bg-black "
          src={iconArrow}
          alt="image"
        />
      </button>
    </div>
  );
}

export default ButtonCalcu;
