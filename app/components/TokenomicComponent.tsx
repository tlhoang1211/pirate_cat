import Image from "next/image";

import mainCover from "/public/images/main_cover.png";
import mainLogo from "/public/images/logo.png";
import teleLogo from "/public/images/tele.png";
import xLogo from "/public/images/x.png";

const TokenomicComponent = () => {
  return (
    <div className="border-b-4 border-b-black md:pb-32 pb-20 md:px-0 px-5 bg-lightblue">
      <div className="max-w-1500 mx-auto relative md:pt-24 pt-20">
        <div className="h-full">
          <div className="md:text-[100px] text-[52px] text-center">
            <h1 className="text-darkblue md:leading-normal leading-[60px] font-pretty">
              TOKENOMICS
            </h1>
          </div>
          <div className="text-center mb-5 md:text-3xl text-lg max-w-[340px] md:mt-0 mt-2 md:max-w-[700px] mx-auto text-white">
            <p className="">
              YOU WANT MY TREASURE? YOU CAN HAVE IT! I LEFT
              <strong className="text-red"> *987*</strong> TOKENS I GARTHERED
              TOGETHER IN ONE PLACE, NOW YOU JUST HAVE TO FIND IT
            </p>
          </div>
        </div>
        <div className="h-full">
          <div className="md:p-20 p-5 pt-10 w-full flex md:flex-row flex-col gap-10 items-center">
            <div className="relative md:w-1/2 overflow-hidden">
              <div className="absolute top-0 left-0 bottom-0 bg-transparent blink-bg right-0 z-10"></div>
              <Image
                className="object-contain border-4 border-yellow"
                src=""
                alt="trading"
              />
            </div>
            <div className="flex flex-col items-center">
              {/* <div className="relative md:w-[400px] w-[200px] h-[200px] md:top-[-70px] md:block hidden">
                <Image
                  alt="trading"
                  loading="lazy"
                  decoding="async"
                  data-nImage="fill"
                  className="object-contain strobe"
                  sizes="100vw"
                  src=""
                />
              </div> */}
              <div className="h-full">
                <div className="flex flex-col md:gap-5 gap-3 relative z-20">
                  <div className="h-full">
                    <div className="flex-1 f p-5 border-4 border-white bg-darkblue text-center">
                      <div className="md:text-4xl text-xl font-pretty md:mb-[-14px] mb-[-10px]">
                        TOTAL SUPPLY
                      </div>
                      <div className="md:text-xl md:mt-3 mt-2 break-all">
                        555,555,555 $PICAT
                      </div>
                    </div>
                  </div>
                  <div className="h-full">
                    <div className="flex-1 p-5 border-4 border-white bg-darkblue text-center">
                      <div className="md:text-4xl text-xl font-pretty md:mb-[-14px] mb-[-10px]">
                        TOKEN ADDRESS
                      </div>
                      <div className="md:text-lg text-xs md:mt-3 mt-2 break-all">
                        ABCDEF
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:absolute md:bottom-[-60px] md:mt-0 mt-10 md:left-[200px] z-10">
              <a href="#" rel="noopener noreferrer" target="_blank">
                <button className="md:text-3xl text-2xl border-4 rounded-[25px] border-black rotate-[5deg] shadow md:px-8 px-6 md:py-2 md:pt-4 py-1 pt-3 tracking-wide transition-all animate-bounce-fast bg-red text-white opacity-100 md:hover:scale-105">
                  BUY PICAT HERE
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicComponent;
