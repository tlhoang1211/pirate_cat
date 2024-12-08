"use client";

import HeaderComponent from "./components/HeaderComponent";
import MainPartComponent from "./components/MainPartComponent";
import MarqueeComponent from "./components/utils/MarqueeComponent";
import ExchangesComponent from "./components/ExchangesComponent.jsx";
import AUComponent from "./components/AUComponent";
import InstructionComponent from "./components/InstructionComponent";
import TokenomicComponent from "./components/TokenomicComponent";
import FooterComponent from "./components/FooterComponent";

export default function Home() {
  return (
    <main className="bg-[#e4eef6] min-h-screen bg-cover bg-center relative">
      <HeaderComponent />
      <div className="z-20 relative">
        <MainPartComponent />
        <MarqueeComponent />
        <ExchangesComponent />
        <AUComponent />
        <InstructionComponent />
        <TokenomicComponent />
        <FooterComponent />
      </div>
    </main>
  );
}
