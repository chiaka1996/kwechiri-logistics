import Image from "next/image";

export default function Service() {
    return (
    //     css in global css
      <section className="py-[10rem] text-[1.6rem] text-[#606161] leading-[2.5rem] bg-primary_background" id="service"> 
        <div className="container gridStyle gap-[5rem]">
            <div>
            <h1 className="bg-primary_color mb-[3rem] rounded-[10px] text-[#fff] font-[500] w-[15rem] h-[45px] px-[2rem] flex items-center justify-center">OUR SERVICES</h1>
            <h2 className="text-secondary_color text-[5rem] font-[700] leading-[7rem]">Logistics services tailored to your needs.</h2>
            </div>
            <div className="bg-[#fff] rounded-[10px] p-[3rem] flex flex-col gap-[1.5rem]">
                <div className="bg-secondary_color rounded-full w-[5rem] h-[5rem] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#fff]">book_online</span>    
                </div>
                <h1 className="text-secondary_color font-[600] text-[2.4rem] leading-[3.5rem]">Flight Ticketing & Protocol Service</h1>
                <p className="px-[1rem] pb-[3rem]">
                Seamless travel starts with expert planning. Our Flight Ticketing & Protocol Services ensure a hassle-free journey, 
                whether you're traveling for business or leisure. From booking the best flights to providing VIP airport assistance, 
                we handle every detail with precision and care.
                </p>
            </div>

            <div className="bg-[#fff] rounded-[10px] p-[3rem] flex flex-col gap-[1.5rem]">
                <div className="bg-secondary_color rounded-full w-[5rem] h-[5rem] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#fff]">travel</span>    
                </div>
                <h1 className="text-secondary_color font-[600] text-[2.4rem] leading-[3.5rem]">Air Freight</h1>
                <p className="px-[1rem] pb-[3rem]">
                When time is of the essence, our air freight solutions ensure your cargo reaches its destination swiftly and securely. 
                We specialize in fast, reliable, and cost-effective air freight services tailored to your business needs.
                </p>
            </div>

            <div className="bg-[#fff] rounded-[10px] p-[3rem] flex flex-col gap-[1.5rem]">
                <div className="bg-secondary_color rounded-full w-[5rem] h-[5rem] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#fff]">local_shipping</span>    
                </div>
                <h1 className="text-secondary_color font-[600] text-[2.4rem] leading-[3.5rem]">Land Freight</h1>
                <p className="">
                Reliable and cost-effective, our land freight solutions provide seamless transportation for your goods across local and international routes.
                From small parcels to heavy cargo, we have the expertise and resources to handle all your land freight needs with precision and care
                </p>
            </div>

            <div className="bg-[#fff] rounded-[10px] p-[3rem] flex flex-col gap-[1.5rem]">
                <div className="bg-secondary_color rounded-full w-[5rem] h-[5rem] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#fff]">local_taxi</span>    
                </div>
                <h1 className="text-secondary_color font-[600] text-[2.4rem] leading-[3.5rem]">Car Hailing</h1>
                <p className="">
                Need a ride? Our Car Hailing Service offers fast, reliable, and comfortable transportation at your convenience. Whether you're heading to the airport, 
                a business meeting, or exploring the city, we ensure a seamless travel experience with professional drivers and well-maintained vehicles.
                </p>
            </div>

            <div className="bg-[#fff] rounded-[10px] p-[3rem] flex flex-col gap-[1.5rem]">
                <div className="bg-secondary_color rounded-full w-[5rem] h-[5rem] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#fff]">delivery_truck_bolt</span>    
                </div>
                <h1 className="text-secondary_color font-[600] text-[2.4rem] leading-[3.5rem]">Door-Door Delivery</h1>
                <p className="">
                Get your packages delivered quickly and securely with our Door-to-Door Delivery Service. We provide hassle-free shipping solutions, 
                 ensuring that your items reach their destination safely and on time. Whether it's documents, parcels, or bulk shipments, we handle it with care and efficiency.
                </p>
            </div>
           

        </div>
      </section>
    );
  }