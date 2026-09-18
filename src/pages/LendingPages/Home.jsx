import HomeCategories from "@/components/HomePage/HomeCategories";
import HomeFeaturedWedding from "@/components/HomePage/HomeFeaturedWedding";
import HomeHero from "@/components/HomePage/HomeHero";
import HomeHowItWorks from "@/components/HomePage/HomeHowItWorks";
import HomeRecentlyView from "@/components/HomePage/HomeRecentlyView";
import HomeWhyChoose from "@/components/HomePage/HomeWhyChoose";
import HomeWhyChoosePlatform from "@/components/HomePage/HomeWhyChoosePlatform";
import HomeCouplesSay from "@/components/HomePage/HomeCouplesSay";
import HomeFAQ from "@/components/HomePage/HomeFAQ";
import HomeInspirationGallery from "@/components/HomePage/HomeInspirationGallery";
import HomeLatestBlogs from "@/components/HomePage/HomeLatestBlogs";
import HomeStayUpdate from "@/components/HomePage/HomeStayUpdate";
import React from "react";
import HomeFeaturedService from "@/components/HomePage/HomeFeaturedService";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeWhyChoose />
      <HomeCategories />
      <HomeRecentlyView />
      <HomeHowItWorks />
      <HomeFeaturedWedding />
      <HomeFeaturedService />
      <HomeWhyChoosePlatform />
      <HomeCouplesSay />
      <HomeLatestBlogs />
      <HomeInspirationGallery />
      <HomeFAQ />
      <HomeStayUpdate />
    </>
  );
}
