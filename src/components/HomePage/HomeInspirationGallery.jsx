import React from "react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import gallery1 from "@/assets/Images/nrIG1.png";
import gallery2 from "@/assets/Images/nrIG2.png";
import gallery3 from "@/assets/Images/nrIG3.png";
import gallery4 from "@/assets/Images/nrIG4.png";
import gallery5 from "@/assets/Images/nrIG5.png";
import gallery6 from "@/assets/Images/nrIG6.png";
import gallery7 from "@/assets/Images/nrIG7.png";
import gallery8 from "@/assets/Images/nrIG8.png";
import gallery9 from "@/assets/Images/nrIG9.png";
import gallery10 from "@/assets/Images/nrIG10.png";
import gallery11 from "@/assets/Images/nrIG11.png";
import gallery12 from "@/assets/Images/nrIG12.png";
import gallery13 from "@/assets/Images/nrIG13.png";
import gallery14 from "@/assets/Images/nrIG14.png";
import gallery15 from "@/assets/Images/nrIG15.png";
import gallery16 from "@/assets/Images/nrIG16.png";

const galleryData = {
  columns: [
    {
      id: "col-1",
      images: [
        { id: 1, src: gallery1 },
        { id: 2, src: gallery2 },
        { id: 3, src: gallery3 },
        { id: 4, src: gallery4 },
      ],
    },
    {
      id: "col-2",
      images: [
        { id: 5, src: gallery5 },
        { id: 6, src: gallery6 },
        { id: 7, src: gallery7 },
        { id: 8, src: gallery8 },
      ],
    },
    {
      id: "col-3",
      images: [
        { id: 9, src: gallery9 },
        { id: 10, src: gallery10 },
        { id: 11, src: gallery11 },
        { id: 12, src: gallery12 },
        { id: 13, src: gallery13 },
      ],
    },
    {
      id: "col-4",
      images: [
        { id: 14, src: gallery14 },
        { id: 15, src: gallery15 },
        { id: 16, src: gallery16 },
      ],
    },
  ],
};

export default function HomeInspirationGallery() {
  return (
    <section className="py-20 md:py-28 bg-[#FFF9F5] font-manrope">
      <Container>
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#CF9585]">
              Visual Moodboard
            </span>
            <h2 className="text-[#0B0B0B] font-salsa text-3xl sm:text-4xl mt-1">
              Inspiration Gallery
            </h2>
          </div>
          <Link
            to="/inspiration-gallery"
            className="text-[#CF9585] font-manrope text-lg sm:text-2xl font-semibold underline hover:opacity-80 transition-all cursor-pointer"
          >
            Explore Gallery
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {galleryData.columns.map((col) => (
            <div key={col.id} className="flex flex-col gap-4 sm:gap-6">
              {col.images.map((img) => (
                <div
                  key={img.id}
                  className="rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 group"
                >
                  <img
                    src={img.src}
                    alt="Wedding Inspiration"
                    className="object-cover w-full group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
