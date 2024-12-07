const MarqueeComponent = () => {
  return (
    <div className="">
      <div className="bg-lightblue rfm-marquee-container bg-skin border-y-[3px] border-darkblue flex overflow-hidden md:py-1 md:pt-2 pb-2 pt-[8px] md:text-2xl text-lg tracking-wide">
        <div className="rfm-marquee">
          <div className="rfm-initial-child-container">
            {[...Array(50)].map((_, index) => (
              <div className="rfm-child" key={index}>
                <span className="mr-7 md:mr-11 uppercase text-darkblue">
                  I am going to be the crypto king
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="rfm-marquee">
          {[...Array(50)].map((_, index) => (
            <div className="rfm-child" key={index}>
              <span className="mr-7 md:mr-11 uppercase text-darkblue">
                I am going to be the crypto king
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeComponent;
