function ButtonCalcu({ iconArrow }) {
  return (
    <div className="" id="image-box">
      {/* <div className="absolute top-1/2 z-0 w-full border border-black"></div> */}
      <img
        className="z-10 mx-auto rounded-full bg-purple-900 p-4 opacity-100 hover:bg-purple-700 active:bg-black lg:mr-0"
        src={iconArrow}
        alt="image"
      />
    </div>
  );
}

export default ButtonCalcu;
