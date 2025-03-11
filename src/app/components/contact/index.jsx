import Image from "next/image";

export default function Contact() {
    return (
        <section className="py-[10rem] text-[1.6rem]" id="contact">
            <div className="bg-primary_color mb-[1rem] rounded-[10px] text-[#fff] font-[500] w-[15rem] h-[45px] px-[2rem] mx-auto flex items-center justify-center">CONTACT US</div>
            <h2 className="text-secondary_color text-[4.4rem] text-center font-[700] leading-[5.5rem]">Let’s Connect & Move Forward</h2>
            <h3 className="max-w-[50rem] mx-auto text-center mb-[3rem] text-[1.8rem]">Have questions or need a logistics solution? Reach out to us—we’re here to help! 📦✈🚛</h3>
            <div className="max-w-[100rem] mx-auto flex flex-col gap-[3rem]">
                <div className="gridStyle gap-[5rem] mt-[2rem]">
                <div className="w-full">
                    <label className="font-[500]">Fullname</label><br/>
                    <input type="text" placeholder="john doe" className="mt-[0.5rem] w-full h-[5rem] rounded-[10px] border border-text_color outline-none px-[1rem]" />
                </div>
                <div className="w-full">
                    <label className="font-[500]">Phone</label><br/>
                    <input type="text" placeholder="08150456780" className="mt-[0.5rem] w-full h-[5rem] rounded-[10px] border border-text_color outline-none px-[1rem]" />
                </div>
            </div>
                <div className="w-full">
                    <label className="font-[500]">Email</label><br/>
                    <input type="text" placeholder="08150456780" className="mt-[0.5rem] w-full h-[5rem] rounded-[10px] border border-text_color outline-none px-[1rem]" />
                </div>
                <div className="w-full">
                    <label className="font-[500]">Message</label><br/>
                  <textarea className="h-[12rem] w-full rounded-[10px] border border-text_color p-[1rem] outline-none"> 
                  </textarea>
                </div>  

                <button className="bg-primary_color h-[5rem] w-full rounded-[10px] outline-none border border-primary_color text-[#fff] font-[500]">SEND MESSAGE!!</button>     
            </div>
        </section>
    )
}