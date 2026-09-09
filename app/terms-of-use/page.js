import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import termsData from "../data/terms_next_data.json";

export const metadata = {
  title: "Terms of Use | TimesPro - Education & School Safety Audit",
  description: "Terms and conditions governing access, academic programmes, the School Safety Audit project, and automated system notifications on TimesPro.",
};

export default function TermsOfUse() {
  const props = termsData.props.pageProps;
  const terms = props.privacyPolicyDetails || {};

  // Default SEO or values if details are empty
  const title = terms.Title || "Terms of Use";
  const htmlContent = terms.Description || "";

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow py-8 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          
          {/* Breadcrumb path */}
          <nav className="text-zinc-500 text-[10px] md:text-xs font-semibold mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-times-red">Home</Link>
            <svg className="w-3 h-3 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <span className="text-times-red">Terms of Use</span>
          </nav>

          {/* Heading and double color bar separator */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-4xl font-extrabold text-times-blue mb-4 tracking-tight">
              {title}
            </h1>
            
            {/* Dual color line separator: left half dark-blue, right half red */}
            <div className="w-full flex h-1.5 rounded-full overflow-hidden shadow-sm">
              <div className="w-1/2 bg-times-blue"></div>
              <div className="w-1/2 bg-times-red"></div>
            </div>
          </div>

          {/* Institutional Addendum: School Safety Audit & AWS SES Communications */}
          <div className="mb-8 p-5 bg-blue-50/70 border border-blue-200 rounded-lg text-xs leading-relaxed text-zinc-700">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-times-blue text-white text-[10px] font-black uppercase px-2 py-0.5 rounded">
                Operational Framework & Email Terms
              </span>
              <span className="text-times-blue font-bold text-xs">
                School Safety Audit Project & AWS SES Communications
              </span>
            </div>
            <p className="mb-2">
              Users accessing the <strong>Uttar Pradesh School Safety Audit & Risk Assessment Project</strong> modules acknowledge that all audits, physical inspections, and administrative approvals are conducted pursuant to the Supreme Court order in <em>Avinash Mehrotra vs. Union of India (2009)</em>, the Disaster Management Act 2005, and the National Building Code (NBC) 2016.
            </p>
            <p className="mb-2">
              <strong>Automated Communications (AWS SES):</strong> System notifications dispatched via Amazon Web Services Simple Email Service are strictly operational (auditor 2FA OTPs, inspection intimations, report transmissions to DIOS/BSA, and verified safety certificates). No commercial marketing or promotional materials are transmitted through this infrastructure.
            </p>
            <p className="text-[11px] text-zinc-500">
              *Audit Integrity: All field audit records, structural notes, and geo-tagged media are legally attested and subject to quality verification under state guidelines.
            </p>
          </div>

          {/* Original HTML Injection block styled via rich-text-content class in globals.css */}
          <div 
            className="rich-text-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

        </div>
      </main>

      <Footer />
    </div>
  );
}
