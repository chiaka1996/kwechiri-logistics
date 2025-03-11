import Image from "next/image";

export default function WorkProcess() {
    return (
        <section className="py-[10rem] text-[1.6rem] bg-[#f1f8f7]" id="work_process">
            <div className="bg-primary_color mb-[1rem] rounded-[10px] text-[#fff] font-[500] w-[18rem] h-[45px] px-[2rem] mx-auto flex items-center justify-center">WORK PROCESS</div>
            <h2 className="text-secondary_color text-[4.4rem] text-center font-[700] leading-[5.5rem]">We always follow the best practices</h2>
            <h3 className="max-w-[50rem] mx-auto text-center mb-[3rem] text-[1.8rem]">Here’s how we get your shipments delivered with precision and care.</h3>
            <div className="container gridStyle gap-[3rem]">
                {/* work grid1 */}
                <div className="flex flex-col gap-y-[2rem]">
                    <div className="bg-[#d1ded0] rounded-full w-[25rem] h-[25rem] flex items-center justify-center relative mx-auto">
                        <div className="relative w-[23rem] h-[23rem] rounded-full">
                            <Image src="/images/process1.jpg" alt="kwechiri work process" fill={true} className="rounded-full" />
                        </div>
                        <div className="absolute top-[5rem] left-[-2rem] w-[7rem] h-[7rem] rounded-full bg-[#fbe9c980] flex items-center justify-center">
                        <div className="w-[5.5rem] h-[5.5rem] rounded-full bg-primary_color text-center flex items-center justify-center text-[2.4rem] text-[#fff] font-[900]">
                                1
                            </div>
                        </div>
                    </div>

                    <h1 className="text-[2.8rem] text-secondary_color font-[800] text-center">Receiving Goods</h1>
                    <p className="text-[#606161] text-[1.8rem] leading-[3rem] text-center">
                        We ensure your goods are received, inspected, 
                        and securely packaged for safe transportation. 
                    </p>
                </div>

                {/* work grid2 */}
                <div className="flex flex-col gap-y-[2rem]">
                    <div className="bg-[#d1ded0] rounded-full w-[25rem] h-[25rem] flex items-center justify-center relative mx-auto">
                        <div className="relative w-[23rem] h-[23rem] rounded-full">
                            <Image src="/images/process2.jpg" alt="kwechiri work process" fill={true} className="rounded-full" />
                        </div>
                        <div className="absolute top-[5rem] left-[-1rem] w-[7rem] h-[7rem] rounded-full bg-[#fbe9c980] flex items-center justify-center">
                        <div className="w-[5.5rem] h-[5.5rem] rounded-full bg-primary_color text-center flex items-center justify-center text-[2.4rem] text-[#fff] font-[900]">
                                2
                            </div>
                        </div>
                    </div>

                    <h1 className="text-[2.8rem] text-secondary_color font-[800] text-center">Documentation</h1>
                    <p className="text-[#606161] text-[1.8rem] leading-[3rem] text-center">
                    We handle all necessary paperwork to ensure smooth and hassle-free shipping.
                    From customs clearance to freight documentation.
                    </p>
                </div>

                {/* work grid3 */}
                <div className="flex flex-col gap-y-[2rem]">
                    <div className="bg-[#d1ded0] rounded-full w-[25rem] h-[25rem] flex items-center justify-center relative mx-auto">
                        <div className="relative w-[23rem] h-[23rem] rounded-full">
                            <Image src="/images/process3.jpg" alt="kwechiri work process" fill={true} className="rounded-full" />
                        </div>
                        <div className="absolute top-[5rem] left-[-1rem] w-[7rem] h-[7rem] rounded-full bg-[#fbe9c980] flex items-center justify-center">
                        <div className="w-[5.5rem] h-[5.5rem] rounded-full bg-primary_color text-center flex items-center justify-center text-[2.4rem] text-[#fff] font-[900]">
                                3
                            </div>
                        </div>
                    </div>

                    <h1 className="text-[2.8rem] text-secondary_color font-[800] text-center">Transportation</h1>
                    <p className="text-[#606161] text-[1.8rem] leading-[3rem] text-center">
                    We provide fast, secure, and efficient transportation solutions
                     to move your goods safely to their destination. Whether by air, land, or sea.
                    </p>
                </div>

                {/* work grid4 */}
                <div className="flex flex-col gap-y-[2rem]">
                    <div className="bg-[#d1ded0] rounded-full w-[25rem] h-[25rem] flex items-center justify-center relative mx-auto">
                        <div className="relative w-[23rem] h-[23rem] rounded-full">
                            <Image src="/images/process4.jpg" alt="kwechiri work process" fill={true} className="rounded-full" />
                        </div>
                        <div className="absolute top-[5rem] left-[-2rem] w-[7rem] h-[7rem] rounded-full bg-[#fbe9c980] flex items-center justify-center">
                        <div className="w-[5.5rem] h-[5.5rem] rounded-full bg-primary_color text-center flex items-center justify-center text-[2.4rem] text-[#fff] font-[900]">
                                4
                            </div>
                        </div>
                    </div>

                    <h1 className="text-[2.8rem] text-secondary_color font-[800] text-center">Delivering Goods</h1>
                    <p className="text-[#606161] text-[1.8rem] leading-[3rem] text-center">
                    We ensure your goods reach their destination on time and in perfect condition. 
                    Our efficient delivery network guarantees hassle-free shipping.
                    </p>
                </div>

                 
               
            </div>
        </section>
    )
}