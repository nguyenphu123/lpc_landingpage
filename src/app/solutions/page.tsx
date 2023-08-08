"use client";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { FaCheck } from "react-icons/fa/index.js";
import { useSelector } from "react-redux";
import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
import "../../styles/scroll.scss";
import { company } from "@/feature/data/dataSlice";
const Solutions = () => {
  const curlanguage = useSelector(language);
  const companyInfo = useSelector(company);
  const data = companyInfo.data.value.product.filter(
    (item: { type: string }) => item.type == "solution",
  );
  return (
    <>
      <SeoMeta />
      <div className="border-b border-gray-200 dark:border-gray-700 sticky top-20 left-0 right-0 bg-white">
        <nav
          className="-mb-0.5 flex justify-center space-x-6 sticky top-10"
          aria-label="Tabs"
          role="tablist"
        >
          {data.map((content: any, i: any) => {
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
                {curlanguage.changeLanguage.value == "en"
                  ? content.titleEn
                  : content.title}
              </a>
            );
          })}
        </nav>
      </div>

      {data.map(
        (
          feature: {
            prosEn: any;
            descriptionEn2: string;
            titleEn: string;
            id: string | undefined;
            image: any;
            title: string;
            description2: string;
            pros: string[];
            link: string;
          },
          index: number,
        ) => (
          <section
            key={index}
            className={`section-sm ${index % 2 === 0 && "bg-gradient"}`}
          >
            <div className="container" id={feature.id}>
              <div className="row items-center justify-between">
                <div
                  className={`mb:md-0 mb-6 md:col-5 ${
                    index % 2 !== 0 && "md:order-2"
                  }`}
                >
                  <ImageFallback
                    src={feature.image}
                    height={480}
                    width={520}
                    alt={feature.image}
                  />
                </div>
                <div
                  className={`md:col-7 lg:col-6 ${
                    index % 2 !== 0 && "md:order-1"
                  }`}
                >
                  <h2
                    className="mb-4"
                    dangerouslySetInnerHTML={markdownify(
                      curlanguage.changeLanguage.value == "en"
                        ? feature.titleEn
                        : feature.title,
                    )}
                  />
                  <p
                    className="mb-8 text-lg"
                    dangerouslySetInnerHTML={markdownify(
                      curlanguage.changeLanguage.value == "en"
                        ? feature.descriptionEn2
                        : feature.description2,
                    )}
                  />
                  <ul>
                    {curlanguage.changeLanguage.value == "en"
                      ? feature.pros.map((bullet: string) => (
                          <li className="relative mb-4 pl-6" key={bullet}>
                            <FaCheck className={"absolute left-0 top-1.5"} />
                            <span
                              dangerouslySetInnerHTML={markdownify(bullet)}
                            />
                          </li>
                        ))
                      : feature.prosEn.map((bullet: string) => (
                          <li className="relative mb-4 pl-6" key={bullet}>
                            <FaCheck className={"absolute left-0 top-1.5"} />
                            <span
                              dangerouslySetInnerHTML={markdownify(bullet)}
                            />
                          </li>
                        ))}
                  </ul>

                  <a className="btn btn-primary mt-5" href={"/" + feature.link}>
                    {curlanguage.changeLanguage.value == "en"
                      ? DataEn["text3"].name
                      : Data["text3"].name}
                  </a>
                </div>
              </div>
            </div>
          </section>
        ),
      )}
    </>
  );
};

export default Solutions;
