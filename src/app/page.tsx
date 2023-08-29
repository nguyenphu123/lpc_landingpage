"use client";
import SeoMeta from "@/partials/SeoMeta";
import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
import Banner from "../layouts/components/banner";
import Link from "next/link";
import { useSelector } from "react-redux";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import NewList from "../layouts/components/newList";
import "../styles/homepage.scss";
import ProductList from "@/components/productList";
import PartnerList from "@/components/partnerList";
import CustomerList from "@/components/customerList";
import { useEffect } from "react";

const Home = () => {
  const curlanguage = useSelector((rootState) => language(rootState));
  // window.onbeforeunload = function() {
  //   localStorage.clear
  //   return '';
  // };
  useEffect(() => {
    // declare the data fetching function
    // window.onbeforeunload = function () {
    //   localStorage.clear();
    //   return "";
    // };
  }, []);
  return (
    <div className="container-snap">
      <SeoMeta />
      <div
        className={`flex flex-col justify-between`}
        style={{ height: "90vh" }}
      >
        <Banner />
      </div>
      <div className="bg-white py-5 sm:py-5 h-4/5">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-center text-xl  leading-8 text-gray-500 mt-10">
            {curlanguage.changeLanguage.value == "en"
              ? DataEn["service_title1"].name
              : Data["service_title1"].name}
          </h2>
          <h2 className="text-center leading-9 text-4xl tracking-wide font-semibold  text-gray-900 mt-10">
            {curlanguage.changeLanguage.value == "en"
              ? DataEn["service_title"].name
              : Data["service_title"].name}
          </h2>
          <p className="text-center mt-10">
            {curlanguage.changeLanguage.value == "en"
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
            {curlanguage.changeLanguage.value == "en"
              ? DataEn["customer"].name
              : Data["customer"].name}
          </h2>
          <p className="text-center mt-10">
            {curlanguage.changeLanguage.value == "en"
              ? DataEn["customer"].description
              : Data["customer"].description}
          </p>
        </div>
      </div>
      <CustomerList />
      <div className="bg-white py-5 sm:py-5">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold leading-8 text-gray-900">
            {curlanguage.changeLanguage.value == "en"
              ? DataEn["partner"].name
              : Data["partner"].name}
          </h2>
          <p
            className="text-center mt-10"
            dangerouslySetInnerHTML={{
              __html:
                curlanguage.changeLanguage.value == "en"
                  ? DataEn["partner"].description
                  : Data["partner"].description,
            }}
          ></p>
        </div>
      </div>
      <PartnerList />
      <h2 className="text-center text-3xl font-semibold leading-8 text-gray-900">
        {curlanguage.changeLanguage.value == "en"
          ? DataEn["news"].name
          : Data["news"].name}
      </h2>
      <Link href={"/blog"} className="float-right mr-60">
        {curlanguage.changeLanguage.value == "en"
          ? DataEn["text1"].name
          : Data["text1"].name}
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
