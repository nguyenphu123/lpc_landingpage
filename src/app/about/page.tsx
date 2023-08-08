"use client";
import SeoMeta from "@/partials/SeoMeta";
import Image from "next/image";
import PageHeader from "@/partials/PageHeader";
import { useSelector } from "react-redux";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import { company } from "@/feature/data/dataSlice";
import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
const About = () => {
  const data = {
    title: "DỊCH VỤ IT",
    meta_title: "",
    description: "this is meta description",
    image: "",
  };
  const curlanguage = useSelector(language);
  const companyInfo = useSelector(company);
  const partnerList = companyInfo.data.value.partnerList;
  const customerList = companyInfo.data.value.customerList;

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
            ? DataEn["contact"].name
            : Data["contact"].name
        }
      />
      <section className="section-sm">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-9 gap-x-20 pb-32">
            <div className="min-h-[200px] col-span-5">
              <h3 className="col-span-5">
                {" "}
                {curlanguage.changeLanguage.value == "en"
                  ? DataEn["quote1"].name
                  : Data["quote1"].name}
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    curlanguage.changeLanguage.value == "en"
                      ? companyInfo.data.value.companyDescription.contentEn
                      : companyInfo.data.value.companyDescription.content,
                }}
              ></p>
            </div>
            <div className="min-h-[50px] col-span-4">
              <div className="relative h-full">
                <Image
                  src={companyInfo.data.value.companyDescription.imgSrc.src}
                  width={500}
                  height={300}
                  alt="LPC team"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-9 gap-x-20 pb-32">
            <div className="min-h-[50px] col-span-4">
              <div className="relative h-full">
                <Image
                  src={companyInfo.data.value.companyCore.imgSrc.src}
                  width={500}
                  height={300}
                  alt="LPC team"
                />
              </div>
            </div>
            <div className="min-h-[200px] col-span-5">
              <h3 className="col-span-5">
                {curlanguage.changeLanguage.value == "en"
                  ? DataEn["basic_moral"].name
                  : Data["basic_moral"].name}
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    curlanguage.changeLanguage.value == "en"
                      ? companyInfo.data.value.companyCore.contentEn
                      : companyInfo.data.value.companyCore.content,
                }}
              ></p>
            </div>
          </div>
          <div className="min-h-[500px] grid grid-cols-3 h-full relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image
                src={companyInfo.data.value.milestone.src}
                height={400}
                width={400}
                alt="wm"
              />
            </div>
            <div className="min-h-[50px] flex flex-col items-center justify-center col-span-3">
              <h4 className="mb-1">
                {curlanguage.changeLanguage.value == "en"
                  ? DataEn["milestone"].name
                  : Data["milestone"].name}
              </h4>
              <h2>
                {curlanguage.changeLanguage.value == "en"
                  ? DataEn["milestone"].description
                  : Data["milestone"].description}
              </h2>
            </div>
            <div className="min-h-[50px] col-span-1 flex flex-col items-center justify-center">
              <h2 className="mb-1">700+</h2>
              <h6>
                {curlanguage.changeLanguage.value == "en"
                  ? DataEn["projects"].name
                  : Data["projects"].name}
              </h6>
            </div>
            <div className="min-h-[50px] col-span-1 flex flex-col items-center justify-center">
              <h2 className="mb-1">&gt;30</h2>
              <h6>
                {curlanguage.changeLanguage.value == "en"
                  ? DataEn["partner"].name
                  : Data["partner"].name}
              </h6>
            </div>
            <div className="min-h-[50px] col-span-1 flex flex-col items-center justify-center">
              <h2 className="mb-1">36</h2>
              <h6>
                {curlanguage.changeLanguage.value == "en"
                  ? DataEn["customer2"].name
                  : Data["customer2"].name}
              </h6>
            </div>
          </div>
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h3 className="text-center">
                {curlanguage.changeLanguage.value == "en"
                  ? DataEn["partner"].description
                  : Data["partner"].description}
              </h3>
              <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                {partnerList.map((img: { src: string; type: string }) => {
                  return (
                    <Image
                      key={img.src}
                      className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                      src={img.src + ""}
                      alt={img.type + ""}
                      width={158}
                      height={48}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h3
                className="text-center"
                dangerouslySetInnerHTML={{
                  __html:
                    curlanguage.changeLanguage.value == "en"
                      ? DataEn["customer2"].description
                      : Data["customer2"].description,
                }}
              ></h3>
              <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                {customerList.map((img: { src: string; type: string }) => {
                  return (
                    <Image
                      key={img.src}
                      className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                      src={img.src + ""}
                      alt={img.type + ""}
                      width={158}
                      height={48}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
