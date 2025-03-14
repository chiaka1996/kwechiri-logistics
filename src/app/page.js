"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navigation, About, Service, WhyChooseUs, WorkProcess, Contact, Footer} from "./components";

export default function Home() {
 
  return (
    <main className="" >
      {/* <Navigation className="fixed top-0 left-0 w-full" /> */}
      <section className="w-full h-screen overflow-x-hidden relative " id="home">
        <div className="relative w-full h-screen bg-[#000]">
          <Image src="/images/banner.png" fill={true} alt="kwechiri logistics banner" className="opacity-40" />
        </div>
        <div className="absolute top-0 left-0 z-[500] w-full h-screen flex items-center">
          <div className="container text-[#fff] max-sm:text-center">
          <h1 className="text-[2.5rem] max-sm:text-[1.8rem] text-[#eb984e] font-[800]">Seamless Logistics!!</h1>
          <h2 className="max-w-[75rem] text-[5rem] max-sm:text-[3rem] font-[700]">Moving Your Business Forward with Expert Logistics.</h2>
          <h4 className="max-w-[50rem] text-[1.6rem] max-sm:text-[1.4rem] font-[500] text-[#dfdede]">Your Goods, Our Priority – On Time, Every Time.</h4>
          <Link href="/#contact" className="no-underline cursor-pointer">
          <button className="h-[5rem] px-[3rem] rounded-[50px] bg-primary outline-none text-[1.6rem] mt-[2rem] max-sm:mx-auto flex items-center gap-[1rem]">
            <span>Contact Us </span> 
            <span className="material-symbols-outlined">chevron_right</span> 
            </button>
            </Link>
          </div>
        </div>
      </section>

      <About />
      <Service />
      <WhyChooseUs />
      <WorkProcess />
      <Contact />
      <Footer />
    </main>
  );
}
