import Image from "next/image";
import revolut from "../../public/images/revolut.png";
import { Reveal } from "./utils/RevealComponent";

const ExchangesComponent = () => {
  return (
    <div className="bg-darkblue md:pb-24 pb-20 md:px-0 px-2 relative z-[30] md:pt-0 pt-8">
      <div className="max-w-1500 mx-auto relative md:pt-22 pt-10">
        <Reveal>
          <div className="h-full">
            <div className="md:text-[100px] text-[52px] text-center">
              <h1 className="md:leading-normal leading-[60px] text-border text-white-border text-lightblue">
                EXCHANGES
              </h1>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="h-full">
            <div className="text-center mb-5 md:text-2xl text-lg md:max-w-[400px] max-w-[340px] mx-auto text-white">
              <p className="uppercase">
                Pirate cat is available for trading on major exchanges.
              </p>
            </div>
          </div>
        </Reveal>
        <div className="grid min-[900px]:grid-cols-3 grid-cols-2 max-w-[1200px] min-[1200px]:grid-cols-3 w-full mx-auto pt-10 md:gap-5 gap-2 max-[1200px]:gap-2 px-5">
          <div className="h-full">
            <a
              href="https://www.revolut.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <Image
                    src={revolut}
                    className="object-contain w-full h-full"
                    alt="Revolut"
                  />
                </div>
              </div>
            </a>
          </div>
          <div className="h-full">
            <a
              href="https://www.kucoin.com/trade/PONKE-USDT"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <Image
                    src={revolut}
                    className="object-contain w-full h-full"
                    alt="Kucoin"
                  />
                </div>
              </div>
            </a>
          </div>
          <div className="h-full">
            <a
              href="https://pro.kraken.com/app/trade/ponke-usd"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <Image
                    src={revolut}
                    className="object-contain w-full h-full"
                    alt="Kraken"
                  />
                </div>
              </div>
            </a>
          </div>
          <div className="h-full">
            <a
              href="https://www.bybit.com/en/trade/spot/PONKE/USDT"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <Image
                    src={revolut}
                    className="object-contain w-full h-full"
                    alt="Bybit"
                  />
                </div>
              </div>
            </a>
          </div>
          <div className="h-full">
            <a
              href="https://www.binance.com/en/futures/PONKEUSDT"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <Image
                    src={revolut}
                    className="object-contain w-full h-full"
                    alt="Binance Futures"
                  />
                </div>
              </div>
            </a>
          </div>
          <div className="h-full">
            <a
              href="https://crypto.com/exchange/trade/PONKE_USD"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <Image
                    src={revolut}
                    className="object-contain w-full h-full"
                    alt="CDC"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="h-full">
          <div className="text-center md:mt-24 mt-20 md:text-3xl text-2xl mx-auto text-white md:max-w-[600px] max-w-[300px] uppercase">
            <p>More exchange listings are on the way</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangesComponent;
