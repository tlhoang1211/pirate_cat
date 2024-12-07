import Image from "next/image";

import mainCover from "/public/images/main_cover.png";
import mainLogo from "/public/images/logo.png";
import teleLogo from "/public/images/tele.png";
import xLogo from "/public/images/x.png";

const InstructionComponent = () => {
  return (
    <div
      className="border-b-4 border-b-black md:pb-32 pb-20 md:px-0 px-5 bg-darkblue"
      id="buy"
    >
      <div className="max-w-1500 mx-auto relative md:pt-24 pt-20 ">
        <div className="h-full">
          <div className="md:text-[100px] text-[52px] text-center ">
            <h1 className="text-lightblue md:leading-normal leading-[60px]">
              HOW TO BUY
            </h1>
          </div>
        </div>
        <div className="h-full">
          <div className="text-center mb-5 md:text-3xl text-xl max-w-[600px] mx-auto text-white">
            <p className="md:leading-[45px]">
              Follow these easy steps to become a $PICAT holder.
            </p>
          </div>
        </div>
        <div className="md:flex md:px-12 xl:px-0">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:mt-20 mt-16 text-white px-3 md:px-0 md:w-1/2">
            <div className="p-6 bg-black border-2 border-white/20">
              <div className="text-white  md:text-3xl text-2xl mb-2">
                <strong className="text-yellow">1.</strong> Create a wallet with
                Phantom
              </div>
              <p className="text-white/80 cursor-pointer md:text-base text-sm">
                Visit{" "}
                <a
                  className="underline text-red"
                  href="https://phantom.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  phantom.app
                </a>{" "}
                and follow the simple steps to create a new account with the
                Phantom app or browser extension.
              </p>
            </div>
            <div className="p-6 bg-black border-2 border-white/20">
              <div className="text-white  md:text-3xl text-2xl mb-2">
                <strong className="text-yellow">2.</strong> Get some $SOL
              </div>
              <p className="text-white/80 md:text-base text-sm">
                Tap the BUY button in the app to purchase Solana, or deposit
                $SOL to your Phantom wallet from the crypto exchange of your
                choice.
              </p>
            </div>
            <div className="p-6 bg-black border-2 border-white/20">
              <div className="text-white  md:text-3xl text-2xl mb-2">
                <strong className="text-yellow">3.</strong> Swap $SOL for $PICAT
              </div>
              <p className="text-white/80 md:text-base text-sm">
                Tap the SWAP icon in your Phantom wallet and paste the $PICAT
                token address. Swap your $SOL for $PICAT.
              </p>
            </div>
            <div className="p-6 bg-black border-2 border-white/20">
              <div className="text-white  md:text-3xl text-2xl mb-2">
                <strong className="text-yellow">4.</strong> You are now a $PICAT
                holder!
              </div>
              <p className="text-white/80 md:text-base text-sm">
                Welcome to the #PICAT Army!
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-5 mb-[-50px] md:w-1/2">
            <Image
              alt="1"
              src=""
              className="lg:w-[500px] w-[240px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionComponent;
