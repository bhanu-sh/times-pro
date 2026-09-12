"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import homeData from "./data/home_next_data.json";

export default function Home() {
  const props = homeData.props.pageProps;

  // Extract page states
  const banner = props.bannerDetails || {};
  const whyUs = props.whyUsDetails || {};
  const allCourses = props.allCourses || [];
  const partners = props.popularInstitutionsDetails || [];
  const enterprise = props.enterpriseDetails || props.enterPriseDetails || [];

  // Tab State: 'Executive Education Courses' (default), 'Early Career Courses', or 'TimesPro'
  const [activeTab, setActiveTab] = useState("Executive Education Courses");
  // Search filter query for courses
  const [searchQuery, setSearchQuery] = useState("");

  // School Safety Audit 10 Parameters Active Tab State
  const [activeAuditParam, setActiveAuditParam] = useState(0);

  // School U-DISE Search State
  const [searchUdise, setSearchUdise] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    programType: "Executive Education Courses",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Course Tab metadata mapping
  const tabMetadata = {
    "Early Career Courses": {
      title: "Become job-ready with",
      heading: "Early Career Courses",
      description: "Fast-track your career with industry-oriented courses in banking, technology, hospitality, and logistics.",
    },
    "Executive Education Courses": {
      title: "Scale Up Your Career With",
      heading: "Executive Education Courses",
      description: "Upskill with certificate programmes from leading management institutes like IIMs, IITs, and XLRI designed for working professionals.",
    },
    "TimesPro": {
      title: "Get future ready at your convenience with",
      heading: "Online Degrees & Certifications",
      description: "Achieve academic excellence with distance and online MBA, Executive Diplomas, and digital upskilling certifications.",
    },
  };

  // 10 Inspection Components from PPTs
  const safetyAuditDimensions = [
    {
      id: 1,
      code: "DIM-01",
      name: "Structural Safety",
      hindi: "संरचनात्मक सुरक्षा",
      highlight: "NBC 2016 Compliance & Building Stability",
      summary: "Evaluates columns, beams, load-bearing walls, foundations, and roof slabs. Checks for structural cracks, dampness, and verifies structural stability certificates.",
      checkpoints: [
        "Load-bearing wall stability and structural soundness certificates.",
        "Examination of cracked walls, water seepage, and roof slab integrity.",
        "Staircases, railings, parapet walls, and building age per NBC 2016 norms.",
        "Structural risk categorization: immediate evacuation vs. repairable defects."
      ]
    },
    {
      id: 2,
      code: "DIM-02",
      name: "Non-Structural Safety",
      hindi: "गैर-संरचनात्मक सुरक्षा",
      highlight: "Anchoring Fixtures & Falling Hazard Mitigation",
      summary: "Inspection of ceiling fans, suspended lighting, laboratory shelves, and heavy almirahs to prevent earthquake tipping and overhead hazards.",
      checkpoints: [
        "Anchoring of heavy storage almirahs, laboratory equipment, and library racks.",
        "Secure suspension and clamping of ceiling fans and light fixtures.",
        "Safety film or grills on large window panes and ventilators.",
        "Clear walkways, non-slippery floors, and elimination of corridor obstacles."
      ]
    },
    {
      id: 3,
      code: "DIM-03",
      name: "Fire & Electrical Safety",
      hindi: "अग्नि एवं विद्युत सुरक्षा",
      highlight: "NBC 2016 Fire Standards, Concealed Wiring & Extinguishers",
      summary: "Verification of ISO 2190:2010 extinguishers, concealed wiring, proper earthing, lockable MCBs, lightning arresters, and terrace firefighting water tanks.",
      checkpoints: [
        "Firefighting equipment per ISO 2190:2010 with valid recharge dates.",
        "Safe electrical systems: concealed wiring, multi-point earthing, and lockable distribution boards.",
        "Functional rooftop lightning arresters for thunderstorm and surge protection.",
        "Height-based water storage (1,000L terrace tank to 50,000L UG tank per NBC 2016) and hose reels."
      ]
    },
    {
      id: 4,
      code: "DIM-04",
      name: "Disaster Preparedness",
      hindi: "आपदा तैयारी",
      highlight: "School Disaster Management Plan (SDMP) & HRVCA",
      summary: "Verification of site-specific Hazard, Risk, Vulnerability & Capacity Assessment (HRVCA), emergency contact directories, and active disaster committees.",
      checkpoints: [
        "Institutional School Disaster Management Plan (SDMP) quality review.",
        "Localized risk mapping for earthquake, flood, lightning, and heatwaves.",
        "Prominently displayed emergency contact directory (Police, Fire, Ambulance, DM, BSA, DIOS).",
        "Records and verification of periodic student-teacher safety drills."
      ]
    },
    {
      id: 5,
      code: "DIM-05",
      name: "Emergency Response Systems",
      hindi: "आपातकालीन प्रतिक्रिया",
      highlight: "Early Warning, Public Address & Emergency Toolkits",
      summary: "Testing of audible alarm sirens, manual call points, public address systems, and fully equipped emergency disaster response kits.",
      checkpoints: [
        "Audible warning bells/sirens audible across all school blocks.",
        "Stocked emergency disaster toolkits (first-aid kit, high-beam torches, whistles, stretchers).",
        "Designation of primary and secondary safe muster assembly areas.",
        "SOPs for rapid student accountability and teacher-led emergency teams."
      ]
    },
    {
      id: 6,
      code: "DIM-06",
      name: "Evacuation Planning",
      hindi: "निकासी योजना",
      highlight: "Corridor Evacuation Maps & Marked Assembly Grounds",
      summary: "Mandatory display of bilingual evacuation route maps in every classroom and corridor. Unobstructed staircases, wide exits, and marked muster zones.",
      checkpoints: [
        "Clear evacuation maps displayed prominently in every classroom and hallway.",
        "Illuminated directional exit signages and wide unobstructed escape doors.",
        "Staircase width standards adhering to NBC 2016 occupancy load calculations.",
        "Safe open ground assembly muster points away from overhead power lines."
      ]
    },
    {
      id: 7,
      code: "DIM-07",
      name: "First Aid & Medical Preparedness",
      hindi: "प्राथमिक चिकित्सा",
      highlight: "Stocked Medical Kits & Emergency Health Linkages",
      summary: "Availability of stocked first-aid supplies, antiseptic dressings, burn treatments, teacher training in triage, and distance mapping to nearest PHC/CHC.",
      checkpoints: [
        "Fully stocked first-aid boxes containing antiseptics, sterile bandages, and splints.",
        "Designated teachers oriented in basic first aid, trauma care, and CPR.",
        "Active linkage and distance mapping to nearest Community Health Centre (CHC).",
        "Protocols for managing heatstroke cases and student medical cards."
      ]
    },
    {
      id: 8,
      code: "DIM-08",
      name: "WASH & Kitchen Safety",
      hindi: "स्वच्छ जल एवं स्वच्छता",
      highlight: "Potable Water, Functional Toilets & Mid-Day Meal Isolation",
      summary: "Testing drinking water purity, functional separate toilets for boys and girls, and physical isolation of mid-day meal cooking fire hazards from academic zones.",
      checkpoints: [
        "Potable drinking water sources with valid laboratory purity certifications.",
        "Clean, separate, functional toilets for boys, girls, and staff with running water.",
        "Mid-day meal kitchen isolation: cooking fire hazards isolated from main classroom corridors.",
        "Safe LPG cylinder storage and fire safety precautions in kitchen areas."
      ]
    },
    {
      id: 9,
      code: "DIM-09",
      name: "Child Safety & Protection",
      hindi: "बाल सुरक्षा एवं संरक्षण",
      highlight: "Perimeter Boundary Walls, Lockable Gates & CCTV",
      summary: "Intact perimeter boundary walls, secure lockable gates, active visitor log verification, CCTV monitoring, and child abuse prevention protocols (POCSO).",
      checkpoints: [
        "Complete perimeter boundary wall with security gates locked during school hours.",
        "Active visitor registration system with mandatory ID verification logs.",
        "CCTV camera coverage across main entrances, perimeter gates, and corridors.",
        "IRC-compliant speed breakers and safe pick-up/drop-off points near school gates."
      ]
    },
    {
      id: 10,
      code: "DIM-10",
      name: "CWSN Accessibility",
      hindi: "दिव्यांगजन सुगमता",
      highlight: "Barrier-Free Access per RPwD Act, 2016",
      summary: "Universal barrier-free accessibility: smooth gradient ramps with bilateral handrails, wide doorways, and accessible toilets for children with special needs.",
      checkpoints: [
        "Smooth gradient entrance ramps (1:12 slope) equipped with sturdy bilateral handrails.",
        "Wide doorway clearances accommodating wheelchairs into classrooms and labs.",
        "Dedicated, barrier-free accessible toilets equipped with grab bars and low-height sinks.",
        "Tactile paving and audible safety warnings for visually and hearing-impaired students."
      ]
    },
  ];

  // Filter courses based on active tab and search query
  const filteredCourses = allCourses.filter(course => {
    const matchesTab = course.courseType === activeTab;
    const matchesSearch = course.title?.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.institution?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      setFormSubmitted(true);
    }
  };

  const handleUdiseSearch = (e) => {
    e.preventDefault();
    if (!searchUdise.trim()) return;
    setSearchResult({
      udise: searchUdise.trim(),
      schoolName: searchUdise.startsWith("09") ? "Govt. Inter College (GIC) Model School" : "Government Composite Vidyalaya",
      district: "Lucknow",
      block: "Sarojini Nagar",
      category: "Phase I (Government Secondary Institution)",
      status: "Audit Completed & DLIC Verified",
      score: "88/100 (Category A - Low Risk)",
      inspectionDate: "12 February 2026",
      satLead: "Civil & Fire Expert Team",
      certificate: "Issued by DIOS / DLIC Committee",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        {/* --- Hero Banner Section --- */}
        <section className="relative bg-[#00008c]/5 py-12 md:py-20 overflow-hidden border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
              {/* Highlight Tag */}
              <div className="inline-flex items-center gap-2 mb-3 justify-center lg:justify-start">
                <a 
                  href="#school-safety-audit" 
                  className="bg-times-blue hover:bg-blue-950 text-white text-[10px] md:text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs flex items-center gap-1.5 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-times-red animate-pulse"></span>
                  Flagship Initiative: UP School Safety Audit (1.40L+ Schools) →
                </a>
              </div>

              <div 
                className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight [&_strong]:text-times-red [&_span]:text-times-blue"
                dangerouslySetInnerHTML={{ __html: banner.Title }}
              />
              <div 
                className="text-zinc-600 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
                dangerouslySetInnerHTML={{ __html: banner.Description }}
              />

              {/* USP stats cards */}
              <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-100 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3/5 after:h-0.5 after:bg-times-red">
                  <p className="text-times-blue font-bold text-sm md:text-lg text-center leading-none mb-1">{banner.USP1Title || "50+"}</p>
                  <p className="text-zinc-500 font-medium text-[9px] md:text-xs text-center leading-tight">{banner.USP1Subtitle || "Top Academic Partners"}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-100 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3/5 after:h-0.5 after:bg-times-red">
                  <p className="text-times-blue font-bold text-sm md:text-lg text-center leading-none mb-1">{banner.USP2Title || "4.8/5"}</p>
                  <p className="text-zinc-500 font-medium text-[9px] md:text-xs text-center leading-tight">{banner.USP2Subtitle || "Learner Rating"}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-100 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3/5 after:h-0.5 after:bg-times-red">
                  <p className="text-times-blue font-bold text-sm md:text-lg text-center leading-none mb-1">{banner.USP3Title || "2.5L+"}</p>
                  <p className="text-zinc-500 font-medium text-[9px] md:text-xs text-center leading-tight">{banner.USP3Subtitle || "Learners Impacted"}</p>
                </div>
              </div>

              {/* Hero Call to Action */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
                <a 
                  href="#courses-section"
                  className="w-full sm:w-auto bg-times-red text-white text-center font-bold px-8 py-3.5 rounded hover:bg-red-700 hover:shadow-lg transition-all uppercase tracking-wider text-xs md:text-sm cursor-pointer"
                >
                  {banner.PrimaryCTA?.Text || "Choose the Right Course"}
                </a>
                <a 
                  href="#school-safety-audit"
                  className="w-full sm:w-auto bg-white border-2 border-times-blue text-times-blue text-center font-bold px-6 py-3.5 rounded hover:bg-times-blue hover:text-white transition-all uppercase tracking-wider text-xs md:text-sm cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>School Safety Audit Portal</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Banner Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-none h-64 sm:h-96 lg:h-[450px]">
                <Image
                  src="/images/banner_hero.webp"
                  alt="TimesPro - An Education Initiative Of The Times Of India Group"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* --- FLAGSHIP SHOWCASE: SCHOOL SAFETY AUDIT & RISK ASSESSMENT PROJECT ---  */}
        {/* ========================================================================= */}
        <section id="school-safety-audit" className="py-14 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            
            {/* Header section */}
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-times-blue text-[11px] font-bold uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-times-red"></span>
                Public Sector Initiative • BCCL &amp; Govt. of Uttar Pradesh
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-times-blue tracking-tight mb-3">
                Statewide School Safety Audit &amp; Risk Assessment
              </h2>
              <p className="text-zinc-600 text-xs md:text-sm leading-relaxed">
                Implemented by <strong>Bennett, Coleman &amp; Co. Ltd. (The Times Group)</strong> in partnership with the <strong>Department of Basic &amp; Secondary Education, Government of Uttar Pradesh</strong>. Establishing institutionalized safety, compliance, and disaster preparedness across <strong>1,40,555+ government schools</strong>.
              </p>
            </div>

            {/* 4 Impact & Scope Badges */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 text-center">
                <p className="text-2xl md:text-3xl font-black text-times-blue">1,40,555+</p>
                <p className="text-xs font-bold text-zinc-800 mt-1">Schools Covered</p>
                <p className="text-[10px] text-zinc-500 mt-0.5">Phase I (27.5K) &amp; Phase II (1.12L)</p>
              </div>
              <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 text-center">
                <p className="text-2xl md:text-3xl font-black text-times-blue">75 Districts</p>
                <p className="text-xs font-bold text-zinc-800 mt-1">Statewide Coverage</p>
                <p className="text-[10px] text-zinc-500 mt-0.5">District IT &amp; DLIC Governance</p>
              </div>
              <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 text-center">
                <p className="text-2xl md:text-3xl font-black text-times-blue">2,000+ SAT</p>
                <p className="text-xs font-bold text-zinc-800 mt-1">Certified Engineers</p>
                <p className="text-[10px] text-zinc-500 mt-0.5">Civil, Fire &amp; Disaster Experts</p>
              </div>
              <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-4 text-center">
                <p className="text-2xl md:text-3xl font-black text-times-blue">NBC 2016</p>
                <p className="text-xs font-bold text-zinc-800 mt-1">Supreme Court Norms</p>
                <p className="text-[10px] text-zinc-500 mt-0.5">Avinash Mehrotra (2009) &amp; RTE Act</p>
              </div>
            </div>

            {/* 10 Core Safety Dimensions (Interactive Tabs - Professional, No Emojis) */}
            <div className="mb-14">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-5">
                <div>
                  <span className="text-times-red font-bold text-[11px] uppercase tracking-wider block mb-1">
                    Evaluation Matrix
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-times-blue">
                    10 Core Inspection &amp; Safety Dimensions
                  </h3>
                </div>
                <p className="text-zinc-500 text-xs mt-1 md:mt-0">
                  Select a dimension to view on-site audit parameters assessed by SAT teams:
                </p>
              </div>

              {/* Dimension pill tabs */}
              <div className="flex flex-wrap gap-2 mb-4">
                {safetyAuditDimensions.map((dim, idx) => (
                  <button
                    key={dim.id}
                    onClick={() => setActiveAuditParam(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeAuditParam === idx
                        ? "bg-times-blue text-white shadow-xs"
                        : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200/60"
                    }`}
                  >
                    <span className="font-mono text-[10px] opacity-75">{String(dim.id).padStart(2, '0')}.</span>
                    <span>{dim.name}</span>
                  </button>
                ))}
              </div>

              {/* Active Dimension Details Card */}
              <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-200 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-200 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-times-blue text-white flex flex-col items-center justify-center font-mono flex-shrink-0">
                      <span className="text-[8px] uppercase tracking-wider text-blue-200 leading-none">DIM</span>
                      <span className="text-sm font-black leading-tight mt-0.5">{String(safetyAuditDimensions[activeAuditParam].id).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-times-red uppercase tracking-wider">
                        Evaluation Dimension {String(safetyAuditDimensions[activeAuditParam].id).padStart(2, '0')} • {safetyAuditDimensions[activeAuditParam].hindi}
                      </span>
                      <h4 className="text-lg font-black text-zinc-900">
                        {safetyAuditDimensions[activeAuditParam].name}
                      </h4>
                    </div>
                  </div>
                  <span className="bg-white border border-zinc-300 text-times-blue text-xs font-bold px-3 py-1 rounded-full self-start sm:self-auto">
                    {safetyAuditDimensions[activeAuditParam].highlight}
                  </span>
                </div>

                <p className="text-xs md:text-sm text-zinc-600 leading-relaxed mb-5">
                  {safetyAuditDimensions[activeAuditParam].summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {safetyAuditDimensions[activeAuditParam].checkpoints.map((cp, cIdx) => (
                    <div key={cIdx} className="bg-white p-3 rounded-lg border border-zinc-200 flex items-start gap-2.5 text-xs text-zinc-700">
                      <span className="text-times-blue font-bold text-sm leading-none mt-0.5">✓</span>
                      <span className="leading-relaxed">{cp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Digital Infrastructure: SAT Field App & District IT MIS Dashboard */}
            <div className="mb-14">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-times-red font-bold text-[11px] uppercase tracking-wider block mb-1">
                  Digital Infrastructure
                </span>
                <h3 className="text-xl md:text-2xl font-black text-times-blue">
                  SAT Field App &amp; District IT MIS Dashboard
                </h3>
                <p className="text-zinc-500 text-xs mt-1">
                  End-to-end digital ecosystem ensuring tamper-proof field data collection and real-time administrative oversight.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* SAT Field Inspection App */}
                <div className="bg-white rounded-xl p-6 md:p-7 border border-zinc-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-zinc-100">
                      <div>
                        <span className="bg-blue-50 text-times-blue border border-blue-200 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded">
                          Field Mobile Engine
                        </span>
                        <h4 className="text-lg font-black text-zinc-900 mt-1">SAT On-Site Audit App</h4>
                      </div>
                      <span className="text-[11px] text-zinc-500 font-medium">Native Android / iOS</span>
                    </div>

                    <p className="text-xs text-zinc-600 leading-relaxed mb-5">
                      Engineered for 2,000+ certified engineers to conduct paperless on-site inspections across remote rural gram panchayats with zero data falsification.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                      <div className="p-3 bg-zinc-50 rounded-lg border border-zinc-100">
                        <p className="text-xs font-bold text-zinc-900 mb-0.5">Offline-First Engine</p>
                        <p className="text-[11px] text-zinc-500 leading-relaxed">Full audit capture without cellular signal; automatic sync when online.</p>
                      </div>
                      <div className="p-3 bg-zinc-50 rounded-lg border border-zinc-100">
                        <p className="text-xs font-bold text-zinc-900 mb-0.5">Biometric 2FA</p>
                        <p className="text-[11px] text-zinc-500 leading-relaxed">Facial recognition verifies engineer presence at audit initiation and closure.</p>
                      </div>
                      <div className="p-3 bg-zinc-50 rounded-lg border border-zinc-100">
                        <p className="text-xs font-bold text-zinc-900 mb-0.5">50m GPS Geofence</p>
                        <p className="text-[11px] text-zinc-500 leading-relaxed">Inputs strictly locked to verified latitude/longitude of school U-DISE ID.</p>
                      </div>
                      <div className="p-3 bg-zinc-50 rounded-lg border border-zinc-100">
                        <p className="text-xs font-bold text-zinc-900 mb-0.5">Encrypted Photo Proof</p>
                        <p className="text-[11px] text-zinc-500 leading-relaxed">In-app camera watermarks immutable timestamps and coordinates on evidence.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500">
                    <span className="font-semibold text-times-blue">Zero Tampering Architecture</span>
                    <span>100% Digital Data Trail</span>
                  </div>
                </div>

                {/* District IT Command & Control Dashboard */}
                <div className="bg-white rounded-xl p-6 md:p-7 border border-zinc-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-zinc-100">
                      <div>
                        <span className="bg-red-50 text-times-red border border-red-200 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded">
                          Command &amp; Control
                        </span>
                        <h4 className="text-lg font-black text-zinc-900 mt-1">District IT MIS Command Portal</h4>
                      </div>
                      <span className="text-[11px] text-zinc-500 font-medium">DIOS &amp; BSA Cells</span>
                    </div>

                    <p className="text-xs text-zinc-600 leading-relaxed mb-5">
                      Centralized district management portal providing real-time audit triage, anomaly flagging, and multi-tier report certification.
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="p-3 bg-blue-50/50 rounded-lg border border-blue-100">
                        <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider">Live Intake</p>
                        <p className="text-xl font-black text-times-blue">Real-Time</p>
                        <p className="text-[10px] text-zinc-500 mt-0.5">Automated field sync</p>
                      </div>
                      <div className="p-3 bg-green-50/50 rounded-lg border border-green-200">
                        <p className="text-[10px] font-bold text-green-700 uppercase tracking-wider">Quality Cleared</p>
                        <p className="text-xl font-black text-green-700">Multi-Tier</p>
                        <p className="text-[10px] text-zinc-500 mt-0.5">Passed to Zonal Cell</p>
                      </div>
                      <div className="p-3 bg-amber-50/50 rounded-lg border border-amber-200">
                        <p className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">Under Validation</p>
                        <p className="text-xl font-black text-amber-700">Coordinate Check</p>
                        <p className="text-[10px] text-zinc-500 mt-0.5">&le; 10m spatial variance</p>
                      </div>
                      <div className="p-3 bg-red-50/50 rounded-lg border border-red-100">
                        <p className="text-[10px] font-bold text-times-red uppercase tracking-wider">Rectification SLA</p>
                        <p className="text-xl font-black text-times-red">24 Hours</p>
                        <p className="text-[10px] text-zinc-500 mt-0.5">Returned for re-audit</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500">
                    <span className="font-semibold text-times-blue">Web MIS Portal</span>
                    <span>Statewide Monitoring Across 75 Districts</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Strict Quality Control & Turnaround Time (TAT) Pipeline */}
            <div className="mb-14">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-times-red font-bold text-[11px] uppercase tracking-wider block mb-1">
                  Time-Bound Verification Lifecycle
                </span>
                <h3 className="text-xl md:text-2xl font-black text-times-blue">
                  Strict Quality Control &amp; Turnaround Time (TAT) Pipeline
                </h3>
                <p className="text-zinc-500 text-xs mt-1">
                  Every school dossier undergoes an unbroken verification lifecycle with strict SLAs before government certification.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
                {/* Stage 1 */}
                <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-6 h-6 rounded-md bg-times-blue text-white text-xs font-bold flex items-center justify-center font-mono">01</span>
                      <span className="bg-blue-50 text-times-blue text-[10px] font-bold px-2 py-0.5 rounded border border-blue-100">TAT: 24h</span>
                    </div>
                    <h4 className="font-bold text-xs text-zinc-900 mb-1">SAT Field Inspection</h4>
                    <p className="text-[11px] text-zinc-600 leading-relaxed">
                      3-member unit (Civil, Fire, Disaster) completes on-site physical survey and submits geo-tagged dossier.
                    </p>
                  </div>
                  <p className="text-[10px] font-medium text-zinc-400 mt-3 pt-2 border-t border-zinc-100">On-Site Execution</p>
                </div>

                {/* Stage 2 */}
                <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-6 h-6 rounded-md bg-times-blue text-white text-xs font-bold flex items-center justify-center font-mono">02</span>
                      <span className="bg-blue-50 text-times-blue text-[10px] font-bold px-2 py-0.5 rounded border border-blue-100">TAT: 24h</span>
                    </div>
                    <h4 className="font-bold text-xs text-zinc-900 mb-1">District MIS Validation</h4>
                    <p className="text-[11px] text-zinc-600 leading-relaxed">
                      Automated &amp; manual audit of photo evidence, coordinate variance, and 100% parameter completeness.
                    </p>
                  </div>
                  <p className="text-[10px] font-medium text-zinc-400 mt-3 pt-2 border-t border-zinc-100">District IT Review</p>
                </div>

                {/* Stage 3 */}
                <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-6 h-6 rounded-md bg-times-blue text-white text-xs font-bold flex items-center justify-center font-mono">03</span>
                      <span className="bg-blue-50 text-times-blue text-[10px] font-bold px-2 py-0.5 rounded border border-blue-100">TAT: 48h</span>
                    </div>
                    <h4 className="font-bold text-xs text-zinc-900 mb-1">Zonal &amp; SME Scrutiny</h4>
                    <p className="text-[11px] text-zinc-600 leading-relaxed">
                      Senior structural and fire safety specialists evaluate critical building defects and risk classifications.
                    </p>
                  </div>
                  <p className="text-[10px] font-medium text-zinc-400 mt-3 pt-2 border-t border-zinc-100">Technical Specialists</p>
                </div>

                {/* Stage 4 */}
                <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-6 h-6 rounded-md bg-green-700 text-white text-xs font-bold flex items-center justify-center font-mono">04</span>
                      <span className="bg-green-50 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded border border-green-200">TAT: 7 Days</span>
                    </div>
                    <h4 className="font-bold text-xs text-zinc-900 mb-1">DLIC &amp; State Sign-Off</h4>
                    <p className="text-[11px] text-zinc-600 leading-relaxed">
                      District Committee verification backed by 5%–10% physical spot-checks prior to formal state certification.
                    </p>
                  </div>
                  <p className="text-[10px] font-medium text-green-700 mt-3 pt-2 border-t border-zinc-100">Official Certification</p>
                </div>
              </div>

              {/* SLA Rectification Guarantee Banner */}
              <div className="p-3.5 bg-zinc-50 rounded-xl border border-zinc-200 text-xs text-zinc-600 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-[11px] text-zinc-600">
                  <strong className="text-zinc-800">24-Hour Feedback Loop: </strong>
                  If any inspection step detects an anomaly or coordinate discrepancy, the dossier is returned to the field SAT for mandatory re-inspection within 24 hours.
                </p>
                <span className="bg-white border border-zinc-300 text-times-blue font-bold px-3 py-1 rounded text-[10px] uppercase tracking-wider flex-shrink-0">
                  Zero Incomplete Reports
                </span>
              </div>
            </div>

            {/* Ministry of Education, Govt. of India Directive */}
            <div className="mb-14 bg-gradient-to-br from-[#00004d] to-times-blue text-white rounded-xl p-6 md:p-8 shadow-sm border border-blue-900">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-white/15">
                  <div className="flex items-center gap-2">
                    <span className="bg-yellow-400 text-zinc-950 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded tracking-wider">
                      National Directive
                    </span>
                    <span className="text-xs font-bold text-white tracking-wide">
                      Ministry of Education, Government of India
                    </span>
                  </div>
                  <span className="text-[11px] text-blue-200 font-mono">
                    D.O. No. Secy(SE&amp;L)/2025 • New Delhi
                  </span>
                </div>

                <blockquote className="text-sm md:text-base font-semibold italic text-blue-100 leading-relaxed mb-6 border-l-2 border-yellow-400 pl-4">
                  &ldquo;Let us reaffirm our shared responsibility to ensure that no child or youth is put at risk due to preventable circumstances.&rdquo;
                </blockquote>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="bg-white/10 rounded-lg p-4 border border-white/15">
                    <p className="font-bold text-yellow-300 mb-1">01. Psychosocial Well-Being</p>
                    <p className="text-blue-100 text-[11px] leading-relaxed">
                      Integrating student mental health, safety awareness, counseling services, and community engagement alongside physical infrastructure norms.
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 border border-white/15">
                    <p className="font-bold text-yellow-300 mb-1">02. Mandatory 24h Reporting</p>
                    <p className="text-blue-100 text-[11px] leading-relaxed">
                      Strict mandate to formally document and escalate any high-risk structural hazard, near-miss, or emergency condition within 24 hours.
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 border border-white/15">
                    <p className="font-bold text-yellow-300 mb-1">03. Institutional Accountability</p>
                    <p className="text-blue-100 text-[11px] leading-relaxed">
                      Zero tolerance for administrative negligence. Transparent responsibility matrices established across state and district education boards.
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-blue-200 gap-2">
                  <span>Department of School Education &amp; Literacy</span>
                  <span className="font-medium text-white/80">Aligned with Hon&apos;ble Supreme Court Mandate (Avinash Mehrotra, 2009)</span>
                </div>
              </div>
            </div>

            {/* School U-DISE Search & Directive Note */}
            <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-200 max-w-3xl mx-auto shadow-xs">
              <div className="text-center mb-4">
                <h4 className="font-bold text-sm text-times-blue uppercase tracking-wider">
                  Verify School Safety Audit Record
                </h4>
                <p className="text-zinc-500 text-xs mt-0.5">
                  Enter an 11-digit school U-DISE code to verify inspection and certification status.
                </p>
              </div>

              <form onSubmit={handleUdiseSearch} className="flex gap-2 max-w-lg mx-auto">
                <input
                  type="text"
                  value={searchUdise}
                  onChange={(e) => setSearchUdise(e.target.value)}
                  placeholder="e.g. 09250100101"
                  className="flex-1 bg-white border border-zinc-300 rounded-lg px-3.5 py-2 text-xs focus:border-times-blue outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-times-blue hover:bg-blue-950 text-white font-bold text-xs px-5 py-2 rounded-lg transition-colors uppercase cursor-pointer flex-shrink-0"
                >
                  Verify Status
                </button>
              </form>

              {searchResult && (
                <div className="mt-4 p-4 bg-white rounded-lg border border-zinc-200 text-xs space-y-1.5 animate-fade-in max-w-lg mx-auto">
                  <div className="flex justify-between items-center border-b border-zinc-100 pb-2 mb-2">
                    <span className="font-bold text-times-blue">{searchResult.schoolName}</span>
                    <span className="bg-green-100 text-green-800 text-[10px] font-bold px-2 py-0.5 rounded">
                      {searchResult.status}
                    </span>
                  </div>
                  <p className="text-zinc-600"><strong>U-DISE:</strong> {searchResult.udise} | <strong>District:</strong> {searchResult.district} ({searchResult.block})</p>
                  <p className="text-zinc-600"><strong>Inspection Date:</strong> {searchResult.inspectionDate} | <strong>Score:</strong> <span className="text-green-700 font-bold">{searchResult.score}</span></p>
                  <p className="text-zinc-500 text-[11px]">✔ {searchResult.certificate}</p>
                </div>
              )}

              {/* Minimal Directive Quote Footer */}
              <div className="mt-6 pt-4 border-t border-zinc-200/80 text-center text-zinc-500 text-[11px] leading-relaxed">
                &ldquo;The Right to Education is incomplete without a safe and secure environment.&rdquo;
                <span className="block text-zinc-400 text-[10px] mt-0.5">
                  — Hon&apos;ble Supreme Court of India (Avinash Mehrotra vs. UOI) • Ministry of Education (D.O. Secy/SE&amp;L/2025)
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* --- ORIGINAL SECTION: PROGRAM TABS & COURSES (EXECUTIVE & EARLY CAREER) -- */}
        {/* ========================================================================= */}
        <section id="courses-section" className="py-16 bg-zinc-50 border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            
            {/* Header section titles */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="text-times-red font-semibold text-xs md:text-sm uppercase tracking-widest mb-1.5">
                {tabMetadata[activeTab].title}
              </p>
              <h2 className="text-2xl md:text-4xl font-extrabold text-times-blue tracking-tight mb-3">
                {tabMetadata[activeTab].heading}
              </h2>
              <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">
                {tabMetadata[activeTab].description}
              </p>
            </div>

            {/* Tab Buttons bar */}
            <div className="flex flex-wrap justify-center border-b border-zinc-200 mb-8 max-w-3xl mx-auto">
              {Object.keys(tabMetadata).map((tabKey) => (
                <button
                  key={tabKey}
                  onClick={() => {
                    setActiveTab(tabKey);
                    setSearchQuery("");
                  }}
                  className={`px-4 md:px-8 py-3.5 text-xs md:text-sm font-bold border-b-3 outline-none transition-all duration-300 cursor-pointer ${
                    activeTab === tabKey 
                      ? "border-times-red text-times-red bg-white shadow-sm" 
                      : "border-transparent text-zinc-500 hover:text-times-blue hover:bg-zinc-100"
                  }`}
                >
                  {tabKey === "TimesPro" ? "Degrees & Diplomas" : tabKey}
                </button>
              ))}
            </div>

            {/* Search courses input in tabs */}
            <div className="max-w-md mx-auto mb-8 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search programmes or academic partners..."
                className="w-full bg-white text-xs border border-zinc-200 rounded-md py-3 pl-4 pr-10 outline-none shadow-sm focus:border-times-blue transition-all"
              />
              <div className="absolute right-3.5 top-3.5 text-zinc-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.602 10.602z" />
                </svg>
              </div>
            </div>

            {/* Course Grid */}
            {filteredCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.slice(0, 9).map((course) => (
                  <div 
                    key={course.id}
                    className="bg-white rounded-lg overflow-hidden border border-zinc-200 hover:border-times-blue shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Course Banner Image & Inst logo overlay */}
                      <div className="relative w-full h-40 bg-zinc-100">
                        <Image
                          src={course.bannerImg || "https://timesproweb-static-backend-prod.s3.ap-south-1.amazonaws.com/small_Fourth_Rev_Business_Analytics_Certificate_for_Executives_ce71c39330.webp"}
                          alt={course.title || "Course"}
                          fill
                          sizes="(max-width: 768px) 100vw, 30vw"
                          className="object-cover group-hover:scale-103 transition-transform duration-500"
                        />
                        {/* Institution Icon Overlay */}
                        {course.institutionIcon && (
                          <div className="absolute top-3 right-3 bg-white p-1 rounded border border-zinc-100 shadow-sm">
                            <Image
                              src={course.institutionIcon}
                              alt={course.institution || "Institute"}
                              width={45}
                              height={45}
                              className="h-8 w-auto object-contain"
                            />
                          </div>
                        )}
                      </div>

                      {/* Card Content info */}
                      <div className="p-5">
                        <span className="text-[10px] uppercase font-bold text-times-red tracking-wider block mb-1">
                          {course.institution || "Professional Certificate"}
                        </span>
                        <h3 className="font-extrabold text-sm md:text-base text-zinc-900 line-clamp-2 leading-tight group-hover:text-times-blue transition-colors mb-3">
                          {course.title}
                        </h3>
                        <p className="text-zinc-500 text-xs line-clamp-3 leading-relaxed mb-4">
                          {course.shortDescription || "Enhance your skills, acquire specialized industry expertise, and build network connections with professionals."}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer details */}
                    <div className="px-5 pb-5 pt-3 border-t border-zinc-100 bg-zinc-50/50 flex items-center justify-between text-xs text-zinc-500">
                      <span className="flex items-center gap-1 font-medium">
                        <svg className="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {course.duration || "Self Paced"}
                      </span>
                      <a 
                        href="#callback-section" 
                        className="text-times-blue font-bold hover:text-times-red flex items-center gap-0.5 transition-colors"
                      >
                        Learn More
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg border border-dashed border-zinc-200">
                <p className="text-zinc-400 font-medium">No courses found matching your criteria.</p>
              </div>
            )}

            {filteredCourses.length > 9 && (
              <div className="text-center mt-12">
                <a 
                  href="#callback-section" 
                  className="inline-block bg-white border border-zinc-300 hover:border-times-blue text-times-blue hover:bg-times-blue hover:text-white px-8 py-3 rounded text-xs font-bold transition-all duration-300 shadow-sm uppercase cursor-pointer"
                >
                  Explore All Programs
                </a>
              </div>
            )}

          </div>
        </section>

        {/* --- Category List / Proven Scale Sections --- */}
        <section className="py-16 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-extrabold text-times-blue tracking-tight mb-2">
                Proven Experience & Scale
              </h2>
              <p className="text-zinc-500 text-xs md:text-sm">
                Extensive experience in IEC campaigns, capacity building, behaviour change communication, and large-scale government project execution across India.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border bg-white text-center shadow-sm">
                <h3 className="text-2xl font-bold text-times-blue">1,40,555+</h3>
                <p className="text-sm mt-2 text-zinc-600">Schools in Safety Audit</p>
              </div>

              <div className="p-6 rounded-lg border bg-white text-center shadow-sm">
                <h3 className="text-2xl font-bold text-times-blue">75 Districts</h3>
                <p className="text-sm mt-2 text-zinc-600">Implementation Coverage</p>
              </div>

              <div className="p-6 rounded-lg border bg-white text-center shadow-sm">
                <h3 className="text-xl font-bold text-times-blue">65+ Lakh</h3>
                <p className="text-sm mt-2 text-zinc-600">IEC Copies Produced</p>
              </div>

              <div className="p-6 rounded-lg border bg-white text-center shadow-sm">
                <h3 className="text-xl font-bold text-times-blue">50+ Cr</h3>
                <p className="text-sm mt-2 text-zinc-600">Project Execution Value</p>
              </div>

              <div className="p-6 rounded-lg border bg-white text-center shadow-sm">
                <h3 className="text-xl font-bold text-times-blue">2,000+ Experts</h3>
                <p className="text-sm mt-2 text-zinc-600">Safety Auditors & Trainers</p>
              </div>

              <div className="p-6 rounded-lg border bg-white text-center shadow-sm">
                <h3 className="text-xl font-bold text-times-blue">PRI & Community</h3>
                <p className="text-sm mt-2 text-zinc-600">SMC Engagement Initiatives</p>
              </div>
            </div>

          </div>
        </section>

        {/* --- Why TimesPro (The TimesPro Advantage) --- */}
        <section className="py-16 bg-[#00008c]/5 border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content stats cards grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-6 order-2 lg:order-1">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-100/50">
                <span className="text-2xl md:text-4xl font-extrabold text-times-blue block mb-1">{whyUs.USP1Title || "3,50,000+"}</span>
                <span className="text-zinc-500 font-medium text-xs leading-snug block">{whyUs.USP1Subtitle || "Learners Empowered"}</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-100/50">
                <span className="text-2xl md:text-4xl font-extrabold text-times-blue block mb-1">1.40L+</span>
                <span className="text-zinc-500 font-medium text-xs leading-snug block">Schools Audited in UP</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-100/50">
                <span className="text-2xl md:text-4xl font-extrabold text-times-blue block mb-1">100%</span>
                <span className="text-zinc-500 font-medium text-xs leading-snug block">Geo-Tagged & Biometric Verified</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-100/50">
                <span className="text-2xl md:text-4xl font-extrabold text-times-blue block mb-1">75</span>
                <span className="text-zinc-500 font-medium text-xs leading-snug block">Districts State Network</span>
              </div>
            </div>

            {/* Right Text details & image */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="text-times-red font-semibold text-xs md:text-sm uppercase tracking-widest block mb-1.5">About TimesPro</span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-times-blue tracking-tight mb-4">TimesPro: Vision & Business Segments</h2>
              <div className="text-zinc-600 text-sm md:text-base leading-relaxed mb-6 space-y-3">
                <p>
                  TimesPro, an initiative of Bennett, Coleman & Co. Ltd. (BCCL – The Times Group), is India&apos;s leading education and institutional execution platform with a vision to make learners and institutions future-ready.
                </p>
                <p>
                  Through Public Sector, Private Sector, and Enterprise Solutions, TimesPro delivers large-scale skilling, capacity building, and landmark government initiatives like the <strong>Uttar Pradesh School Safety Audit & Risk Assessment Project</strong> under the Department of Basic & Secondary Education.
                </p>
              </div>
              <a 
                href="#callback-section"
                className="inline-block border border-times-blue hover:bg-times-blue text-times-blue hover:text-white text-xs font-bold px-8 py-3.5 rounded transition-all uppercase tracking-wide cursor-pointer"
              >
                Explore Our Capabilities
              </a>
            </div>

          </div>
        </section>

        {/* --- Enterprise Solutions Section --- */}
        <section id="enterprise-section" className="py-16 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-times-red font-semibold text-xs md:text-sm uppercase tracking-widest block mb-1.5">Training Excellence</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-times-blue tracking-tight mb-2">Training & Capacity Building Expertise</h2>
              <p className="text-zinc-500 text-xs md:text-sm">End-to-end training, capacity building, behaviour change communication, and community engagement solutions.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enterprise.slice(0, 6).map((item) => {
                const title = item.attributes?.Title || "Solution";
                const desc = item.attributes?.ShortDescription || "";
                const bannerUrl = item.attributes?.BannerImg?.data?.attributes?.url;

                return (
                  <div 
                    key={item.id}
                    className="p-6 rounded-lg border border-zinc-100 shadow-sm hover:shadow-md bg-zinc-50 hover:bg-white transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Image banner */}
                      {bannerUrl && (
                        <div className="relative w-full h-36 bg-zinc-200 rounded-md overflow-hidden mb-4">
                          <Image 
                            src={bannerUrl}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 100vw, 30vw"
                            className="object-cover group-hover:scale-102 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <h3 className="font-extrabold text-base text-zinc-900 group-hover:text-times-blue mb-3">{title}</h3>
                      <p className="text-zinc-500 text-xs leading-relaxed mb-6">{desc}</p>
                    </div>
                    <a href="#callback-section" className="text-times-blue text-xs font-bold hover:text-times-red flex items-center gap-1">
                      Learn More
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </div>
                );
              })}
            </div>

          </div>
        </section>


        {/* --- Academic Partners Scrolling Logos --- */}
        <section className="py-12 bg-zinc-50 border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <p className="text-center text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">Our Top Academic Partners</p>
            
            {/* Horizontal scroll grid */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity">
              {partners.slice(0, 10).map((partner) => {
                const title = partner.Title || "Partner";
                const logoUrl = partner.Icon?.url;

                return logoUrl ? (
                  <div key={partner.id} className="relative h-12 w-24 md:w-28 flex items-center justify-center" title={title}>
                    <Image
                      src={logoUrl}
                      alt={title}
                      fill
                      sizes="100px"
                      className="object-contain filter grayscale hover:grayscale-0 contrast-125 transition-all duration-300"
                    />
                  </div>
                ) : null;
              })}
            </div>
          </div>
        </section>

        {/* --- Connect with Us (Lead Request a Callback Form) --- */}
        <section id="callback-section" className="py-16 bg-gradient-to-r from-times-blue to-[#000050] text-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">Connect with us</h2>
              <p className="text-[#a0c0ff] text-xs md:text-sm">
                Share your details for academic programmes, enterprise learning, or the School Safety Audit project.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-center max-w-md mx-auto">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Thank you, {formData.name}!</h3>
                <p className="text-xs text-[#d0e0ff] leading-relaxed">
                  Your request has been registered. An executive will contact you shortly on {formData.phone}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="bg-white text-zinc-800 p-6 md:p-8 rounded-lg shadow-lg border border-zinc-100 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
                
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="border border-zinc-200 rounded px-3 py-2 text-xs md:text-sm focus:border-times-blue outline-none"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    className="border border-zinc-200 rounded px-3 py-2 text-xs md:text-sm focus:border-times-blue outline-none"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter 10 digit number"
                    className="border border-zinc-200 rounded px-3 py-2 text-xs md:text-sm focus:border-times-blue outline-none"
                  />
                </div>

                {/* Selector */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-zinc-500 uppercase">Interested In</label>
                  <select
                    value={formData.programType}
                    onChange={(e) => setFormData({ ...formData, programType: e.target.value })}
                    className="border border-zinc-200 rounded px-3 py-2.5 text-xs md:text-sm focus:border-times-blue outline-none bg-white"
                  >
                    <option value="Executive Education Courses">Executive Education Courses</option>
                    <option value="Early Career Courses">Early Career Courses</option>
                    <option value="TimesPro">Degrees & Diplomas</option>
                    <option value="School Safety Audit Project">School Safety Audit Project (UP)</option>
                    <option value="Enterprise Solutions">Enterprise Training & Capacity</option>
                  </select>
                </div>

                {/* Submit button */}
                <div className="md:col-span-2 mt-4 text-center">
                  <button
                    type="submit"
                    className="w-full bg-times-red hover:bg-red-700 text-white font-bold py-3.5 px-6 rounded uppercase tracking-wider text-xs md:text-sm shadow-md transition-all cursor-pointer"
                  >
                    Request a Callback
                  </button>
                </div>
              </form>
            )}

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
