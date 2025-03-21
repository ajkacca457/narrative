import "./globals.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased relative bg-black overflow-x-hidden`}>
        <main>
          <Navbar />
          {children}
          <div className="relative">
            <div className="hidden md:block w-[800px] h-[800px] absolute -right-[150px] bottom-[-50px] -z-[1] radial-light opacity-40"></div>
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
