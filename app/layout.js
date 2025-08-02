// import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import { ReservationProvider } from "@/app/_components/ReservationContext";

import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

import '@/app/_styles/globals.css';
import Header from "./_components/Header";

export const metadata = {
  title: {
    template: '%s / The Wild Oasis',
    default: 'Welcome / The Wild Oasis',
    description:
      'Luxurious cabin hotel,located in the heart of Italian Dolomites,  surrounded by beautiful mountains and dark forests'
  }
};

export default function RootLayout({ children }) {
  return <html lang="en">
    <body className={`${josefin.className} relative  bg-primary-950 text-primary-100 min-h-screen flex flex-col antialiased `}>
      <Header />

      <div className="flex-1 px-8 py-12  grid">
        <main className="max-w-7xl mx-auto w-full"> <ReservationProvider>{children} </ReservationProvider></main>
      </div>

      {/* <footer>Copyright by the wild Oasis</footer> */}
    </body>
  </html >;
};