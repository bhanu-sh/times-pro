import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";
import privacyData from "../data/privacy_next_data.json";

export const metadata = {
  title: "Privacy Policy | TimesPro - Education & School Safety Audit",
  description: "Learn about TimesPro's Privacy Policy, data protection practices, and automated transactional email communications for educational programmes and the School Safety Audit project.",
};

export default function PrivacyPolicy() {
  const props = privacyData.props.pageProps;
  const policy = props.privacyPolicyDetails || {};

  // Default SEO or values if details are empty
  const title = policy.Title || "Privacy Policy";
  const htmlContent = policy.Details || "";
  const emailPolicyPointHtml = `
<h2><span style="color:#00008C;" id="email-policy">M. Transactional Email Communications &amp; AWS SES Policy :</span></h2>
<p style="margin-left:0px;">We utilize Amazon Web Services Simple Email Service (AWS SES) for delivering strictly automated, event-driven transactional email communications to users, learners, and authorized administrative stakeholders across <strong>timesproonline.com</strong> and affiliated initiatives, including the <strong>Uttar Pradesh School Safety Audit &amp; Risk Assessment Project</strong> (covering 1,40,555+ government schools).</p>
<p style="margin-left:0px;"><span style="color:#DA2129;">Permitted Transactional Communications:</span> All emails originating from our verified domains (<code>@timespro.com</code> and <code>@timesgroup.com</code>) are strictly operational and restricted to the following functions:</p>
<ul>
  <li>Two-factor authentication (2FA) One-Time Passwords (OTPs) and verification credentials for certified field engineers and safety auditors logging into the SAT mobile application;</li>
  <li>Advance school inspection intimations, verification schedules, and safety compliance checklists delivered to School Principals, Headmasters, and Disaster Management Committees;</li>
  <li>Inspection dossiers, structural gap assessments, and physical verification notices routed to District Level Coordination Committees (DIOS, BSA, DLIC);</li>
  <li>Official digital School Safety Audit Certificates, statutory compliance documentation, and transactional enrollment receipts for TimesPro learners.</li>
</ul>
<p style="margin-left:0px;"><span style="color:#DA2129;">Technical Authentication &amp; Anti-Spam Guarantee:</span> All transactional email communications are authenticated using SPF (Sender Policy Framework), DKIM (DomainKeys Identified Mail), and DMARC (Domain-based Message Authentication, Reporting, and Conformance). We maintain a strict zero-tolerance policy regarding unsolicited commercial communications (spam) and do not transmit bulk marketing or promotional messages via this infrastructure.</p>
`;

  const versionMarker = '<p style="margin-left:0px;text-align:right;"><i>Privacy Policy – Version 1.1</i></p>';
  const finalHtmlContent = htmlContent.includes(versionMarker)
    ? htmlContent.replace(
        versionMarker,
        `${emailPolicyPointHtml}<p style="margin-left:0px;text-align:right;"><i>Privacy Policy – Version 1.2</i></p>`
      )
    : `${htmlContent}${emailPolicyPointHtml}`;

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
            <span className="text-times-red">Privacy Policy</span>
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

          {/* Original HTML Injection block with seamless minimal Point M styled via rich-text-content class in globals.css */}
          <div 
            className="rich-text-content"
            dangerouslySetInnerHTML={{ __html: finalHtmlContent }}
          />

        </div>
      </main>

      <Footer />
    </div>
  );
}
