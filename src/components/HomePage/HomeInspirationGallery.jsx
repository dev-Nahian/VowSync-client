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
        {
          id: 1,
          src: gallery1,
        },
        {
          id: 2,
          src: gallery2,
        },
        {
          id: 3,
          src: gallery3,
        },
        {
          id: 4,
          src: gallery4,
        },
      ],
    },
    {
      id: "col-2",
      images: [
        {
          id: 5,
          src: gallery5,
        },
        {
          id: 6,
          src: gallery6,
        },
        {
          id: 7,
          src: gallery7,
        },
        {
          id: 8,
          src: gallery8,
        },
      ],
    },
    {
      id: "col-3",
      images: [
        {
          id: 9,
          src: gallery9,
        },
        {
          id: 10,
          src: gallery10,
        },
        {
          id: 11,
          src: gallery11,
        },
        {
          id: 12,
          src: gallery12,
        },
        {
          id: 13,
          src: gallery13,
        },
      ],
    },
    {
      id: "col-4",
      images: [
        {
          id: 14,
          src: gallery14,
        },
        {
          id: 15,
          src: gallery15,
        },
        {
          id: 16,
          src: gallery16,
        },
      ],
    },
  ],
};

export default function HomeInspirationGallery() {
  return (
    <section className="p-[100px] bg-[#FFF9F5]">
      <div className="mb-12">
        <h2 className="text-[#0B0B0B] text-center font-salsa text-[40px] leading-12">
          Inspiration Gallery
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-8">
        {galleryData.columns.map((col) => (
          <div key={col.id} className="flex flex-col gap-6 rounded-xl">
            {col.images.map((img) => (
              <img
                key={img.id}
                src={img.src}
                alt={img.alt}
                className="rounded-xl object-cover w-full ease-linear duration-300 hover:scale-105"
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
