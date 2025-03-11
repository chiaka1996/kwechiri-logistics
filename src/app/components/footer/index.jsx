import Image from "next/image";

export default function Footer() {
    return (
        <section className="text-[1.6rem] bg-secondary_color text-[#fff]">
            <div className="container gridStyle gap-[10rem] py-[5rem]">
            <div>
                <h1 className="logo text-[#fff] text-[4rem] font-[700] leading-[6.5rem] tracking-[0.5rem]">Kwechiri</h1>
                <div>
                    <span className="text-[#fff] font-[600] text-[2rem] leading-[4rem]">FAST, SECURED, TRUSTED.</span> <br/> 
                    <span className="italic">Let's move your business forward</span>
            </div>
            </div>

            <div className="font-[500] text-[#fff] flex flex-col gap-[2rem] sm:pt-[1rem]">
                <span>About Us</span>
                <span>Services</span>
                <span>Contact Us</span>
            </div>

            <div className="font-[500] text-[#fff] flex flex-col gap-[2rem] sm:pt-[1rem]" >
                <div className="flex flex-row gap-x-[1rem]">
                <span className="material-symbols-outlined text-primary_color">phone</span>
                <span>08084052359</span>
                </div>
            </div>
            </div>
           
        </section>
    )
}