// import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"], 
  variable: "--font-poppins",
});

export const metadata = {
  title: "kwechiri Logistics",
  description: "Logistics company in lagos, involved in air freight, landing freight, protocol service, ride hailing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
