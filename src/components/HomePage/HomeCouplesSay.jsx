import Container from "../common/Container";
import CoupleSayOne from "@/assets/Images/coupleImg1.png";
import CoupleSayTwo from "@/assets/Images/coupleImg2.png";
import CoupleSayThree from "@/assets/Images/coupleImg3.png";
import CoupleSayFour from "@/assets/Images/coupleImg4.png";
import ProfileImage from "@/assets/Images/nrProfileImage.png";
import ClientSayElementRight from "@/assets/Images/nr-SliderEleRight.png";
import ClientSayElementLeft from "@/assets/Images/nr-SliderEleLeft.png";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "VowSync completely took the stress out of our 450-guest destination wedding! The AI checklist kept us on schedule, and we booked our dream venue and caterer in under 48 hours without endless phone tag.",
    name: "Jessica & Alexander",
    location: "Gulshan, Dhaka",
    stats: "Booked 6 Verified Vendors",
    avatar: ProfileImage,
  },
  {
    quote:
      "The budget calculator saved us thousands! We reallocated funds into live cinema and floral arches effortlessly. Every vendor we contacted was responsive, polite, and exceeded our wildest expectations.",
    name: "Sophia & Liam",
    location: "Banani, Dhaka",
    stats: "Booked 4 Verified Vendors",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "The digital RSVP tracker and interactive seating layout made coordinating our families seamless. Our guests are still raving about the gourmet food and stage decor we found right here on VowSync.",
    name: "Nadia & Tariq",
    location: "Dhanmondi, Dhaka",
    stats: "Booked 5 Verified Vendors",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
  },
];

export default function HomeCouplesSay() {
  return (
    <section className="py-20 md:py-28 bg-[#FFF9F5] relative font-manrope">
      <Container>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-[#CF9585]">
            Real Love Stories
          </span>
          <h2 className="text-[#101828] font-salsa text-3xl sm:text-4xl mt-1">
            What Our Couples Say
          </h2>
        </div>
        <div className="mt-12">
          <Carousel className="w-full max-w-full">
            <CarouselContent>
              {testimonials.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card className="border-none shadow-none bg-transparent">
                      <CardContent className="flex items-center justify-center p-0 md:p-6 bg-[#FFF9F5]">
                        <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
                          {/* Image collage */}
                          <div className="w-full lg:w-1/2 flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                              <div className="w-7/12 h-48 sm:h-64 rounded-2xl overflow-hidden shadow-sm">
                                <img
                                  src={CoupleSayOne}
                                  alt="Couple Wedding"
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                              <div className="w-5/12 h-48 sm:h-64 rounded-2xl overflow-hidden shadow-sm">
                                <img
                                  src={CoupleSayTwo}
                                  alt="Couple Wedding"
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                            </div>

                            <div className="flex items-center gap-4">
                              <div className="w-5/12 h-48 sm:h-64 rounded-2xl overflow-hidden shadow-sm">
                                <img
                                  src={CoupleSayThree}
                                  alt="Couple Wedding"
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                              <div className="w-7/12 h-48 sm:h-64 rounded-2xl overflow-hidden shadow-sm">
                                <img
                                  src={CoupleSayFour}
                                  alt="Couple Wedding"
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Testimonial Quote */}
                          <div className="w-full lg:w-1/2 flex flex-col justify-between">
                            <div>
                              <div className="text-[#CF9585] opacity-40 mb-4">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="64"
                                  height="64"
                                  viewBox="0 0 96 96"
                                  fill="none"
                                >
                                  <path
                                    d="M64 12C61.8783 12 59.8434 12.8429 58.3431 14.3431C56.8429 15.8434 56 17.8783 56 20V44C56 46.1217 56.8429 48.1566 58.3431 49.6569C59.8434 51.1571 61.8783 52 64 52C65.0609 52 66.0783 52.4214 66.8284 53.1716C67.5786 53.9217 68 54.9391 68 56V60C68 62.1217 67.1571 64.1566 65.6569 65.6569C64.1566 67.1571 62.1217 68 60 68C58.9391 68 57.9217 68.4214 57.1716 69.1716C56.4214 69.9217 56 70.9391 56 72V80C56 81.0609 56.4214 82.0783 57.1716 82.8284C57.9217 83.5786 58.9391 84 60 84C66.3652 84 72.4697 81.4714 76.9706 76.9706C81.4714 72.4697 84 66.3652 84 60V20C84 17.8783 83.1571 15.8434 81.6569 14.3431C80.1566 12.8429 78.1217 12 76 12H64Z"
                                    stroke="#CF9585"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M20 12C17.8783 12 15.8434 12.8429 14.3431 14.3431C12.8429 15.8434 12 17.8783 12 20V44C12 46.1217 12.8429 48.1566 14.3431 49.6569C15.8434 51.1571 17.8783 52 20 52C21.0609 52 22.0783 52.4214 22.8284 53.1716C23.5786 53.9217 24 54.9391 24 56V60C24 62.1217 23.1571 64.1566 21.6569 65.6569C20.1566 67.1571 18.1217 68 16 68C14.9391 68 13.9217 68.4214 13.1716 69.1716C12.4214 69.9217 12 70.9391 12 72V80C12 81.0609 12.4214 82.0783 13.1716 82.8284C13.9217 83.5786 14.9391 84 16 84C22.3652 84 28.4697 81.4714 32.9706 76.9706C37.4714 72.4697 40 66.3652 40 60V20C40 17.8783 39.1571 15.8434 37.6569 14.3431C36.1566 12.8429 34.1217 12 32 12H20Z"
                                    stroke="#CF9585"
                                    strokeWidth="8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>

                              <p className="text-[#1D1D1F] text-lg sm:text-xl font-medium leading-relaxed italic">
                                “{item.quote}”
                              </p>

                              <div className="flex gap-1.5 items-center my-6">
                                {[...Array(5)].map((_, i) => (
                                  <span key={i} className="text-amber-500 text-xl">
                                    ★
                                  </span>
                                ))}
                              </div>

                              <div className="flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#CF9585] shadow-sm shrink-0">
                                  <img
                                    className="w-full h-full object-cover"
                                    src={item.avatar}
                                    alt={item.name}
                                  />
                                </div>
                                <div>
                                  <h3 className="text-[#101828] font-manrope text-xl font-bold">
                                    {item.name}
                                  </h3>
                                  <p className="text-[#798090] text-sm">
                                    {item.location}
                                  </p>
                                  <span className="text-[#CF9585] font-semibold text-xs inline-block mt-0.5">
                                    ✨ {item.stats}
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="flex gap-3 mt-8">
                              <CarouselPrevious className="static translate-y-0 bg-white border border-[#EBC9D4] hover:bg-[#FFF0F3]" />
                              <CarouselNext className="static translate-y-0 bg-[#1D1D1F] text-white hover:bg-black" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </Container>

      <div className="h-[380px] w-[180px] absolute right-0 -bottom-10 pointer-events-none hidden xl:block opacity-60">
        <img src={ClientSayElementRight} alt="" />
      </div>
      <div className="h-[380px] w-[180px] absolute left-0 -top-10 pointer-events-none hidden xl:block opacity-60">
        <img src={ClientSayElementLeft} alt="" />
      </div>
    </section>
  );
}
