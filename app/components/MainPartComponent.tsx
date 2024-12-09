import Image from "next/image";

import mainCover from "@/public/images/rays.svg";
import mainLogo from "@/public/images/logo.svg";
import teleLogo from "@/public/images/tele.svg";
import xLogo from "@/public/images/x.svg";

const MainPartComponent = () => {
  return (
    <div className="bg-lightblue relative overflow-hidden">
      <div className="relative p-5 md:px-14 min-h-screen max-w-[2000px] mx-auto pt-[100px]">
        <div className="text-black relative flex justify-center items-center flex-col md:pt-0 pt-[10px] z-10">
          <div className="relative md:size-[58vh] size-[50vh] z-20">
            <div className="absolute size-[200vh] left-1/2 translate-x-[-50%] top-1/2 translate-y-[-45%]">
              <Image
                rel="preload"
                priority={true}
                fill={true}
                alt="Main Cover"
                className="object-contain"
                src={mainCover}
                style={{ top: "-40px" }}
              />
            </div>
            <Image
              alt="Main Logo"
              rel="preload"
              priority={true}
              fill={true}
              className="object-contain"
              src={mainLogo}
            />
          </div>
          <div className="relative z-20 flex flex-col items-center md:mt-[-25px]">
            <div className="uppercase md:text-[35px] text-[25px] text-black">
              The Crypto Pirate Of Sui
            </div>
            <a href="#exchanges" className="flex justify-center w-full">
              <button className="uppercase bg-darkblue text-lightblue rounded-[15px] md:leading-[1.25rem] text-xl shadow md:px-8 px-6 md:py-2 md:pt-2 py-1 tracking-wide transition-all md:mt-4 mt-4 w-full md:w-auto opacity-100 md:hover:scale-105">
                Get to know the crew
              </button>
            </a>
            <div className="md:absolute relative flex mt-10 md:mt-10 justify-center items-center md:bottom-[-4rem] z-[20]">
              <div className="flex gap-2">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/PONKESOL"
                >
                  <div className="relative md:size-11 size-10 md:hover:scale-105">
                    <Image
                      alt="tele"
                      priority={true}
                      rel="preload"
                      className="bg-white rounded-[10px]"
                      src={teleLogo}
                    />
                  </div>
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://twitter.com/PONKESOL"
                >
                  <div className="relative md:size-11 size-10 md:hover:scale-105">
                    <Image
                      alt="x"
                      priority={true}
                      rel="preload"
                      className="bg-white rounded-[10px]"
                      src={xLogo}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPartComponent;
