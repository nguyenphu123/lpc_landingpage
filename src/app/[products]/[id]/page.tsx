"use client";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import "../../../styles/scroll.scss";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
import { company } from "@/feature/data/dataSlice";

const RegularPages = () => {
  const params = useParams();
  const companyInfo = useSelector(company);
  let product = [];
  let data: any = {};
  let resultData: any = {};
  if (params.products == "services") {
    product = companyInfo.data.value.product.filter(
      (item: { type: string }) => item.type == "service",
    );
    data = product[0];
  } else {
    product = companyInfo.data.value.product.filter(
      (item: { type: string }) => item.type == "solution",
    );
    const solution = product.filter(
      (item: { link: string; type: string }) =>
        "/" + params.products == item.link,
    );
    data = solution[0];
  }

  resultData = data.content.filter(
    (item: { id: string }) => item.id == params.id,
  );

  const curlanguage = useSelector(language);
  return (
    <section>
      {/* <SeoMeta
        title={data.title}
        meta_title={data.meta_title}
        description={data.description}
        image={data.image}
      />
      <PageHeader title={data.title} /> */}
      <div className="relative">
        <div className="border-b border-gray-200 dark:border-gray-700 sticky top-20 left-0 right-0 bg-white">
          <nav
            className="-mb-0.5 flex justify-center space-x-6 sticky top-10"
            aria-label="Tabs"
            role="tablist"
          >
            {resultData[0].description.map((content: any, i: any) => {
              return (
                <a
                  key={content.id}
                  href={`#${content.id}`}
                  className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600"
                  id="horizontal-alignment-item-2"
                  data-hs-tab="#horizontal-alignment-2"
                  aria-controls="horizontal-alignment-2"
                  role="tab"
                >
                  {content.title}
                </a>
              );
            })}
          </nav>
        </div>
        <div className="h-52 w-full bg-cover  bg-[url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)]">
          <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
              <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">
                {curlanguage.changeLanguage.value == "en"
                  ? DataEn["service_detail"].name
                  : Data["service_detail"].name}
              </h1>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              {resultData[0].description.map((content: any, i: any) => {
                return (
                  <div key={content.id}>
                    <h2
                      id={content.id}
                      className="text-3xl font-semibold leading-8 text-gray-900"
                    >
                      {i + 1}-
                      {curlanguage.changeLanguage.value == "en"
                        ? content.titleEn
                        : content.title}
                    </h2>
                    <div
                      className="description"
                      dangerouslySetInnerHTML={{
                        __html:
                          curlanguage.changeLanguage.value == "en"
                            ? content.contentEn
                            : content.content,
                      }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default RegularPages;
