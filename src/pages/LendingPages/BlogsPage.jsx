import React, { useState } from "react";
import Container from "@/components/common/Container";

export default function BlogsPage() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState(null);

  const tags = ["All", "Planning Tips", "Budget Advice", "Real Weddings", "Fashion & Beauty", "Venues & Decor"];

  const articles = [
    {
      id: "b1",
      title: "10 Essential Questions to Ask Before Booking Your Wedding Venue",
      tag: "Venues & Decor",
      date: "September 14, 2026",
      readTime: "5 min read",
      author: "Sophia Rahman (Lead Planner)",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
      summary: "Before signing on the dotted line, discover the hidden contract terms, sound restriction policies, and catering clauses every couple must know.",
      content: `Booking your wedding venue is often the largest single expenditure in your entire wedding budget. To ensure there are no unwelcome surprises on your big day, here are the top 10 questions you must ask during your walkthrough:\n\n1. What is the exact overtime fee structure if the party continues past midnight?\n2. Are outside caterers permitted, and is there a kitchen buyout fee?\n3. What are the sound curfew limitations for live bands and DJs?\n4. Is a dedicated bridal green room and groom prep suite included?\n5. What is the bad-weather backup plan for outdoor lawn ceremonies?\n6. What is the mandatory parking valet capacity?\n7. When can decorators begin setup on the morning of the event?\n8. What is the cancellation and rescheduling policy in case of emergencies?\n9. Are there electrical load restrictions for heavy stage lighting and LED walls?\n10. Will there be an on-site venue operations manager present throughout the event?`,
    },
    {
      id: "b2",
      title: "How to Build a Realistic Wedding Budget (And Actually Stick to It)",
      tag: "Budget Advice",
      date: "August 28, 2026",
      readTime: "7 min read",
      author: "Farhan Hossain",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=80",
      summary: "A practical breakdown of how to allocate your wedding funds across catering, photography, attire, and reserve funds without going into debt.",
      content: `Wedding budgets have a tendency to expand rapidly unless disciplined guidelines are established from day one. Here is our recommended allocation framework:\n\n• 40-45%: Venue, Food, and Beverage\n• 12-15%: Photography & Cinematography\n• 10-12%: Stage, Floral, and Lighting Decor\n• 8-10%: Bridal Wear, Jewelry, and Groom Attire\n• 5-7%: Hair, Makeup, and Bridal Artistry\n• 5%: Music, DJ, and Live Entertainment\n• 5-10%: Emergency Contingency Buffer (Crucial!)\n\nPro Tip: Always allocate a 7% contingency cushion for unexpected alterations, additional guest RSVPs, and overtime tips.`,
    },
    {
      id: "b3",
      title: "Real Wedding: Sarah & Michael's Enchanting 3-Day Celebration",
      tag: "Real Weddings",
      date: "August 12, 2026",
      readTime: "6 min read",
      author: "Wedelogy Editorial",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80",
      summary: "Take an intimate look at how this couple seamlessly blended contemporary elegance with traditional ceremonies in a breathtaking weekend celebration.",
      content: `Sarah and Michael brought together over 300 guests from across the world for a magnificent three-day destination celebration in Dhaka.\n\nFrom the colorful, floral-drenched Mehendi night with live acoustic folk music to the deeply emotional Nikah vows in a grand ballroom and a candlelit black-tie reception banquet, every detail was orchestrated with meticulous love.\n\n"Using Wedelogy allowed us to coordinate with our 8 different vendors without sending a single scattered email," shared the bride. "Everything was tracked in one shared dashboard."`,
    },
    {
      id: "b4",
      title: "Bridal Beauty Timeline: Month-by-Month Skin Prep & Trial Guide",
      tag: "Fashion & Beauty",
      date: "July 30, 2026",
      readTime: "4 min read",
      author: "Glamour Glow Studio",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
      summary: "The ultimate countdown calendar for bridal skincare, hair trials, facials, and makeup testing to ensure a flawless glow.",
      content: `Radiant bridal makeup begins with healthy, well-prepped skin months before the wedding day.\n\n• 6 Months Out: Begin dermatologist consultations for gentle chemical peels or barrier hydration.\n• 3 Months Out: Schedule hair and makeup trial sessions with your dress photos in hand.\n• 1 Month Out: Final facial treatment (avoid testing any new aggressive skincare products!).\n• 1 Week Out: Gentle hydrating masks, drink 3L water daily, and get plenty of rest.`,
    },
    {
      id: "b5",
      title: "12 Steps to Managing Guest RSVPs and Seating Arrangements Smoothly",
      tag: "Planning Tips",
      date: "July 18, 2026",
      readTime: "5 min read",
      author: "Wedelogy Planning Team",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
      summary: "How to handle plus-ones, track dietary preferences, and arrange family vs friend tables without diplomatic family drama.",
      content: `Seating charts often cause unnecessary anxiety. By categorizing your guest list by affiliation (Bride Family, Groom Family, University Friends, VIP Colleagues) and keeping seating open per table rather than assigned individual chairs, you create a far more relaxed, joyous atmosphere.`,
    },
  ];

  const filteredArticles = articles.filter((a) => {
    const matchesTag = selectedTag === "All" || a.tag === selectedTag;
    const matchesSearch =
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className="bg-[#FFF9F9] min-h-screen py-12 md:py-20 font-manrope">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FCECEE] text-[#CF9585] text-xs font-bold uppercase tracking-wider">
            Wedding Inspiration & Advice
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-[#1D1D1F]">
            The Wedelogy Journal & Guides
          </h1>
          <p className="text-sm md:text-base text-[#5B6477]">
            Expert wedding advice, budget breakdowns, real couple stories, and seasonal trend forecasts to inspire your celebration.
          </p>
        </div>

        {/* Search & Tag Filter */}
        <div className="bg-white p-6 rounded-3xl border border-[#EFE5E7] shadow-xs mb-10 space-y-6">
          <div className="relative max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Search wedding articles, budget guides, venue tips..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-11 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#CF9585]"
            />
            <span className="absolute left-4 top-3.5 text-gray-400 text-base">🔍</span>
          </div>

          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none flex-wrap">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedTag === tag
                    ? "bg-[#1D1D1F] text-white shadow-xs"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="group bg-white rounded-3xl border border-[#EFE5E7] shadow-xs overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
            >
              <div>
                <div className="h-52 w-full relative overflow-hidden bg-gray-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-bold">
                    {article.tag}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold">
                    <span>📅 {article.date}</span>
                    <span>•</span>
                    <span>⏱️ {article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold font-playfair text-[#1D1D1F] group-hover:text-[#CF9585] transition-all leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs md:text-sm text-[#5B6477] line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-gray-100 mt-2 flex items-center justify-between text-xs font-bold text-[#CF9585]">
                <span>Read Full Guide</span>
                <span className="group-hover:translate-x-1 transition-all">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-10 max-w-2xl w-full shadow-2xl space-y-6 my-8">
            <div className="flex items-start justify-between pb-4 border-b">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#FCECEE] text-[#CF9585] text-xs font-bold uppercase tracking-wider">
                  {activeArticle.tag}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-playfair text-[#1D1D1F] mt-2">
                  {activeArticle.title}
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  By {activeArticle.author} • {activeArticle.date} • {activeArticle.readTime}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="text-gray-400 hover:text-black p-1 text-xl"
              >
                ✕
              </button>
            </div>

            <div className="h-64 w-full rounded-2xl overflow-hidden">
              <img src={activeArticle.image} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line space-y-4">
              {activeArticle.content}
            </div>

            <div className="pt-4 border-t flex justify-end">
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 bg-[#1D1D1F] text-white text-xs font-bold rounded-xl hover:bg-black transition-all"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
