"use client";
const SeoMeta = dynamic(() => import("@/partials/SeoMeta"));
import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
import Banner from "../../layouts/components/banner";
import Link from "next/link";
import { useSelector } from "react-redux";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import NewList from "../../layouts/components/newList";
import "../../styles/homepage.scss";
import ProductList from "@/components/productList";
import PartnerList from "@/components/partnerList";
import CustomerList from "@/components/customerList";
import dynamic from "next/dynamic";
import languageChange from "@/models/language";
import Image from "next/image";

import Popup from "@/components/season/popupBanner";
import { useEffect, useState } from "react";
const Home = () => {
  const curlanguage = useSelector(
    (rootState: languageChange) => language(rootState).changeLanguage.value,
  );
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 767.98;
  const [isScaledUp, setIsScaledUp]: any = useState(
    typeof window !== "undefined" &&
      window.innerWidth / window.screen.width === 1.5,
  ); // default width, detect on server.

  const handleResize = () => {
    setIsScaledUp(
      typeof window !== "undefined" &&
        window.innerWidth / window.screen.width === 1.5,
    );
    const imageElement = document.querySelector(
      ".img-newitem",
    ) as HTMLImageElement;
    if (isScaledUp) {
      imageElement.style.height = "10%"; // Double the height for 150% scaling
    } else {
      imageElement.style.height = "10%"; // Reset the height to 100% for other scales
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <div className="container-snap">
      {/* <Popup>
        <Image
          width={650}
          height={450}
          loading="lazy"
          objectFit="cover"
          sizes="(min-width: 300px) 50vw, 100vw"
          //src="https://res.cloudinary.com/derjssgq9/image/upload/v1701826947/merrychristmaslpc_lo3pmn.jpg"// winter image
          src="https://res.cloudinary.com/derjssgq9/image/upload/v1703488552/Official_Thi%E1%BB%87p_t%E1%BA%BFt_t%C3%A2y_2024_b%E1%BA%A3n_post_fb_-01_vhq15h.png"
          className="transition duration-300 ease-in-out group-hover:scale-110 img-newitem w-full rounded"
          alt="Louvre"
        />
      </Popup> */}
      <SeoMeta title="Home page" />
      <video
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        className="w-screen h-screen object-cover md:mt-[76px] mt-20"
      >
        <source
          media="(max-width: 768px)"
          src={
            curlanguage == "en"
              ? "/videos/Video Christmas 2024.mp4"
              : "/videos/Video Christmas 2024.mp4"
          }
          type="video/mp4"
        />
        <source
          media="(min-width: 768px)"
          src={
            curlanguage == "en"
              ? "/videos/IMG_4684.mp4"
              : "/videos/IMG_4684.mp4"
          }
          type="video/mp4"
        />
      </video>
      {/* <div
        // className={`flex flex-col justify-between`}
        style={{ height: "90dvh", marginTop:"80px" }}
      > */}
      {/*Video here*/}

      {/* <Banner /> */}
      {/* </div> */}
      <div className="bg-white py-5 sm:py-5 h-4/5">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-center text-xl  leading-8 text-gray-500 mt-10">
            {curlanguage == "en"
              ? DataEn["service_title1"].name
              : Data["service_title1"].name}
          </h2>

          <h2 className="text-center leading-9 text-4xl tracking-wide font-semibold  text-gray-900 mt-10">
            {curlanguage == "en"
              ? DataEn["service_title"].name
              : Data["service_title"].name}
          </h2>
          <p className="text-center mt-10">
            {curlanguage == "en"
              ? DataEn["service_title2"].name
              : Data["service_title2"].name}
          </p>
        </div>
      </div>
      <div className="flex justify-center w-full ">
        <ProductList />
      </div>

      <div className="bg-white py-5 sm:py-5 h-4/5">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold leading-8 text-gray-900 ">
            {curlanguage == "en"
              ? DataEn["customer"].name
              : Data["customer"].name}
          </h2>
          <p className="text-center mt-10">
            {curlanguage == "en"
              ? DataEn["customer"].description
              : Data["customer"].description}
          </p>
        </div>
      </div>
      <CustomerList />
      <div className="bg-white py-5 sm:py-5">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold leading-8 text-gray-900">
            {curlanguage == "en"
              ? DataEn["partner"].name
              : Data["partner"].name}
          </h2>
          <p
            className="text-center mt-10"
            dangerouslySetInnerHTML={{
              __html:
                curlanguage == "en"
                  ? DataEn["partner"].description
                  : Data["partner"].description,
            }}
          ></p>
        </div>
      </div>
      <PartnerList />
      <h2 className="text-center text-3xl font-semibold leading-8 text-gray-900">
        {curlanguage == "en" ? DataEn["news"].name : Data["news"].name}
      </h2>
      <Link href={"/blog"} className="float-right mr-60">
        {curlanguage == "en" ? DataEn["text1"].name : Data["text1"].name}
        &rarr;
      </Link>
      <hr className="w-3/4 h-px mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      <div className="flex justify-center w-full ">
        <NewList />
      </div>
    </div>
  );
};

export default Home;
