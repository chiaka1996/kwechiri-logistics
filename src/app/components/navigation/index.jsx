export default function Home() {
  return (
    <nav className="z-[500] relative text-[#fff] text-[1.6rem] font-[500] bg-transparent w-full fixed top-0 left-0">
      <div className="container flex flex-row justify-between items-center h-[10rem]">
      <div className="text-primary text-[2.5rem] text-[500] tracking-[5px] italic">KWECHIRI</div>
      <div className="flex gap-x-[5rem] items-center">
        <span>Home</span>
        <span>About us</span>
        <span>Services</span>
        <button className="h-[5rem] px-[2rem] rounded-[40px] bg-primary outline-none text-[1.6rem]">Contact us <span className="pl-[1rem]">&#x2B9E;</span> </button>
      </div>
      </div>
    </nav>
  );
}