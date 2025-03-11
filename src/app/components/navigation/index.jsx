import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="z-[1000] relative text-[#fff] text-[1.6rem] font-[500] bg-transparent w-full fixed top-0 left-0">
      <div className="container flex flex-row justify-between items-center h-[10rem]">
      <h1 className="logo text-[#fff] text-[4rem] font-[700] leading-[6.5rem] tracking-[0.5rem]">Kwechiri</h1>
      <div className="flex gap-x-[5rem] items-center font-[500] text-[1.8rem]">
        <Link href="/#home" className="no-underline cursor-pointer">
        <span>Home</span>
        </Link>
        <Link href="/#about" className="no-underline cursor-pointer">
        <span>About us</span>
        </Link>
        <Link href="/#service" className="no-underline cursor-pointer">
        <span>Services</span>
        </Link>
        <Link href="/#work_process" className="no-underline cursor-pointer">
        <span>Our Work Process</span>
        </Link>
      </div>
      </div>
    </nav>
  );
}