import Image from "next/image";

export default function Home() {
    return (
      <section className="container gridStyle py-[15rem] gap-[5rem]"> 
       
        <div className="max-w-[70rem] h-[50rem] rounded-[20px]">
            <div className="relative w-full h-full rounded-[20px]">
            <Image src="/images/about-image.png" fill={true} alt="kwechiri logistics banner" className="rounded-[20px]" />
            </div>
        </div>

        <div className="flex flex-col gap-y-[1.5rem] text-[1.7rem] text-[#606161] leading-[3rem] font-[500]">
           <button className="bg-primary_color rounded-[10px] text-[#fff] font-[500] w-[15rem] h-[45px] px-[2rem]">WHO WE ARE</button>        
            <p>
            We are a leading logistics and mobility solutions provider,
            offering seamless transportation and delivery services tailored to your needs. From ticketing and car-hailing to door-to-door delivery, 
            air freight, and land freight, we ensure fast, reliable, and efficient solutions for individuals and businesses.
            </p>
            <p>
            With a commitment to innovation, safety, and customer satisfaction, we connect people and businesses through a smart, 
            hassle-free logistics network. Whether you need to book a ride, send a package, or transport goods globally, we’ve got you covered!
            </p>

            <ul className="flex flex-col gap-y-[1.2rem] text-secondary_color text-[1.8rem] font-[600] mt-[1rem]">
                <li className="flex gap-x-[1rem] items-center">
                <span className="material-symbols-outlined">help</span>
                <span>Free Travel & Airline Ticketing Consultation</span>
                </li>
                <li className="flex gap-x-[1rem] items-center">
                <span className="material-symbols-outlined">schedule</span>
                <span>24hrs Customer Support</span>
                </li>
                <li className="flex gap-x-[1rem]">
                <span className="material-symbols-outlined">delivery_truck_speed</span>
                <span>Fast Delivery</span>
                </li>
                <li className="flex gap-x-[1rem]">
                <span className="material-symbols-outlined">package_2</span>
                <span>Excelent package handling</span>
                </li>
                {/* <li className="flex gap-x-[1rem]">
                <span className="material-symbols-outlined">free_cancellation</span>
                <span>Free Delivery after the first 5 delivery</span>
                </li> */}
            </ul>
        </div>

      </section>
    );
  }