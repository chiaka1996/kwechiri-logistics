"use client"
import { useState } from "react";
import Image from "next/image";
import { Navigation, About, Service} from "./components";

export default function Home() {
 
  return (
    <main className="">
      <Navigation />
      <section className="carousel W-full h-screen overflow-x-hidden relative mt-[-10rem]">
        <div className="relative w-full h-screen bg-[#000]">
          <Image src="/images/banner.png" fill={true} alt="kwechiri logistics banner" className="opacity-40" />
        </div>
        <div className="absolute top-0 left-0 z-[500] w-full h-screen flex items-center">
          <div className="container text-[#fff]">
          <h1 className="text-[2.5rem] text-[#eb984e] font-[800]">Seamless Delivery!!</h1>
          <h2 className="max-w-[75rem] text-[5rem] font-[700]">Moving Your Business Forward with Expert Logistics.</h2>
          <h4 className="max-w-[50rem] text-[1.6rem] font-[500] text-[#dfdede]">Your Goods, Our Priority – On Time, Every Time.</h4>
          <button className="h-[6rem] px-[2rem] rounded-[50px] bg-primary outline-none text-[1.6rem] mt-[2rem]">Request a Qoute <span className="pl-[1rem]">&#x2B9E;</span> </button>
          </div>
        </div>
      </section>

      <About />
      <Service />
    </main>
  );
}
