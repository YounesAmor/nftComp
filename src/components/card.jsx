const PreviewCard = () => {
  return (
    <div className="w-[350px] h-[580px] bg-darkBlueCard border rounded-lg border-transparent flex flex-row justify-center">
      <div id="wrapper" className="m-[20px]">
        <img
          className="w-[300px] h-[300px] border rounded-lg border-transparent"
          src={require("../assets/images/image-equilibrium.jpg")}
          alt="blockchain"
        />
        <p className="text-xl text-white font-Outfit my-[20px]">
          Equilibrium #3429
        </p>
        <p className="text-md text-SoftBlue font-Outfit my-[20px]">
          Our equilibrium colloection promotes balance and calme
        </p>
        <div id="separator" className="divide-y divide-SoftBlue">
          <div className="flex justify-between  my-[20px]">
            <div>
              <svg
                width="11"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block"
              >
                <path
                  d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
                  fill="#00FFF8"
                />
              </svg>
              <p className="inline-block text-sm ml-2 text-Cyan">0.041ETH</p>
            </div>
            <div className="flex items-center">
              <svg
                width="17"
                height="17"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block text-SoftBlue"
              >
                <path
                  d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
                  fill="#8BACD9"
                />
              </svg>
              <p className="inline-block ml-1 text-SoftBlue">3 days left</p>
            </div>
          </div>
          <div className="flex mt-[15px] py-[20px]">
            <img
              src={require("../assets/images/image-avatar.png")}
              alt="Creator"
              className="w-7 h-7 border rounded-full border-white"
            />
            <p className="text-SoftBlue ml-2">
              Creation of <span className="text-white">Jules Wyverne</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;
