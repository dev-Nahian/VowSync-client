import React, { useState } from "react";
import Container from "@/components/common/Container";
import CommonButton from "@/components/common/CommonButton";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addRegisteredVendor, getCategoryDefaultImage } from "@/Redux/Slices/vendorsSlice";
import toast from "react-hot-toast";
import VendorLoginImageOne from "@/assets/Images/Auth/vendor-login-1.png";
import VendorLoginImageTwo from "@/assets/Images/Auth/vendor-login-2.png";
import EnvelopeIconSVG from "@/components/SVG/EnvelopeIconSVG";
import PhoneIconSVG from "@/components/SVG/PhoneIconSVG";
import LocationIconSVG from "@/components/SVG/LocationIconSVG";
import CheckMarkIconSVG from "@/components/SVG/CheckMarkIconSVG";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function VendorRegister() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [category, setCategory] = useState("Photography & Cinema");
  const [priceTier, setPriceTier] = useState("$$$ (Premium)");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      businessName: "Luxe Memories Photography Studio",
      contactName: "David Miller",
      email: "david@luxememories.com",
      phone: "+880 1812-987654",
      city: "Dhaka",
      experience: "5+ Years",
      website: "https://luxememories.com",
      description:
        "Award-winning fine-art wedding photography and cinematic 4K storytelling for modern celebrations.",
    },
  });

  const categories = [
    "Venues & Banquets",
    "Photography & Cinema",
    "Catering & Cuisine",
    "Floral & Decor",
    "Makeup & Hair",
    "Bridal Wear & Attire",
    "DJ & Entertainment",
    "Wedding Planners",
    "Cakes & Desserts",
  ];

  const onSubmit = (data) => {
    const rawTier = priceTier.split(" ")[0] || "$$$";
    const newVendor = {
      id: `v_reg_${Date.now()}`,
      name: data.businessName,
      category: category,
      priceTier: rawTier,
      priceRange: `Starting from ${rawTier === "$" ? "$800" : rawTier === "$$" ? "$2,500" : rawTier === "$$$" ? "$4,800" : "$9,500"}`,
      rating: 5.0,
      reviewsCount: 1,
      city: data.city || "Dhaka",
      address: `${data.city || "Dhaka"}, Bangladesh`,
      capacity: "Flexible Capacity",
      features: [
        "Verified Partner",
        "Direct Booking Available",
        data.experience ? `${data.experience} Experience` : "5+ Years Experience",
        "Custom Packages",
      ],
      image: getCategoryDefaultImage(category),
      description:
        data.description ||
        "Award-winning wedding service provider dedicated to making your celebration unforgettable.",
      isNewlyRegistered: true,
      phone: data.phone,
      email: data.email,
      website: data.website,
      registeredAt: new Date().toISOString(),
    };

    // Dispatch to Redux (which also syncs with localStorage)
    dispatch(addRegisteredVendor(newVendor));

    try {
      localStorage.setItem("wedelogy_vendor_profile", JSON.stringify(newVendor));
    } catch (e) {
      console.error(e);
    }

    toast.success(
      `🎉 Welcome ${newVendor.name}! Your vendor card is now live on the homepage & browse directory!`
    );
    navigate("/vendor-dashboard");
  };

  return (
    <section className="w-full bg-[#fff9F9] py-12 md:py-20 min-h-[calc(100vh-80px)] flex items-center">
      <Container>
        <div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          <div className="w-full lg:w-5/12 flex flex-col items-center justify-center">
            <div className="w-full max-w-[440px] relative mb-8">
              <img
                src={VendorLoginImageOne}
                alt="Vendor Showcase"
                className="w-full rounded-3xl shadow-xl object-cover"
              />
              <img
                src={VendorLoginImageTwo}
                alt="Vendor Details"
                className="w-36 md:w-48 absolute -bottom-6 -right-4 rounded-2xl shadow-lg border-4 border-white object-cover"
              />
            </div>

            <div className="w-full max-w-[420px] bg-white p-6 rounded-2xl border border-[#EFE5E7] shadow-xs">
              <h3 className="text-lg font-bold text-[#121117] font-manrope mb-3">
                Why partner with VowSync?
              </h3>
              <ul className="space-y-2.5 text-sm text-[#5B6477] font-manrope">
                <li className="flex items-center gap-2">
                  <span className="text-[#2B7A78]">✓</span> Instant showcase on Landing Page & Vendor Directory
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2B7A78]">✓</span> Connect with 25,000+ active couples planning weddings
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2B7A78]">✓</span> 0% commission on direct messaging inquiries
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#2B7A78]">✓</span> Dedicated Pro Vendor Dashboard & CRM tools
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="bg-white p-6 md:p-10 rounded-3xl border border-[#EFE5E7] shadow-md">
              <div className="mb-6">
                <span className="inline-block px-3.5 py-1 rounded-full bg-[#FCECEE] text-[#CF9585] text-xs font-bold uppercase tracking-wider mb-2">
                  Vendor Partner Network
                </span>
                <h1 className="text-[#121117] text-3xl md:text-4xl font-bold font-playfair">
                  Join as a Wedding Vendor
                </h1>
                <p className="text-[#5B6477] text-sm md:text-base font-manrope mt-1">
                  Publish your business profile, receive genuine couple booking requests, and grow your wedding clientele.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Business Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F] font-manrope">
                      Business / Studio Name *
                    </label>
                    <input
                      {...register("businessName", {
                        required: "Business name is required",
                      })}
                      type="text"
                      placeholder="e.g. Royal Blooms Floral Design"
                      className={`px-4 py-2.5 rounded-xl border bg-white text-sm font-manrope focus:outline-none focus:ring-2 focus:ring-[#CF9585] ${
                        errors.businessName
                          ? "border-red-500"
                          : "border-[#DADADA]"
                      }`}
                    />
                    {errors.businessName && (
                      <span className="text-red-500 text-xs">
                        {errors.businessName.message}
                      </span>
                    )}
                  </div>

                  {/* Category */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F] font-manrope">
                      Service Category *
                    </label>
                    <Select value={category} onValueChange={setCategory}>
                      <SelectTrigger className="w-full px-4 py-2.5 rounded-xl border border-[#DADADA] bg-white text-sm font-manrope">
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {categories.map((cat) => (
                            <SelectItem key={cat} value={cat}>
                              {cat}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Contact Person */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F] font-manrope">
                      Primary Contact Person *
                    </label>
                    <input
                      {...register("contactName", {
                        required: "Contact name is required",
                      })}
                      type="text"
                      placeholder="e.g. David Miller"
                      className={`px-4 py-2.5 rounded-xl border bg-white text-sm font-manrope focus:outline-none focus:ring-2 focus:ring-[#CF9585] ${
                        errors.contactName
                          ? "border-red-500"
                          : "border-[#DADADA]"
                      }`}
                    />
                  </div>

                  {/* City */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F] font-manrope">
                      Base City / Region *
                    </label>
                    <div className="relative">
                      <input
                        {...register("city", { required: "City is required" })}
                        type="text"
                        placeholder="e.g. Dhaka, Gulshan"
                        className={`w-full px-4 py-2.5 pl-10 rounded-xl border bg-white text-sm font-manrope focus:outline-none focus:ring-2 focus:ring-[#CF9585] ${
                          errors.city ? "border-red-500" : "border-[#DADADA]"
                        }`}
                      />
                      <div className="w-4 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
                        <LocationIconSVG />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F] font-manrope">
                      Business Email *
                    </label>
                    <div className="relative">
                      <input
                        {...register("email", {
                          required: "Email is required",
                        })}
                        type="email"
                        placeholder="contact@business.com"
                        className={`w-full px-4 py-2.5 pl-10 rounded-xl border bg-white text-sm font-manrope focus:outline-none focus:ring-2 focus:ring-[#CF9585] ${
                          errors.email ? "border-red-500" : "border-[#DADADA]"
                        }`}
                      />
                      <div className="w-4 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
                        <EnvelopeIconSVG />
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F] font-manrope">
                      Phone / WhatsApp *
                    </label>
                    <div className="relative">
                      <input
                        {...register("phone", {
                          required: "Phone is required",
                        })}
                        type="tel"
                        placeholder="+880 1812-000000"
                        className={`w-full px-4 py-2.5 pl-10 rounded-xl border bg-white text-sm font-manrope focus:outline-none focus:ring-2 focus:ring-[#CF9585] ${
                          errors.phone ? "border-red-500" : "border-[#DADADA]"
                        }`}
                      />
                      <div className="w-4 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
                        <PhoneIconSVG />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Price Tier */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F] font-manrope">
                      Price Range
                    </label>
                    <Select value={priceTier} onValueChange={setPriceTier}>
                      <SelectTrigger className="w-full px-4 py-2.5 rounded-xl border border-[#DADADA] bg-white text-sm font-manrope">
                        <SelectValue placeholder="Price Range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="$ (Budget Friendly)">
                            $ (Budget Friendly)
                          </SelectItem>
                          <SelectItem value="$$ (Moderate)">
                            $$ (Moderate)
                          </SelectItem>
                          <SelectItem value="$$$ (Premium)">
                            $$$ (Premium)
                          </SelectItem>
                          <SelectItem value="$$$$ (Luxury / Haute)">
                            $$$$ (Luxury / Haute)
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Portfolio / Website */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F] font-manrope">
                      Website or Instagram Link
                    </label>
                    <input
                      {...register("website")}
                      type="url"
                      placeholder="https://instagram.com/yourhandle"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#DADADA] bg-white text-sm font-manrope focus:outline-none focus:ring-2 focus:ring-[#CF9585]"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1D1D1F] font-manrope">
                    About Your Services & Specialty
                  </label>
                  <textarea
                    {...register("description")}
                    rows={3}
                    placeholder="Describe your style, packages, and what makes your work unique..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#DADADA] bg-white text-sm font-manrope focus:outline-none focus:ring-2 focus:ring-[#CF9585]"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <CommonButton
                    type="submit"
                    className="w-full justify-center"
                  >
                    Register Vendor & Publish Live Profile 🚀
                  </CommonButton>
                </div>

                <div className="text-center pt-2">
                  <span className="text-xs md:text-sm text-[#5B6477] font-manrope">
                    Already registered as a partner?{" "}
                    <Link
                      to="/auth/login"
                      className="text-[#CF9585] font-bold underline hover:opacity-80"
                    >
                      Vendor Log In
                    </Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
