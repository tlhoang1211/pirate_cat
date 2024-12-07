import Image from "next/image";

import mainCover from "/public/images/main_cover.png";
import mainLogo from "/public/images/logo.png";
import teleLogo from "/public/images/tele.png";
import xLogo from "/public/images/x.png";

const FooterComponent = () => {
  return (
    <div className="bg-yellow relative">
      <div className="absolute bottom-5 right-5 text-black text-sm">
        <a
          href="https://medium.com/@ponkesol/ponke-meme-coin-on-solana-whitepaper-d1fef2ebf1d8"
          target="_blank"
          rel="noreferrer noopener"
          className="font-proper font-bold underline"
        >
          WHITEPAPER
        </a>
      </div>
      <div className="min-h-[500px] md:pt-20 pt-12 mx-auto max-w-1500">
        <div className="h-full">
          <div className="md:text-[120px] text-[50px] text-center">
            <h1 className="text-black font-pretty">SOCIALS</h1>
            <div className="text-black md:text-3xl text-xl">
              Join the PONKE ARMY
            </div>
          </div>
        </div>
        <div className="flex md:gap-6 gap-3 justify-center md:pt-20 pt-10 z-[100] relative">
          <div className="relative md:size-16 w-12 h-12">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/PONKESOL"
            >
              <Image
                alt="head"
                fetchPriority="high"
                decoding="async"
                data-nImage="fill"
                className="bg-black rotate-[-5deg] md:hover:scale-105"
                sizes="100vw"
                src=""
              />
            </a>
          </div>
          <div className="relative md:size-16 w-12 h-12 md:hover:scale-105">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://t.me/ponkesol"
            >
              <Image
                alt="head"
                fetchPriority="high"
                decoding="async"
                data-nImage="fill"
                className="bg-black rotate-[5deg]"
                sizes="100vw"
                src=""
              />
            </a>
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse justify-center items-center md:mt-[-140px] mt-20">
          <div>
            <div className="relative md:w-[700px] md:h-[700px] w-[250px] h-[250px]">
              <Image
                alt="head"
                loading="lazy"
                decoding="async"
                data-nImage="fill"
                className="object-contain"
                sizes="100vw"
                src=""
              />
            </div>
          </div>
          <div className="flex flex-col justify-end md:h-[300px] md:mt-36">
            <a
              href="https://www.ponkeswap.xyz/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="text-white md:text-3xl text-2xl bg-red border-4 rounded-0 border-black rotate-[5deg] shadow md:px-8 px-6 md:py-2 md:pt-4 py-1 pt-3 tracking-wide transition-all strobe md:rotate-[-10deg] opacity-100 md:hover:scale-105">
                CLICK TO APE IN
              </button>
            </a>
            <div className="relative md:w-[300px] md:h-[90px] mt-10 z-20 md:block hidden">
              <Image
                alt="logo"
                fetchPriority="high"
                decoding="async"
                data-nImage="fill"
                className="object-contain"
                sizes="100vw"
                src=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
