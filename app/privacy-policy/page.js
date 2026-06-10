import Header from "../components/Header";
import Footer from "../components/Footer";
import privacyData from "../data/privacy_next_data.json";

export default function PrivacyPolicy() {
  const props = privacyData.props.pageProps;
  const policy = props.privacyPolicyDetails || {};

  // Default SEO or values if details are empty
  const title = policy.Title || "Privacy Policy";
  const htmlContent = policy.Details || "";

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow py-8 md:py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          
          {/* Breadcrumb path */}
          <nav className="text-zinc-500 text-[10px] md:text-xs font-semibold mb-6 flex items-center gap-1.5">
            <a href="/" className="hover:text-times-red">Home</a>
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

          {/* HTML Injection block styled via rich-text-content class in globals.css */}
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
