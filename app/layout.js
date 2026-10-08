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
  title: "Online Certification Courses & Programmes for Career Growth - TimesPro",
  description: "Explore TimesPro’s Online Certifications Courses & Training to advance your career with PGPs, Master’s Programs, Banking & AI courses, and live training.",
  metadataBase: new URL("https://timespro.com"),
  alternates: {
    canonical: "/",
  },
  // IMPORTANT: This tells search engines not to index THIS SPECIFIC DOMAIN.
  // If this same codebase is deployed to the real timespro.com, you MUST make this conditional!
  // e.g., robots: process.env.IS_STAGING === "true" ? { index: false, follow: false } : { index: true, follow: true }
  robots: {
    index: false,
    follow: false,
  },
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
