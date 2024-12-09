import Image from "next/image";

import cat2 from "@/public/images/CAT2.svg";

const TokenomicComponent = () => {
  return (
    <div className="border-b-4 border-b-black md:pb-32 pb-20 md:px-0 px-5 tokenomic_bg">
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
              <strong className="text-[#D5441C]"> *1B*</strong> TOKENS I
              GARTHERED TOGETHER IN ONE PLACE, NOW YOU JUST HAVE TO FIND IT
            </p>
          </div>
        </div>
        <div className="h-full">
          <div className="md:p-20 p-5 pt-10 w-full flex md:flex-row flex-col gap-10 items-center">
            <div className="relative md:w-1/2 md:left-[10%]">
              <div className="absolute top-0 left-0 bottom-0 blink-bg right-0 z-10 md:rotate-[-5deg]"></div>
              <Image
                alt="cat2"
                priority={true}
                rel="preload"
                className="object-contain border-[10px] border-darkblue md:rotate-[-5deg]"
                src={cat2}
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="relative md:w-[400px] md:h-[200px] h-[100px] md:top-[-70px] md:block">
                <div className="md:absolute md:bottom-[-60px] md:mt-0 mt-8 md:left-[50px] z-10">
                  <a href="#" rel="noopener noreferrer" target="_blank">
                    <button className="md:text-3xl text-2xl border-4 rounded-[25px] border-black rotate-[5deg] shadow md:px-8 px-6 md:py-2 md:pt-4 py-1 pt-3 tracking-wide transition-all animate-bounce-fast bg-red text-white opacity-100">
                      BUY PICAT HERE
                    </button>
                  </a>
                </div>
              </div>
              <div className="h-full">
                <div className="flex flex-col md:gap-5 gap-3 relative z-20">
                  <div className="h-full">
                    <div className="flex-1 f p-5 border-4 border-white bg-darkblue text-center">
                      <div className="md:text-4xl text-xl font-pretty md:mb-[-14px] mb-[-10px]">
                        TOTAL SUPPLY
                      </div>
                      <div className="md:text-xl md:mt-3 mt-2 break-all">
                        1,000,000,000 $PICAT
                      </div>
                    </div>
                  </div>
                  <div className="h-full">
                    <div className="flex-1 p-5 border-4 border-white bg-darkblue text-center">
                      <div className="md:text-4xl text-xl font-pretty md:mb-[-14px] mb-[-10px]">
                        TOKEN ADDRESS
                      </div>
                      <div className="md:text-lg text-xs md:mt-3 mt-2 break-all">
                        ABCDEFABCDEFABCDEFABCDEFABCDEFABCDEFABCDEFABCDEFABCDEFABCDE
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicComponent;
