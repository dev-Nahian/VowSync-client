import React from "react";
import Container from "@/components/common/Container";
import CommonButton from "@/components/common/CommonButton";
import WhyChooseBg from "@/assets/Images/whyChooseBg.png";
import CoupleImg1 from "@/assets/Images/coupleImg1.png";
import CoupleImg2 from "@/assets/Images/coupleImg2.png";
import CoupleImg3 from "@/assets/Images/coupleImg3.png";
import CoupleImg4 from "@/assets/Images/coupleImg4.png";

export default function About() {
  const stats = [
    { label: "Couples Guided", value: "50,000+" },
    { label: "Verified Vendors", value: "4,500+" },
    { label: "Ceremonies Planned", value: "120,000+" },
    { label: "Couple Satisfaction", value: "99.4%" },
  ];

  const values = [
    {
      icon: "💎",
      title: "Uncompromising Quality",
      description: "Every vendor in our directory undergoes strict verification, portfolio scrutiny, and real client feedback audits.",
    },
    {
      icon: "✨",
      title: "Cultural Inclusivity",
      description: "From traditional Nikah, Walima, and Mehendi to modern destination weddings, we celebrate all love stories.",
    },
    {
      icon: "🤝",
      title: "Transparent & Direct",
      description: "Direct messaging, upfront quotes, and zero hidden markups between couples and wedding professionals.",
    },
    {
      icon: "🚀",
      title: "Stress-Free Technology",
      description: "Smart budget calculators, intuitive RSVP seating charts, and real-time collaboration with your partner.",
    },
  ];

  const team = [
    {
      name: "Sophia Rahman",
      role: "Founder & CEO",
      image: CoupleImg1,
      bio: "Former luxury event planner with 12+ years of experience curating bespoke wedding experiences.",
    },
    {
      name: "Alexander Vance",
      role: "Head of Product & Design",
      image: CoupleImg2,
      bio: "Passionate about creating frictionless digital tools that bring joy to couples around the globe.",
    },
    {
      name: "Farhan Hossain",
      role: "VP of Vendor Partnerships",
      image: CoupleImg3,
      bio: "Connecting world-class photographers, caterers, and decorators to the couples who need them.",
    },
  ];

  return (
    <div className="bg-[#FFF9F9] font-manrope">
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-white to-[#FFF9F9]">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FCECEE] text-[#CF9585] text-xs font-bold uppercase tracking-wider">
              About Wedelogy
            </span>

            <h1 className="text-4xl md:text-6xl font-bold font-playfair text-[#1D1D1F] leading-tight">
              Making Dream Weddings Joyful, Modern & Effortless
            </h1>

            <p className="text-base md:text-xl text-[#5B6477] font-manrope leading-relaxed">
              We started Wedelogy with a simple vision: to eliminate the chaos of wedding planning and empower couples to celebrate love with clarity, elegance, and peace of mind.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <CommonButton link="/auth">
                Start Planning Free 💍
              </CommonButton>

              <CommonButton link="/browse-vendors" varient="dark">
                Explore Vendors 🔍
              </CommonButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Counter Section */}
      <section className="py-12 bg-white border-y border-[#EFE5E7]">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl md:text-5xl font-bold font-playfair text-[#1D1D1F]">
                  {s.value}
                </div>
                <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[#CF9585]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <img
                src={CoupleImg4}
                alt="Our Story"
                className="w-full rounded-3xl shadow-xl object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden sm:block max-w-xs">
                <span className="text-2xl">💐</span>
                <p className="font-bold text-sm text-[#1D1D1F] mt-2">
                  "Planning a wedding should be as memorable as the wedding itself."
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#CF9585]">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[#1D1D1F]">
                Bridging the Gap Between Couples and World-Class Vendors
              </h2>
              <p className="text-sm md:text-base text-[#5B6477] leading-relaxed">
                Planning a wedding involves thousands of decisions — from choosing the right venue and negotiating catering menus to tracking RSVPs and managing budgets across multiple cultural ceremonies.
              </p>
              <p className="text-sm md:text-base text-[#5B6477] leading-relaxed">
                Wedelogy brings all these pieces into one harmonious digital ecosystem. Whether you’re organizing a traditional 3-day South Asian Nikah & Walima or an intimate seaside gathering, our tools and vendor community are here to support every step of your journey.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white border-t border-[#EFE5E7]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#CF9585]">
              Guiding Principles
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[#1D1D1F]">
              What We Stand For
            </h2>
            <p className="text-sm text-gray-500">
              Every feature we build and every vendor we verify is driven by these core beliefs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="bg-[#FDF8F9] p-6 rounded-3xl border border-[#F6ECEE] hover:border-[#EBC9D4] transition-all space-y-3"
              >
                <div className="text-3xl">{v.icon}</div>
                <h3 className="text-lg font-bold text-[#1D1D1F] font-manrope">{v.title}</h3>
                <p className="text-xs md:text-sm text-[#5B6477] leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#CF9585]">
              The People Behind Wedelogy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-[#1D1D1F]">
              Meet Our Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-[#EFE5E7] shadow-xs text-center space-y-4"
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1D1D1F] font-manrope">{member.name}</h3>
                  <span className="text-xs font-bold text-[#CF9585] uppercase tracking-wider">{member.role}</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#1D1D1F] text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold font-playfair">
              Ready to Start Your Wedding Journey?
            </h2>
            <p className="text-sm md:text-base text-gray-300">
              Join thousands of happy couples and top-rated vendors who trust Wedelogy to create moments that last a lifetime.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <CommonButton link="/auth">
                Create Free Account 💍
              </CommonButton>
              <CommonButton link="/auth/vendor/register" varient="dark" className="border border-white/20">
                Become a Vendor Partner 🏪
              </CommonButton>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
