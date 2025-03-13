import Image from "next/image";

export default function Home() {
    return (
        <section className="py-[10rem] text-[1.6rem]">
            <div className="bg-primary_color mb-[1rem] rounded-[10px] text-[#fff] font-[500] w-[18rem] h-[45px] px-[2rem] mx-auto flex items-center justify-center">WHY CHOOSE US</div>
            <h2 className="text-secondary_color text-[4.4rem] text-center font-[700] leading-[5.5rem]">Why we are considered the best</h2>
            <h3 className="max-w-[50rem] mx-auto text-center mb-[3rem] text-[1.8rem]">When it comes to logistics; reliability, efficiency, and customer satisfaction are our top priorities.</h3>
            <div className="container">
                <div className="flex w-full gap-[5rem]">
                <div className="w-[75rem] flex flex-col gap-y-[2rem]">
                    {/* global reach */}
                    <div className="w-[90%] ml-auto rounded-[10px] border border-r-[0.5rem] border-r-[#088b76] min-h-[18rem] p-[2rem] shadow-xl flex items-center flex-row gap-[2rem]">
                        <div className="bg-[#088b76] flex items-center justify-center rounded-full w-[5rem] h-[5rem] shrink-0">
                        <span className="material-symbols-outlined text-[#fff]">globe</span>
                        </div>
                        <div className="flex flex-col gap-[0.5rem]">
                            <h2 className="text-secondary_color text-[2.4rem] font-[700]">Global Reach</h2>
                            <p className="text-[#606161] text-[1.8rem] leading-[3rem]">Our extensive network covers local and international logistics, offering comprehensive freight and delivery solutions worldwide.</p>
                        </div>
                    </div>

                    {/* secure and reliable */}
                    <div className="w-[90%] mr-auto rounded-[10px] border border-r-[0.5rem] border-r-primary_color min-h-[18rem] p-[2rem] shadow-xl flex items-center flex-row gap-[2rem]">
                        <div className="bg-primary_color flex items-center justify-center rounded-full w-[5rem] h-[5rem] shrink-0">
                        <span className="material-symbols-outlined text-[#fff]">lock</span>
                        </div>
                        <div className="flex flex-col gap-[0.5rem]">
                            <h2 className="text-secondary_color text-[2.4rem] font-[700]">Secure & Reliable</h2>
                            <p className="text-[#606161] text-[1.8rem] leading-[3rem]">We implement strict safety measures, real-time tracking, and professional handling to guarantee the security of your shipments.</p>
                        </div>
                    </div>

                    {/* Competitive Pricing */}
                    <div className="w-[90%] ml-auto rounded-[10px] border border-r-[0.5rem] border-r-[#7547f5] min-h-[18rem] p-[2rem] shadow-xl flex items-center flex-row gap-[2rem]">
                        <div className="bg-[#7547f5] flex items-center justify-center rounded-full w-[5rem] h-[5rem] shrink-0">
                        <span className="material-symbols-outlined text-[#fff]">sell</span>
                        </div>
                        <div className="flex flex-col gap-[0.5rem]">
                            <h2 className="text-secondary_color text-[2.4rem] font-[700]">Competitive Pricing</h2>
                            <p className="text-[#606161] text-[1.8rem] leading-[3rem]">Get premium logistics services at cost-effective rates with no hidden fees—ensuring you receive top value for your money.</p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="relative w-[50rem] h-[60rem]">
                       <Image src="/images/why-choose-us.png" fill={true} alt="why choose kwechiri logistics" className="rounded-[20px]" />
                    </div>
                </div>
                </div>

            </div>
        </section>
    )
}