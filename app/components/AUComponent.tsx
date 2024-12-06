import Image from "next/image";
import ting from "../../public/images/tingting.png";
import h_line from "../../public/images/horizontal_line.png";

const AUComponent = () => {
  return (
    <div className="border-b-4 border-b-black md:pb-10 pb-20 md:px-0 px-2 relative z-[30] md:pt-0 pt-8 bg-lightblue">
      <div className="max-w-1500 mx-auto relative md:pt-22 pt-10">
        <div className="h-full" style={{ opacity: 1, transform: "none" }}>
          <div className="md:text-[100px] md:text-[100px] text-[42px] text-center text-darkblue b-white">
            <h1 className="md:leading-normal leading-[60px] px-5 text-border">
              WHY CHOOSE US?
            </h1>
          </div>
        </div>
        <div className="h-full" style={{ opacity: 1, transform: "none" }}>
          <div className="text-center mb-5 md:text-3xl text-lg md:max-w-[600px] max-w-[340px] mx-auto">
            <p className="md:leading-[40px] text-white uppercase">
              Effortlessly Integrated and Community-Based
            </p>
          </div>
        </div>
        <div className="w-full mx-auto md:pt-5 md:px-20 px-5">
          <div className="flex flex-col lg:flex-row md:gap-5 gap-3 w-full relative">
            <div className="flex-1">
              <div className="h-full" style={{ opacity: 1, transform: "none" }}>
                <div className="bg-[#C5E6FF] border-[9px] border-white rounded-3xl text-center p-6 custom-card-height flex-1 w-full relative overflow-hidden">
                  <div className="md:text-3xl text-xl text-darkblue pb-[10px] uppercase">
                    Finding the one coin
                  </div>
                  <Image
                    alt="h_line"
                    src={h_line}
                    className="max-w-[300px] mx-auto"
                    unoptimized={true}
                  />
                  <p className="max-w-[500px] pt-[10px] text-black mx-auto md:text-lg text-sm">
                    PIRATE CAT REPRESENTS THE NEXT WAVE IN THE CRYPTO OCEAN—A
                    DECENTRALIZED EXCHANGE (DEX) BLENDING FUN, TREASURE, AND
                    UNIQUE BENEFITS FOR ITS PIRATE TOKEN HOLDERS.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="h-full" style={{ opacity: 1, transform: "none" }}>
                <div className="bg-white border-[9px] border-[#C5E6FF] rounded-3xl text-center p-6 custom-card-height flex-1 w-full relative overflow-hidden">
                  <div className="md:text-3xl text-xl text-darkblue pb-[10px] uppercase">
                    Seamless Integrations
                  </div>
                  <Image
                    alt="h_line"
                    src={h_line}
                    className="max-w-[300px] mx-auto"
                    unoptimized={true}
                  />
                  <p className="max-w-[500px] pt-[10px] mx-auto md:text-lg text-sm text-black">
                    PIRATE CAT HAS BUILT CONNECTIONS WITH LEADING EXCHANGES,
                    WALLETS, AND CRYPTO SERVICES, GUARANTEEING SMOOTH
                    ACCESSIBILITY AND FUNCTIONALITY FOR USERS ACROSS MULTIPLE
                    PLATFORMS.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row md:gap-5 gap-3 w-full relative md:mt-5 mt-3">
            <div className="flex-1">
              <div className="h-full" style={{ opacity: 1, transform: "none" }}>
                <div className="bg-white border-[9px] border-[#C5E6FF] rounded-3xl text-center text-black p-6 custom-card-height flex-1 w-full relative overflow-hidden">
                  <div className="md:text-3xl text-xl text-darkblue pb-[10px] uppercase">
                    Get to know the crew
                  </div>
                  <Image
                    alt="h_line"
                    src={h_line}
                    className="max-w-[300px] mx-auto"
                    unoptimized={true}
                  />
                  <p className="max-w-[500px] pt-[10px] mx-auto md:text-lg text-sm">
                    PIRATE CAT THRIVES ON UNWAVERING COMMUNITY SUPPORT.
                    BOLSTERED BY CRYPTO ENTHUSIASTS AND MAJOR PLATFORMS,
                    PROPELLING ITS ADOPTION AND UTILITY ACROSS THE SEVEN CRYPTO
                    SEAS.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="h-full" style={{ opacity: 1, transform: "none" }}>
                <div className="bg-white border-[9px] border-[#C5E6FF] rounded-3xl text-center text-black p-6 custom-card-height flex-1 w-full relative overflow-hidden">
                  <div className="md:text-3xl text-xl text-darkblue pb-[10px] uppercase">
                    Expanding the horizons
                  </div>
                  <Image
                    alt="h_line"
                    src={h_line}
                    className="max-w-[300px] mx-auto"
                    unoptimized={true}
                  />
                  <p className="max-w-[500px] pt-[10px] mx-auto md:text-lg text-sm">
                    THE PIRATE CAT ECOSYSTEM KEEPS EXPANDING THROUGH
                    PARTNERSHIPS WITH CEXS, DEXS, AND TRAVEL PLATFORMS, ALLOWING
                    USERS TO USE $PICAT FOR TRADING, ASSET MANAGEMENT. AND
                    BOOKING GLOBAL TRAVEL.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="h-full pt-10 flex items-center justify-center "
          style={{ opacity: 1, transform: "none" }}
        >
          <a href="#">
            <div className="bg-darkblue md:border-[9px] border-[6px] border-white md:max-w-[450px] p-4 py-4 md:text-[35px] text-[20px] cursor-pointer md:hover:scale-105 transition-all ease-in-out">
              <button className="text-white text-center uppercase">
                Become a pirate now
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AUComponent;