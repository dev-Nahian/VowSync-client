import React from "react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import BlogImage1 from "@/assets/Images/nrBlogImg1.png";
import BlogFreame from "@/assets/Images/nrBlogFream.png";

const BlogData = [
  {
    id: 1,
    src: BlogImage1,
    date: "November 01, 2026",
    blogTitle:
      "10 Essential Questions to Ask Before Booking Your Wedding Venue",
    blogSubTitle:
      "Find out the hidden clauses, overtime rates, sound restrictions, and catering buyouts.",
    link: "/blogs",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&q=80",
    date: "October 24, 2026",
    blogTitle:
      "How to Build a Realistic Wedding Budget (And Actually Stick to It)",
    blogSubTitle:
      "A practical allocation framework for catering, cinema, decor, and reserve buffer funds.",
    link: "/blogs",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
    date: "October 12, 2026",
    blogTitle:
      "Bridal Beauty Timeline: Month-by-Month Skin Prep & Trial Guide",
    blogSubTitle:
      "The ultimate countdown calendar for bridal skincare, hair trials, and signature glow.",
    link: "/blogs",
  },
];

export default function HomeLatestBlogs() {
  return (
    <section className="py-20 md:py-28 relative font-manrope">
      <Container>
        <div>
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#CF9585]">
                Journal & Inspiration
              </span>
              <h2 className="text-[#101828] font-salsa text-3xl sm:text-4xl mt-1">
                Our Latest Wedding Blogs
              </h2>
            </div>
            <Link
              to="/blogs"
              className="text-[#CF9585] font-manrope text-lg sm:text-2xl font-semibold underline hover:opacity-80 transition-all cursor-pointer"
            >
              View all
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BlogData.map((blog) => (
              <div
                key={blog.id}
                className="p-6 rounded-3xl border border-[#E6C8A5] bg-[#FFF9F5] transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="h-64 rounded-2xl overflow-hidden bg-gray-100 shadow-xs">
                    <img
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      src={blog.src}
                      alt={blog.blogTitle}
                    />
                  </div>

                  <div className="mt-5 space-y-2.5">
                    <div className="flex gap-2 items-center text-[#CF9585] text-xs sm:text-sm font-semibold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        />
                      </svg>
                      <h4>{blog.date}</h4>
                    </div>

                    <h3 className="text-[#071431] font-manrope text-lg sm:text-xl font-bold leading-snug">
                      {blog.blogTitle}
                    </h3>

                    <p className="text-[#4F586D] font-manrope text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {blog.blogSubTitle}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-2">
                  <Link
                    to={blog.link || "/blogs"}
                    className="py-3.5 bg-[#EBC9D4] hover:bg-[#e0b2c0] w-full rounded-2xl text-base text-[#1D1D1F] font-salsa flex items-center justify-center gap-2.5 transition-all shadow-xs cursor-pointer"
                  >
                    <span>Read More</span>
                    <span className="text-xl">💍</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="w-[180px] h-[380px] absolute left-0 bottom-[100px] pointer-events-none hidden xl:block opacity-70">
        <img
          className="w-full h-full object-contain"
          src={BlogFreame}
          alt=""
        />
      </div>
    </section>
  );
}
