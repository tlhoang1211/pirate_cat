import { useRef } from "react";
import Image from "next/image";

import headerLogo from "../../public/images/header_logo.svg";
import headerBtn from "../../public/images/header_btn.png";
import ScrollComponent from "./utils/ScrollComponent";
import useScrollRestoration from "../hooks/useScrollRestoration";

const HeaderComponent = () => {
  const divRef0 = useRef<HTMLDivElement | null>(null);
  const divRef1 = useRef<HTMLDivElement | null>(null);
  const divRef2 = useRef<HTMLDivElement | null>(null);

  useScrollRestoration();

  return (
    <div
      ref={divRef0}
      className="fixed left-0 right-0 top-0 z-[200] transition-all ease-in-out md:px-14 md:py-5 py-5 px-5"
    >
      <div className="flex justify-between items-center relative z-20 max-w-[2000px] mx-auto">
        <a href="#">
          <div
            ref={divRef1}
            className={`relative z-20 md:ml-[-20px] ml-[-5px] transition-all ease-in-out md:w-[270px] md:h-[30px] w-[170px] h-[5px]`}
          >
            <Image
              alt="Header Logo"
              priority={true}
              rel="preload"
              src={headerLogo}
              className="object-contain mt-[-30px]"
            />
          </div>
        </a>
        <a href="#">
          <div
            className="flex gap-8 md:h-[100px] h-[70px] md:h-[100px] pb-[10px] mb-[-4px]"
            ref={divRef2}
          >
            <Image
              alt="Main Cover"
              priority={true}
              rel="preload"
              className="bg-skin  md:hover:scale-105 flex items-center gap-1 transition-all"
              src={headerBtn}
              unoptimized={true}
            />
          </div>
        </a>
      </div>
      <ScrollComponent divRefs={[divRef0, divRef1, divRef2]} />
    </div>
  );
};

export default HeaderComponent;
