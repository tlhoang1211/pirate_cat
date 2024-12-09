import Image from "next/image";

import cat3 from "/public/images/CAT3.svg";
import xLogo from "/public/images/x.svg";
import teleLogo from "/public/images/tele.svg";

const FooterComponent = () => {
  return (
    <div className="footer_bg relative">
      {/* <div className="absolute bottom-5 right-5 text-black text-sm">
        <a
          href="https://medium.com/@ponkesol/ponke-meme-coin-on-solana-whitepaper-d1fef2ebf1d8"
          target="_blank"
          rel="noreferrer noopener"
          className="font-proper font-bold underline"
        >
          WHITEPAPER
        </a>
      </div> */}
      <div className="min-h-[500px] md:pt-20 pt-12 mx-auto max-w-1500">
        <div className="h-full">
          <div className="md:text-[120px] text-[50px] text-center">
            <h1 className="text-lightblue uppercase">SOCIALS!</h1>
            <div className="text-white md:text-3xl text-xl uppercase">
              Join the pirate crew by following us on socials
            </div>
          </div>
        </div>
        <div className="flex md:gap-6 gap-3 justify-center md:pt-20 md:pb-20 pb-0 pt-10 z-[100] relative">
          <div className="relative md:size-16 w-12 h-12 rounded-[15px]">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/PONKESOL"
            >
              <Image
                alt="tele"
                priority={true}
                rel="preload"
                className="rounded-[15px]"
                src={teleLogo}
              />
            </a>
          </div>
          <div className="relative md:size-16 w-12 h-12 rounded-[15px]">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://t.me/ponkesol"
            >
              <Image
                alt="x"
                priority={true}
                rel="preload"
                className="rounded-[15px]"
                src={xLogo}
              />
            </a>
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse justify-center items-center md:-mt-32 md:px-28">
          <div className="md:w-1/2">
            <div className="relative lg:w-[700px] lg:h-[700px] md:w-[350px] md:h-[355px] sm: lg:left-[-80px] ml-auto">
              <Image
                alt="head"
                priority={true}
                rel="preload"
                className="object-contain"
                src={cat3}
                style={{
                  height: "100%",
                  width: "94%",
                }}
              />
            </div>
          </div>
          <div className="flex flex-col w-1/2 lg:h-[300px] lg:mt-0 md:mt-20 m-10 lg:pt-60 justify-center items-center">
            <a href="" rel="noopener noreferrer" target="_blank">
              <button className="lg:text-3xl md:text-2xl sm:text-3xl text-darkblue bg-white border-4 rounded-0 border-lightblue rotate-[5deg] shadow md:px-8 px-6 md:py-2 md:pt-4 py-1 pt-3 tracking-wide transition-all strobe md:rotate-[-10deg] opacity-100 md:hover:scale-105">
                CLICK TO FIND THE ONE COIN
              </button>
            </a>
            <div className="relative md:w-[300px] md:h-[90px] mt-10 z-20 md:block hidden md:text-2xl lg:text-8xl md:text-4xl md:rotate-[10deg] md:ml-[200px] ml-[100px]">
              <p className="">$PICAT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
