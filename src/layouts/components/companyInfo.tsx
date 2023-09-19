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
import { useUrl } from "nextjs-current-url";
import Chart from "../../layouts/components/chart";
export default function CompanyInfo() {
  const { href } = useUrl() ?? {};
  const curlanguage = useSelector((rootState) => language(rootState));
  const companyInfo = useSelector((rootState) => company(rootState));

  let [companyDatas, setCompanyDatas]: any = useState(
    companyInfo.companyData.value,
  );
  const [width, setWidth]: any = useState(
    typeof window !== "undefined" && window.innerWidth,
  ); // default width, detect on server.
  const handleResize = () =>
    setWidth(typeof window !== "undefined" && window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);
  const [isBusy, setBusy] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    // declare the data fetching function
    async function fetchNew() {
      if (Object.keys(companyDatas).length == 0) {
        const companyCheck = await loadCompanyInfo(href);
        setCompanyDatas(companyCheck.company[0]);
        setBusy(false);
        dispatch(companyData(companyCheck));
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
    <section className="section pt-7">
      <div className="container">
        <div className="row justify-center">
          <article className="lg:col-10">
            <div style={{ margin: "200px" }}></div>
            <div className="text-center">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  ) : (
    <section className="section-sm">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-9 gap-x-20 pb-32">
          <div className="min-h-[200px] col-span-5">
            {width < 1030 ? (
              <h3
                className="col-span-5 text-lg"
                dangerouslySetInnerHTML={{
                  __html:
                    curlanguage.changeLanguage.value == "en"
                      ? DataEn["quote1Mobile"].name
                      : Data["quote1Mobile"].name,
                }}
              ></h3>
            ) : (
              <h3
                className="col-span-5"
                dangerouslySetInnerHTML={{
                  __html:
                    curlanguage.changeLanguage.value == "en"
                      ? DataEn["quote1"].name
                      : Data["quote1"].name,
                }}
              ></h3>
            )}

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
            <h3 className={`col-span-5 ${width < 1030 ? "text-lg" : ""}`}>
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
            <h4
              dangerouslySetInnerHTML={{
                __html:
                  curlanguage.changeLanguage.value == "en"
                    ? DataEn["milestone"].name
                    : width < 1030
                    ? Data["milestone"].nameMobile
                    : Data["milestone"].name,
              }}
              className={`mb-1 ${width < 1030 ? "text-center" : ""}`}
            ></h4>
            <h2 className={`${width < 1030 ? "text-lg" : ""}`}>
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
            <h2 className={`mb-1`}>50</h2>
            <h6>
              {curlanguage.changeLanguage.value == "en"
                ? DataEn["partner"].name
                : Data["partner"].name}
            </h6>
          </div>
          <div className="min-h-[50px] col-span-1 flex flex-col items-center justify-center">
            <h2 className="mb-1">&gt;500</h2>
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
              className={`text-center ${width < 1030 ? "text-lg" : ""}`}
              dangerouslySetInnerHTML={{
                __html:
                  curlanguage.changeLanguage.value == "en"
                    ? width < 1030
                      ? DataEn["partner"].descriptionMobile.toUpperCase()
                      : DataEn["partner"].description.toUpperCase()
                    : width < 1030
                    ? Data["partner"].descriptionMobile.toUpperCase()
                    : Data["partner"].description.toUpperCase(),
              }}
            ></h3>
            <PartnerListForAbout />
          </div>
        </div>
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h3
              className={`text-center ${width < 1030 ? "text-lg" : ""}`}
              dangerouslySetInnerHTML={{
                __html:
                  curlanguage.changeLanguage.value == "en"
                    ? DataEn["customer2"].description.toUpperCase()
                    : width < 1030
                    ? Data["customer2"].descriptionMobile.toUpperCase()
                    : Data["customer2"].description.toUpperCase(),
              }}
            ></h3>
            <CustomerListForAbout />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h3 className={` ${width < 1030 ? "text-lg" : ""}`}>
            {curlanguage.changeLanguage.value == "en"
              ? "LPC revenue".toUpperCase()
              : "Doanh thu LPC".toUpperCase()}
          </h3>
          <Chart />
        </div>
      </div>
    </section>
  );
}
