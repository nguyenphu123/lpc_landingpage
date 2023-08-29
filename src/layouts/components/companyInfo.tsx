"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import { company, companyData } from "@/feature/data/companySlice";
import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
import { useEffect, useState } from "react";
import { loadCompanyInfo } from "@/lib/loadData";
import PartnerListForAbout from "./partnerListForAbout";
import CustomerListForAbout from "./customerListForAbout";
export default function CompanyInfo() {
  const curlanguage = useSelector((rootState) => language(rootState));
  const companyInfo = useSelector((rootState) => company(rootState));

  let companyDatas: any = companyInfo.companyData.value;

  const [isBusy, setBusy] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    // declare the data fetching function
    async function fetchNew() {
      if (Object.keys(companyDatas).length == 0) {
        if (
          JSON.parse(localStorage.getItem("companyInfo") || "[]").length == 1 ||
          JSON.parse(localStorage.getItem("companyInfo") || "[]").length == 0
        ) {
          const companyCheck = await loadCompanyInfo();

          dispatch(companyData(companyCheck));
        } else {
          companyDatas = JSON.parse(
            localStorage.getItem("companyInfo") || "[]",
          )[0];
        }

        setBusy(false);
      } else {
        setBusy(false);
      }
    }

    // call the function
    fetchNew()
      // make sure to catch any error
      .catch(console.error);
  }, [isBusy]);
  return isBusy ? (
    <></>
  ) : (
    <section className="section-sm">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-9 gap-x-20 pb-32">
          <div className="min-h-[200px] col-span-5">
            <h3 className="col-span-5">
              {curlanguage.changeLanguage.value == "en"
                ? DataEn["quote1"].name
                : Data["quote1"].name}
            </h3>
            <p
              dangerouslySetInnerHTML={{
                __html:
                  curlanguage.changeLanguage.value == "en"
                    ? companyDatas.companyDescriptionEn.content
                    : companyDatas.companyDescription.content,
              }}
            ></p>
          </div>
          <div className="min-h-[50px] col-span-4">
            <div className="relative h-full">
              <Image
                src={companyDatas.companyDescription.image}
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
                src={companyDatas.companyCore.image}
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
                    ? companyDatas.companyCoreEn.content
                    : companyDatas.companyCore.content,
              }}
            ></p>
          </div>
        </div>
        <div className="min-h-[500px] grid grid-cols-3 h-full relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src={
                "https://res.cloudinary.com/derjssgq9/image/upload/v1692668701/LPC_Images/About/wm_1_jcg1xz.png"
              }
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
            <h2 className="mb-1">1000+</h2>
            <h6>
              {curlanguage.changeLanguage.value == "en"
                ? DataEn["projects"].name
                : Data["projects"].name}
            </h6>
          </div>
          <div className="min-h-[50px] col-span-1 flex flex-col items-center justify-center">
            <h2 className="mb-1">&gt;100</h2>
            <h6>
              {curlanguage.changeLanguage.value == "en"
                ? DataEn["partner"].name
                : Data["partner"].name}
            </h6>
          </div>
          <div className="min-h-[50px] col-span-1 flex flex-col items-center justify-center">
            <h2 className="mb-1">500</h2>
            <h6>
              {curlanguage.changeLanguage.value == "en"
                ? DataEn["customer2"].name
                : Data["customer2"].name}
            </h6>
          </div>
        </div>
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h3
              className="text-center"
              dangerouslySetInnerHTML={{
                __html:
                  curlanguage.changeLanguage.value == "en"
                    ? DataEn["partner"].description.toUpperCase()
                    : Data["partner"].description.toUpperCase(),
              }}
            ></h3>
            <PartnerListForAbout />
          </div>
        </div>
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h3
              className="text-center"
              dangerouslySetInnerHTML={{
                __html:
                  curlanguage.changeLanguage.value == "en"
                    ? DataEn["customer2"].description.toUpperCase()
                    : Data["customer2"].description.toUpperCase(),
              }}
            ></h3>
            <CustomerListForAbout />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            src="https://res.cloudinary.com/derjssgq9/image/upload/v1693284851/lpc_revenue_lcetzq.webp"
            width={1200}
            height={700}
            alt="LPC team"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}
