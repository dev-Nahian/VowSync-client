import Container from "../common/Container";
import CoupleSayOne from "@/assets/Images/coupleImg1.png";
import CoupleSayTwo from "@/assets/Images/coupleImg2.png";
import CoupleSayThree from "@/assets/Images/coupleImg3.png";
import CoupleSayFour from "@/assets/Images/coupleImg4.png";
import ProfileImage from "@/assets/Images/nrProfileImage.png";
import ClientSayElementRight from "@/assets/Images/nr-SliderEleRight.png"
import ClientSayElementLeft from "@/assets/Images/nr-SliderEleLeft.png"
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HomeCouplesSay() {
  return (
    <section className="py-[100px] bg-[#FFF9F5] relative">
      <Container>
        <div>
          <h2 className="text-[#101828] font-salsa text-[40px] leading-14">
            What Our Couples Say
          </h2>
        </div>
        <div className="mt-12">
          <Carousel className="w-full max-w-full">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center p-6 bg-[#FFF9F5]">
                        <div className="flex items-start gap-16">
                          <div className="w-full h-full flex flex-col gap-6">
                            <div className="w-full flex items-center gap-6">
                              <div className="w-7/12 h-[316px]">
                                <img
                                  src={CoupleSayOne}
                                  alt=""
                                  className="w-full h-full object-cover rounded-2xl"
                                />
                              </div>

                              <div className="w-5/12 h-[316px]">
                                <img
                                  src={CoupleSayTwo}
                                  alt=""
                                  className="w-full h-full object-cover rounded-2xl"
                                />
                              </div>
                            </div>

                            <div className="w-full flex items-center gap-6">
                              <div className="w-5/12 h-full">
                                <img
                                  src={CoupleSayThree}
                                  alt=""
                                  className="w-full h-full object-cover rounded-2xl"
                                />
                              </div>

                              <div className="w-7/12 h-full">
                                <img
                                  src={CoupleSayFour}
                                  alt=""
                                  className="w-full h-full object-cover rounded-2xl"
                                />
                              </div>
                            </div>
                          </div>

                          <div>
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="96"
                                height="96"
                                viewBox="0 0 96 96"
                                fill="none"
                              >
                                <g opacity="0.4">
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
                                </g>
                              </svg>
                            </div>
                            <div className="mt-12">
                              <h3>
                                “Our journey started with a small, local laundry
                                service and has grown into a business known for
                                excellence. Along the way, we’ve invested in the
                                latest technology and training to ensure we
                                deliver the best results”
                              </h3>
                            </div>
                            <div className="py-8 flex gap-3 items-center">
                              {Array.from({ length: 5 }).map((_, index) => (
                                <div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M11.5268 2.29489C11.5706 2.20635 11.6383 2.13183 11.7223 2.07972C11.8062 2.02761 11.903 2 12.0018 2C12.1006 2 12.1974 2.02761 12.2813 2.07972C12.3653 2.13183 12.433 2.20635 12.4768 2.29489L14.7868 6.97389C14.939 7.28186 15.1636 7.5483 15.4414 7.75035C15.7192 7.95239 16.0419 8.08401 16.3818 8.13389L21.5478 8.88989C21.6457 8.90408 21.7376 8.94537 21.8133 9.00909C21.8889 9.07282 21.9452 9.15644 21.9758 9.2505C22.0064 9.34456 22.0101 9.4453 21.9864 9.54133C21.9627 9.63736 21.9126 9.72485 21.8418 9.79389L18.1058 13.4319C17.8594 13.672 17.6751 13.9684 17.5686 14.2955C17.4622 14.6227 17.4369 14.9708 17.4948 15.3099L18.3768 20.4499C18.3941 20.5477 18.3835 20.6485 18.3463 20.7406C18.3091 20.8327 18.2467 20.9125 18.1663 20.9709C18.086 21.0293 17.9908 21.0639 17.8917 21.0708C17.7926 21.0777 17.6935 21.0566 17.6058 21.0099L12.9878 18.5819C12.6835 18.4221 12.345 18.3386 12.0013 18.3386C11.6576 18.3386 11.3191 18.4221 11.0148 18.5819L6.3978 21.0099C6.31013 21.0563 6.2112 21.0772 6.11225 21.0701C6.0133 21.0631 5.91832 21.0285 5.83809 20.9701C5.75787 20.9118 5.69563 20.8321 5.65846 20.7401C5.62128 20.6481 5.61066 20.5476 5.6278 20.4499L6.5088 15.3109C6.567 14.9716 6.54178 14.6233 6.43534 14.2959C6.32889 13.9686 6.14441 13.672 5.8978 13.4319L2.1618 9.79489C2.09039 9.72593 2.03979 9.63829 2.01576 9.54197C1.99173 9.44565 1.99524 9.34451 2.02588 9.25008C2.05652 9.15566 2.11307 9.07174 2.18908 9.00788C2.26509 8.94402 2.3575 8.90279 2.4558 8.88889L7.6208 8.13389C7.96106 8.08439 8.28419 7.95295 8.56238 7.75088C8.84058 7.54881 9.0655 7.28216 9.2178 6.97389L11.5268 2.29489Z"
                                      fill="#C7A8B3"
                                      stroke="#C7A8B3"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                              ))}
                            </div>

                            <div className="flex items-center gap-6">
                              <div className="w-[94px] h-[94px] rounded-full">
                                <img
                                  className="w-full h-full rounded-full"
                                  src={ProfileImage}
                                  alt="not found"
                                />
                              </div>
                              <div>
                                <h3 className="text-[#101828] font-manrope text-2xl font-semibold leading-9">
                                  Jessica Marie
                                </h3>
                                <h5 className="text-[#798090] font-manrope text-[18px] leading-[27px]">
                                  Pembroke Pines
                                </h5>
                                <h6 className="text-[#CF9585] font-manrope font-medium leading-6">
                                  Used 5 vendors
                                </h6>
                              </div>
                            </div>

                            <div className="relative flex gap-2 mt-12">
                              <CarouselPrevious />
                              <CarouselNext />
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

      <div className="h-[380px] w-[180px] absolute right-0 -bottom-10">
        <img src={ClientSayElementRight} alt="" />
      </div>
      <div className="h-[380px] w-[180px] absolute left-0 -top-10">
        <img src={ClientSayElementLeft} alt="" />
      </div>
    </section>
  );
}
