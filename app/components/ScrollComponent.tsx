import React, { useEffect } from "react";

interface ScrollComponentProps {
  divRefs: React.RefObject<HTMLDivElement>[];
}

const ScrollComponent: React.FC<ScrollComponentProps> = ({ divRefs }) => {
  const handleScroll = () => {
    divRefs.forEach((divRef, index) => {
      if (divRef.current) {
        if (window.scrollY > 50) {
          if (index === 0) {
            divRef.current.classList.add(
              "bg-lightblue",
              "border-b-2",
              "py-1",
              "border-b-black",
              "shadow-xl",
              "px-3"
            );
            divRef.current.classList.remove(
              "bg-transparent",
              "md:py-5",
              "py-5",
              "px-5"
            );
          } else if (index === 1) {
            divRef.current.classList.add("md:w-[190px]");
            divRef.current.classList.remove("md:w-[270px]", "h-[20px]");
          } else if (index === 2) {
            divRef.current.classList.remove("md:h-[100px]");
          }
        } else if (window.scrollY === 0) {
          if (index === 0) {
            divRef.current.classList.remove(
              "bg-lightblue",
              "border-b-2",
              "py-1",
              "border-b-black",
              "shadow-xl",
              "px-3"
            );
            divRef.current.classList.add(
              "bg-transparent",
              "md:py-5",
              "py-5",
              "px-5"
            );
          } else if (index === 1) {
            divRef.current.classList.remove("md:w-[190px]");
            divRef.current.classList.add("md:w-[270px]", "h-[20px]");
          } else if (index === 2) {
            divRef.current.classList.add("md:h-[100px]");
          }
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
};

export default ScrollComponent;
