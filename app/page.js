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
  const categories = props.categoryDetails || [];
  const partners = props.popularInstitutionsDetails || [];
  const enterprise = props.enterpriseDetails || props.enterPriseDetails || [];

  // Tab State: 'Executive Education Courses' (default), 'Early Career Courses', or 'TimesPro'
  const [activeTab, setActiveTab] = useState("Executive Education Courses");
  // Search filter query
  const [searchQuery, setSearchQuery] = useState("");

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

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow">
        {/* --- Hero Banner Section --- */}
        <section className="relative bg-[#00008c]/5 py-12 md:py-20 overflow-hidden border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
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
                  <p className="text-times-blue font-bold text-sm md:text-lg text-center leading-none mb-1">{banner.USP1Title}</p>
                  <p className="text-zinc-500 font-medium text-[9px] md:text-xs text-center leading-tight">{banner.USP1Subtitle}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-100 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3/5 after:h-0.5 after:bg-times-red">
                  <p className="text-times-blue font-bold text-sm md:text-lg text-center leading-none mb-1">{banner.USP2Title}</p>
                  <p className="text-zinc-500 font-medium text-[9px] md:text-xs text-center leading-tight">{banner.USP2Subtitle}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-zinc-100 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3/5 after:h-0.5 after:bg-times-red">
                  <p className="text-times-blue font-bold text-sm md:text-lg text-center leading-none mb-1">{banner.USP3Title}</p>
                  <p className="text-zinc-500 font-medium text-[9px] md:text-xs text-center leading-tight">{banner.USP3Subtitle}</p>
                </div>
              </div>

              {/* Hero Call to Action */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a 
                  href="#callback-section"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("callback-section")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full sm:w-auto bg-times-red text-white text-center font-bold px-8 py-4 rounded hover:bg-red-700 hover:shadow-lg transition-all uppercase tracking-wider text-sm"
                >
                  {banner.PrimaryCTA?.Text || "Choose the Right Course"}
                </a>
              </div>
            </div>

            {/* Right Banner Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md lg:max-w-none h-64 sm:h-96 lg:h-[450px]">
                <Image
                  src={banner.BannerImgForNewUsers?.data?.attributes?.url || "https://timesproweb-static-backend-prod.s3.ap-south-1.amazonaws.com/website_banner_images_Feb26_5b91a30724_1_83ea4876bd.webp"}
                  alt="TimesPro Banner"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain"
                  priority
                />
              </div>
            </div>

          </div>
        </section>

        {/* --- Program Tabs & Courses Section --- */}
        <section className="py-16 bg-zinc-50 border-b border-zinc-100">
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
                      <Link 
                        href="/" 
                        className="text-times-blue font-bold hover:text-times-red flex items-center gap-0.5 transition-colors"
                      >
                        Learn More
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                      </Link>
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
                <button className="bg-white border border-zinc-300 hover:border-times-blue text-times-blue hover:bg-times-blue hover:text-white px-8 py-3 rounded text-xs font-bold transition-all duration-300 shadow-sm uppercase cursor-pointer">
                  Explore All Programs
                </button>
              </div>
            )}

          </div>
        </section>

        {/* --- Category List Sections --- */}
        <section className="py-16 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            
            <div className="text-center max-w-xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-extrabold text-times-blue tracking-tight mb-2">Explore Popular Categories</h2>
              <p className="text-zinc-500 text-xs md:text-sm">Find professional programs across diverse career fields and upskilling tracks.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {categories.slice(0, 12).map((cat) => {
                const title = cat.attributes?.Title || "Category";
                const slug = cat.attributes?.Slug || "";
                const courseCount = cat.attributes?.TotalCourseCount || 0;
                const iconUrl = cat.attributes?.Icon?.data?.attributes?.url;

                return (
                  <Link 
                    key={cat.id}
                    href={`/courses/${slug}`}
                    className="p-5 rounded-lg border border-zinc-100 hover:border-times-blue bg-zinc-50 hover:bg-white hover:shadow-md text-center transition-all duration-300 flex flex-col items-center justify-center group"
                  >
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 group-hover:bg-[#00008c]/5 transition-colors">
                      {iconUrl ? (
                        <Image 
                          src={iconUrl}
                          alt={title}
                          width={24}
                          height={24}
                          className="w-6 h-6 object-contain"
                        />
                      ) : (
                        <svg className="w-6 h-6 text-times-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>
                      )}
                    </div>
                    <span className="font-extrabold text-xs md:text-sm text-zinc-900 group-hover:text-times-blue block leading-tight mb-1">{title}</span>
                    <span className="text-[10px] text-zinc-400 font-medium">{courseCount} Programmes</span>
                  </Link>
                );
              })}
            </div>

          </div>
        </section>

        {/* --- Why TimesPro (The TimesPro Advantage) --- */}
        <section className="py-16 bg-[#00008c]/5 border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content stats cards grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-6 order-2 lg:order-1">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-100/50">
                <span className="text-2xl md:text-4xl font-extrabold text-times-blue block mb-1">{whyUs.USP1Title}</span>
                <span className="text-zinc-500 font-medium text-xs leading-snug block">{whyUs.USP1Subtitle}</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-100/50">
                <span className="text-2xl md:text-4xl font-extrabold text-times-blue block mb-1">{whyUs.USP2Title}</span>
                <span className="text-zinc-500 font-medium text-xs leading-snug block">{whyUs.USP2Subtitle}</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-100/50">
                <span className="text-2xl md:text-4xl font-extrabold text-times-blue block mb-1">{whyUs.USP3Title}</span>
                <span className="text-zinc-500 font-medium text-xs leading-snug block">{whyUs.USP3Subtitle}</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-100/50">
                <span className="text-2xl md:text-4xl font-extrabold text-times-blue block mb-1">{whyUs.USP4Title}</span>
                <span className="text-zinc-500 font-medium text-xs leading-snug block">{whyUs.USP4Subtitle}</span>
              </div>
            </div>

            {/* Right Text details & image */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="text-times-red font-semibold text-xs md:text-sm uppercase tracking-widest block mb-1.5">Upskilling Outcomes</span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-times-blue tracking-tight mb-4">{whyUs.Title || "The TimesPro Advantage"}</h2>
              <div 
                className="text-zinc-600 text-sm md:text-base leading-relaxed mb-6 [&_p]:mb-3"
                dangerouslySetInnerHTML={{ __html: whyUs.ShortDescription }}
              />
              <a 
                href="#callback-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("callback-section")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-block border border-times-blue hover:bg-times-blue text-times-blue hover:text-white text-xs font-bold px-8 py-3.5 rounded transition-all uppercase tracking-wide cursor-pointer"
              >
                {whyUs.Button?.Text || "Know More"}
              </a>
            </div>

          </div>
        </section>

        {/* --- Enterprise Solutions Section --- */}
        <section className="py-16 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-times-red font-semibold text-xs md:text-sm uppercase tracking-widest block mb-1.5">For Organizations</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-times-blue tracking-tight mb-2">Enterprise Upskilling Solutions</h2>
              <p className="text-zinc-500 text-xs md:text-sm">Partner with TimesPro to train talent, develop leadership capabilities, and build tech strength.</p>
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
                    <Link href="/" className="text-times-blue text-xs font-bold hover:text-times-red flex items-center gap-1">
                      Learn More
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
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
              <p className="text-[#a0c0ff] text-xs md:text-sm">Just share your details and we will contact you at your convenience.</p>
            </div>

            {formSubmitted ? (
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-center max-w-md mx-auto">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Thank you, {formData.name}!</h3>
                <p className="text-xs text-[#d0e0ff] leading-relaxed">Your request has been registered. An executive will contact you shortly on {formData.phone} to assist you with the course details.</p>
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
                  </select>
                </div>

                {/* Submit button spans full row on desktop */}
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
