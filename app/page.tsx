"use client";

import HeaderComponent from "@/app/components/HeaderComponent";
import MainPartComponent from "@/app/components/MainPartComponent";
import MarqueeComponent from "@/app/components/utils/MarqueeComponent";
import ExchangesComponent from "@/app/components/ExchangesComponent.jsx";
import AUComponent from "@/app/components/AUComponent";
import InstructionComponent from "@/app/components/InstructionComponent";
import TokenomicComponent from "@/app/components/TokenomicComponent";
import FooterComponent from "@/app/components/FooterComponent";

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
