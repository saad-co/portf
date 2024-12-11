import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/general/Header";
import Footer from "@/components/general/Footer";
import { AlertProvider } from "@/context/AlertContext";
import AlertContainer from "@/components/AlertContainer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const Arame = localFont({
  src: "./fonts/Arame-Regular.ttf",
  variable: "--font-arame",
  weight: "400",
});

const ArameBold = localFont({
  src: "./fonts/Arame-Bold.ttf",
  variable: "--font-arame-bold",
  weight: "700",
});

const ArameThin = localFont({
  src: "./fonts/Arame-Thin.ttf",
  variable: "--font-arame-thin",
  weight: "100",
});

export const metadata = {
  title: "Immersalynx",
  description: "Immersalynx",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Arame.className} antialiased`}>
        <Header />
        <AlertProvider>
          <AlertContainer />
          {children}
        </AlertProvider>
        <Footer />
      </body>
    </html>
  );
}
