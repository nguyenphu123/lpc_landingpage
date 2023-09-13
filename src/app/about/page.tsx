"use client";

import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
import CompanyInfo from "@/components/companyInfo";
import { useSelector } from "react-redux";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import PageHeader from "@/partials/PageHeader";
import dynamic from "next/dynamic";
const SeoMeta = dynamic(() => import("@/partials/SeoMeta"));
//about us page
const About = () => {
  //page metadata
  const data = {
    title: "About us",
    meta_title: "",
    description: "this is meta description",
    image: "",
  };
  //language
  const curlanguage = useSelector((rootState) => language(rootState));
  return (
    <>
      <SeoMeta
        title={data.title}
        meta_title={data.meta_title}
        description={data.description}
        image={data.image}
      />
      <PageHeader
        title={
          curlanguage.changeLanguage.value == "en"
            ? DataEn["about"].name
            : Data["about"].name
        }
      />
      <CompanyInfo />
    </>
  );
};

export default About;
