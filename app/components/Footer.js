import Image from "next/image";
import Link from "next/link";
import homeData from "../data/home_next_data.json";

export default function Footer() {
  const footer = homeData.props.pageProps.footerDetails;
  
  if (!footer) return null;

  // Retrieve columns with fallbacks for key spellings
  const col1 = footer.Column1Items || footer.Column1tems || [];
  const col2 = footer.Column2Items || footer.Column2tems || [];
  const col3 = footer.Column3Items || footer.Column3tems || [];
  const col4 = footer.Column4Items || footer.Column4tems || [];

  const col1Title = footer.Column1Title || "Early Career";
  const col2Title = footer.Column2Title || "Executive Education";
  const col3Title = footer.Column3Title || "Enterprise Solutions";
  const col4Title = footer.Column4Title || "TimesPro";

  // Social Media Links mapping
  const socialLinks = footer.SocialMediaLinks || [];

  // Academic partners list
  const academicPartners = [
    "IIM Kozhikode", "IIM Calcutta", "IIM Ahmedabad", "IIM Lucknow", "IIM Indore", 
    "IISc Bangalore", "XLRI Jamshedpur", "IIM Raipur", "IIM Udaipur", "IIT Roorkee", 
    "IIM Kashipur", "SPJIMR", "IIM Tiruchirappalli", "IIM Visakhapatnam", "MICA", 
    "IIM Jammu", "IIM Nagpur", "KJSIM", "BIMTECH", "IIM Bodh Gaya", "IMI Bhubaneswar", 
    "Manipal University", "IMT Hyderabad", "Jain University", "IIT Jammu", "IIT Guwahati", 
    "IIT Ropar", "University of Hyderabad", "IIT Mandi", "IHUB Divyasampark", "IIT Delhi", 
    "IIT Madras", "Michigan State University", "Delhi Technical University"
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-[#00008c]/5 to-[#da2128]/3 border-t border-zinc-200 text-zinc-800 text-xs md:text-sm font-sans pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Main Footer Links & Logo Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Col 0: Logo & Socials */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <Image 
                src="https://timesproweb-static-backend-prod.s3.ap-south-1.amazonaws.com/Timespro_logo_New_Resize_f5515e9440.webp"
                alt="TimesPro"
                width={160}
                height={75}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-zinc-600 text-xs leading-relaxed max-w-sm">
              {footer.TimesProDescription || "Fulfil your career aspirations with one of India's leading education platforms."}
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-2.5 mt-2">
              {socialLinks.map((social, idx) => {
                const imgUrl = social.Image?.data?.attributes?.url || "/vercel.svg";
                const alt = social.Image?.data?.attributes?.alternativeText || "Social";
                return (
                  <a 
                    key={idx} 
                    href={social.Link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-times-red flex items-center justify-center transition-all duration-300"
                  >
                    <Image 
                      src={imgUrl} 
                      alt={alt}
                      width={16} 
                      height={16}
                      className="w-4 h-4 invert filter brightness-200"
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 1: Functional Links Column */}
          <div className="md:text-right md:flex md:flex-col md:items-end">
            <h4 className="font-bold text-times-blue text-sm uppercase mb-4 tracking-wider">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link href="/" className="text-zinc-700 hover:text-times-blue transition-colors text-xs font-semibold">
                  Home
                </Link>
              </li>
              <li>
                <a href="#school-safety-audit" className="text-zinc-700 hover:text-times-blue transition-colors text-xs font-semibold">
                  School Safety Audit (UP Project)
                </a>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-zinc-700 hover:text-times-blue transition-colors text-xs font-semibold">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="text-zinc-700 hover:text-times-blue transition-colors text-xs font-semibold">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Academic Partners Grid */}
        <div className="border-t border-zinc-200/80 pt-8 pb-6 text-zinc-500 text-xs">
          <p className="leading-relaxed mb-4">
            <span className="font-bold text-zinc-700 text-xs">Academic Partners: </span>
            {academicPartners.join(" | ")}
          </p>
          
          {/* Trending course summaries */}
          <p className="leading-relaxed mb-3">
            <span className="font-bold text-zinc-700">Trending Early Career courses: </span>
            Certificate Programme in Banking, Financial Services and Insurance | Certificate in Logistics and Supply Chain Management | Certificate Programme in Hospitality and Hotel Management | Full Stack Web Development Course | TimesPro Banking Programme - Sales & Service Management (Yes Bank)
          </p>
          <p className="leading-relaxed mb-3">
            <span className="font-bold text-zinc-700">Trending Executive Education course categories: </span>
            General Management | Leadership & Strategy | Technology & Analytics | Marketing & Sales
          </p>
          <p className="leading-relaxed mb-3">
            <span className="font-bold text-zinc-700">Flagship Government Initiative: </span>
            Uttar Pradesh School Safety Audit & Risk Assessment Project — Comprehensive safety audits of 1,40,555+ government schools across 75 districts under Department of Basic & Secondary Education, Government of Uttar Pradesh.
          </p>
          <p className="leading-relaxed">
            <span className="font-bold text-zinc-700">Transactional Email System (AWS SES): </span>
            System notifications, auditor 2FA OTPs, inspection schedules, and safety certificates are sent via Amazon Web Services Simple Email Service (AWS SES) with SPF, DKIM, and DMARC authentication. Zero promotional mailings.
          </p>
        </div>

        {/* Fraudster Warning Box */}
        <div className="my-6 p-4 rounded border border-yellow-200 bg-yellow-50/50 text-xs text-zinc-600 leading-relaxed">
          <span className="font-bold text-times-red block mb-1">⚠️ BEWARE OF FRAUDSTERS & VERIFY OFFICIAL COMMUNICATIONS</span>
          We never solicit any monetary transaction outside of our official platform. Official school safety audits for government schools are conducted strictly free of charge. Only trust emails from @timespro.com or @timesgroup.com domains and make course payments through our official channels only. When in doubt, verify authenticity by calling 1800-120-2020 or emailing contactus@timespro.com
        </div>

        {/* Copyright & Disclaimer Bottom Bar */}
        <div className="border-t border-zinc-200 pt-6 flex flex-col md:flex-row items-center justify-between text-zinc-500 text-[10px] md:text-xs text-center md:text-left gap-4">
          <p>Copyright ©️ {new Date().getFullYear()} Bennett, Coleman & Co. Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-times-blue">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-times-blue">Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
