import Image from "next/image";
import { motion } from "framer-motion";

import revolut from "../../public/images/exchanges/revolut.png";
import kucoin from "../../public/images/exchanges/kucoin.svg";
import kraken from "../../public/images/exchanges/kraken.webp";
import bybit from "../../public/images/exchanges/bybit.svg";
import binance_futures from "../../public/images/exchanges/binance_futures.png";
import crypto from "../../public/images/exchanges/cdc.svg";
import okx from "../../public/images/exchanges/okx-dex.svg";
import gate from "../../public/images/exchanges/gate.png";
import htx from "../../public/images/exchanges/htx.svg";
import bitget from "../../public/images/exchanges/bitget.svg";
import woox from "../../public/images/exchanges/woox.webp";
import poloniex from "../../public/images/exchanges/poloniex.svg";
import bitmart from "../../public/images/exchanges/bitmart.svg";
import bitrue from "../../public/images/exchanges/bitrue.png";
import mexc from "../../public/images/exchanges/mexc.svg";
// import { Reveal } from "./utils/RevealComponent";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const gridSquareVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const ExchangesComponent = () => {
  return (
    <div className="bg-darkblue md:pb-24 pb-20 md:px-0 px-2 relative z-[30] md:pt-0 pt-8">
      <motion.div
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="max-w-1500 mx-auto relative md:pt-22 pt-10"
      >
        <motion.div variants={gridSquareVariants} className="h-full">
          <div className="md:text-[100px] text-[52px] text-center">
            <h1 className="md:leading-normal leading-[60px] text-border text-white-border text-lightblue">
              EXCHANGES
            </h1>
          </div>
        </motion.div>
        <motion.div variants={gridSquareVariants} className="h-full">
          <div className="text-center mb-5 md:text-2xl text-lg md:max-w-[400px] max-w-[340px] mx-auto text-white">
            <p className="uppercase">
              Pirate cat is available for trading on major exchanges.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          animate="show"
          className="grid min-[900px]:grid-cols-3 grid-cols-2 max-w-[1200px] min-[1200px]:grid-cols-3 w-full mx-auto pt-10 md:gap-5 gap-2 max-[1200px]:gap-2 px-5"
        >
          <motion.div variants={gridSquareVariants} className="h-full">
            <a href="" target="_blank" rel="noreferrer noopener">
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
          </motion.div>
          <motion.div variants={gridSquareVariants} className="h-full">
            <a href="" target="_blank" rel="noreferrer noopener">
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <Image
                    src={kucoin}
                    className="object-contain w-full h-full"
                    alt="Kucoin"
                  />
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div variants={gridSquareVariants} className="h-full">
            <a href="" target="_blank" rel="noreferrer noopener">
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <Image
                    src={kraken}
                    className="object-contain w-full h-full"
                    alt="Kraken"
                  />
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div variants={gridSquareVariants} className="h-full">
            <a href="" target="_blank" rel="noreferrer noopener">
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <Image
                    src={bybit}
                    className="object-contain w-full h-full"
                    alt="Bybit"
                  />
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div variants={gridSquareVariants} className="h-full">
            <a href="" target="_blank" rel="noreferrer noopener">
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <Image
                    src={binance_futures}
                    className="object-contain w-full h-full"
                    alt="Binance Futures"
                  />
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div variants={gridSquareVariants} className="h-full">
            <a href="" target="_blank" rel="noreferrer noopener">
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <Image
                    src={crypto}
                    className="object-contain w-full h-full"
                    alt="CDC"
                  />
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div variants={gridSquareVariants} className="h-full">
            <a href="" target="_blank" rel="noreferrer noopener">
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <Image
                    src={okx}
                    className="object-contain w-full h-full"
                    alt="OKX"
                  />
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div variants={gridSquareVariants} className="h-full">
            <a href="" target="_blank" rel="noreferrer noopener">
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <Image
                    src={gate}
                    className="object-contain w-full h-full"
                    alt="Gate"
                  />
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div variants={gridSquareVariants} className="h-full">
            <a href="" target="_blank" rel="noreferrer noopener">
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <Image
                    src={htx}
                    className="object-contain w-full h-full"
                    alt="HTX"
                  />
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div variants={gridSquareVariants} className="h-full">
            <a href="" target="_blank" rel="noreferrer noopener">
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <Image
                    src={bitget}
                    className="object-contain w-full h-full"
                    alt="BITGET"
                  />
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div variants={gridSquareVariants} className="h-full">
            <a href="" target="_blank" rel="noreferrer noopener">
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <Image
                    src={woox}
                    className="object-contain w-full h-full"
                    alt="WOOX"
                  />
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div variants={gridSquareVariants} className="h-full">
            <a href="" target="_blank" rel="noreferrer noopener">
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <Image
                    src={poloniex}
                    className="object-contain w-full h-full"
                    alt="Poloniex"
                  />
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div variants={gridSquareVariants} className="h-full">
            <a href="" target="_blank" rel="noreferrer noopener">
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <Image
                    src={bitrue}
                    className="object-contain w-full h-full"
                    alt="Bitrue"
                  />
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div variants={gridSquareVariants} className="h-full">
            <a href="" target="_blank" rel="noreferrer noopener">
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <Image
                    src={bitmart}
                    className="object-contain w-full h-full"
                    alt="Bitmart"
                  />
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div variants={gridSquareVariants} className="h-full">
            <a href="" target="_blank" rel="noreferrer noopener">
              <div className="border-[3px] border-white/20 text-black bg-black flex items-center justify-center p-2 px-5 gap-5 md:h-[130px] h-[100px] rounded cursor-pointer md:hover:scale-105 transition-all ease-in-out">
                <div className="relative w-full h-full md:p-5">
                  <Image
                    src={mexc}
                    className="object-contain w-full h-full"
                    alt="<Mexc>"
                  />
                </div>
              </div>
            </a>
          </motion.div>
        </motion.div>
        <motion.div className="h-full">
          <div className="text-center md:mt-24 mt-20 md:text-3xl text-2xl mx-auto text-white md:max-w-[600px] max-w-[300px] uppercase">
            <p>More exchange listings are on the way</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ExchangesComponent;
