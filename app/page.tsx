"use client";
import Head from "next/head";

import HeaderComponent from "./components/HeaderComponent";
import MainPartComponent from "./components/MainPartComponent";
import MarqueeComponent from "./components/MarqueeComponent";
import ExchangesComponent from "./components/ExchangesComponent";
import AUComponent from "./components/AUComponent";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="preload"
          href="/images/logo.png"
          as="image"
          type="image/png"
        />
      </Head>
      <main className="bg-[#a7e9ff] min-h-screen bg-cover bg-center relative">
        <HeaderComponent />
        <div className="z-20 relative">
          <MainPartComponent />
          <MarqueeComponent />
          <ExchangesComponent />
          <AUComponent />
        </div>
      </main>
    </>
  );
}
