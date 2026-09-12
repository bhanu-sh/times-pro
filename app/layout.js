import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "TimesPro - Executive Education, Programmes & School Safety Audit Initiative",
  description: "TimesPro (Bennett, Coleman & Co. Ltd. - The Times Group) provides executive education, certification programmes, and executes large-scale government initiatives including the Uttar Pradesh School Safety Audit & Risk Assessment Project across 1,40,555+ schools.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-black">{children}</body>
    </html>
  );
}
