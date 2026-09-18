import CommonButton from "../common/CommonButton";
import Container from "../common/Container";
import People from "@/assets/Images/nrPeoples.png";

const StayGetFeatures = [
  {
    id: 0,
    headText: "Exclusive Discounts",
    sybHeadText: "Get up to 20% off with partner vendors",
  },
  {
    id: 1,
    headText: "Wedding Tips",
    sybHeadText: "Expert planning advice and inspiration",
  },
  {
    id: 2,
    headText: "Trend Updates",
    sybHeadText: "Latest wedding trends and ideas",
  },
];

export default function HomeStayUpdate() {
  return (
    <section className="py-[120px] nr--custom--bg">
      <Container>
        <div className="grid grid-cols-2 items-center gap-12">
          {/* STAY LEFT */}
          <div className="flex flex-col gap-8">
            {/* STAY HEADING */}
            <div className="flex items-center gap-6">
              <div className="p-[22px] bg-[#FFF9F5] rounded-3xl w-max">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="44"
                  viewBox="0 0 36 44"
                  fill="none"
                >
                  <path
                    d="M33.5752 23.7009C33.5752 33.5761 26.6626 38.5137 18.4464 41.3775C18.0162 41.5233 17.5489 41.5163 17.1232 41.3578C8.88725 38.5137 1.97461 33.5761 1.97461 23.7009V9.87565C1.97461 9.35184 2.18269 8.84948 2.55309 8.47909C2.92348 8.1087 3.42584 7.90061 3.94965 7.90061C7.89973 7.90061 12.8373 5.53057 16.2739 2.52851C16.6923 2.17102 17.2246 1.97461 17.7749 1.97461C18.3253 1.97461 18.8575 2.17102 19.276 2.52851C22.7323 5.55032 27.6501 7.90061 31.6002 7.90061C32.124 7.90061 32.6264 8.1087 32.9968 8.47909C33.3672 8.84948 33.5752 9.35184 33.5752 9.87565V23.7009Z"
                    stroke="#C7A8B3"
                    strokeWidth="3.95008"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-[#1D1D1F] font-salsa font-semibold text-[40px] leading-14">
                  Stay Updated
                </h3>
                <p className="text-[#101828] font-manrope text-[18px] leading-[27px] mt-2">
                  Join 25,000+ couples
                </p>
              </div>
            </div>
            {/* STAY CONTENT */}
            <div className="max-w-[717px] flex flex-col gap-3">
              <h3 className="text-[#101828] font-manrope text-2xl font-semibold leading-9">
                Get Wedding Tips & Exclusive Vendor Discounts
              </h3>
              <p className="text-[#6A7283] font-manrope text-[16px] leading-6">
                Sign up for our newsletter and stay updated on the best deals,
                expert tips, and latest trends for your big day.
              </p>
            </div>
            {/* STAY MAIL */}
            <div>
              <div>
                <form>
                  <div className="flex gap-4">
                    <div className="py-3 px-6 w-[338px] bg-white rounded-[12px]">
                      <input
                        className="w-full h-full outline-0 "
                        placeholder="Enter your email"
                        type="email"
                      />
                    </div>
                    <div>
                      <CommonButton type="button" varient="dark">
                        Subscribe
                      </CommonButton>
                    </div>
                  </div>
                </form>
              </div>
              <div className="mt-6">
                <p className="text-[#6A7283] font-manrope text-[14px] leading-[21px]">
                  Sign up for our newsletter and stay updated on the best deals,
                  expert tips, and latest trends for your big day.
                </p>
              </div>
            </div>
          </div>
          {/* STAY RIGHT */}
          <div>
            {/* RIGHT CONTENT */}
            <div className="max-w-[717px]">
              <h3 className="text-[#101828] font-manrope text-2xl font-semibold leading-9">
                What you'll get:
              </h3>
              <p className="text-[#6A7283] font-manrope text-[16px] leading-6">
                Sign up for our newsletter and stay updated on the best deals,
                expert tips, and latest trends for your big day.
              </p>
            </div>
            <div className="flex flex-col gap-5 mt-5">
              {StayGetFeatures.map((featureItem) => (
                <div key={featureItem.id} className="flex gap-2 items-center">
                  <div className="p-[15px] bg-white rounded-2xl w-max">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M2.66602 12.6664C2.66604 11.1827 3.11614 9.73384 3.95686 8.51128C4.79758 7.28872 5.98937 6.34994 7.37483 5.81893C8.76028 5.28792 10.2742 5.18965 11.7167 5.53712C13.1592 5.88459 14.4623 6.66143 15.454 7.76506C15.5239 7.83975 15.6083 7.89929 15.7021 7.93999C15.7959 7.9807 15.8971 8.00171 15.9993 8.00171C16.1016 8.00171 16.2028 7.9807 16.2966 7.93999C16.3904 7.89929 16.4748 7.83975 16.5447 7.76506C17.5333 6.65426 18.8367 5.87088 20.2815 5.5192C21.7263 5.16751 23.244 5.26419 24.6325 5.79637C26.021 6.32856 27.2145 7.271 28.0542 8.49826C28.8938 9.72553 29.3398 11.1794 29.3327 12.6664C29.3327 15.7197 27.3327 17.9997 25.3327 19.9997L18.01 27.0837C17.7616 27.3691 17.4553 27.5983 17.1114 27.7561C16.7676 27.914 16.3941 27.9969 16.0157 27.9993C15.6374 28.0016 15.2629 27.9235 14.9171 27.77C14.5712 27.6165 14.2621 27.3912 14.01 27.1091L6.66602 19.9997C4.66602 17.9997 2.66602 15.7331 2.66602 12.6664Z"
                        stroke="#CF9585"
                        strokeWidth="2.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[#101828] font-manrope text-[18px] font-semibold leading-[27px]">
                      {featureItem?.headText}
                    </h4>
                    <p className="text-[#6A7283] font-manrope text-[16px] leading-6">
                      {featureItem?.sybHeadText}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-6 mt-10">
              <div className="max-w-[152px] h-14">
                <img className="w-full h-full" src={People} alt="not found" />
              </div>
              <p className="text-[#6A7283] font-manrope text-[16px] leading-6">
                Trusted by 25,000+ couples worldwide
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
