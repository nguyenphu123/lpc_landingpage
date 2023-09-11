"use client";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import ImageFallback from "@/helpers/ImageFallback";
const SeoMeta = dynamic(() => import("@/partials/SeoMeta"));
import { FaCheck } from "react-icons/fa/index.js";
import { useDispatch, useSelector } from "react-redux";
import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
import "../../styles/scroll.scss";
import { companyProduct, product } from "@/feature/data/productSlice";
import PageHeader from "@/partials/PageHeader";
import Link from "next/link";
import { useEffect, useState } from "react";
import { loadProduct, loadSolution } from "@/lib/loadData";
import { useUrl } from "nextjs-current-url";
import dynamic from "next/dynamic";
import encryptId from "../../lib/utils/encrypt";
const Solutions = () => {
  let keyUtf8 = "";
  const { href } = useUrl() ?? {};
  const curlanguage = useSelector((rootState) => language(rootState));
  const productInfo = useSelector((rootState) => product(rootState));

  let [data, setData] = useState(
    productInfo.productData.value.product != undefined
      ? productInfo.productData.value.product.filter(
          (item: { type: string }) => item.type == "Solution",
        )
      : [],
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // declare the data fetching function
    const fetchSolution = async () => {
      if (data.length == 0) {
        const solutionCheck = await loadSolution(
          {
            title: 1,
            _id: 1,

            titleEn: 1,
            image: 1,

            pros: 1,
            prosEn: 1,

            description2: 1,
            descriptionEn2: 1,
            status: 1,
          },
          href,
        );
        setData(
          solutionCheck.products.filter((item) => item.status == "Active"),
        );
        const productCheck = await loadProduct(
          {
            title: 1,
            _id: 1,
            type: 1,
            titleEn: 1,
            image: 1,
            descriptionEn1: 1,
            description1: 1,
            pros: 1,
            prosEn: 1,
            content: 1,
            description2: 1,
            descriptionEn2: 1,
          },
          href,
        );

        dispatch(companyProduct(productCheck));
      } else {
      }
    };
    // call the function
    fetchSolution()
      // make sure to catch any error
      .catch(console.error);
  }, [data]);
  return data.length == 0 ? (
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
    <>
      <SeoMeta
        title={
          curlanguage.changeLanguage.value == "en"
            ? DataEn["solution"].name
            : Data["solution"].name
        }
      />
      <PageHeader
        title={
          curlanguage.changeLanguage.value == "en"
            ? DataEn["solution"].name
            : Data["solution"].name
        }
      />
      {/* <div className="border-b border-gray-200 dark:border-gray-700 sticky top-20 left-0 right-0 bg-white">
        <nav
          className="-mb-0.5 flex justify-center space-x-6 sticky top-10"
          aria-label="Tabs"
          role="tablist"
        >
          {data.map((content: any) => {
            return (
              <a
                key={content._id}
                href={`#${content._id}`}
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
      </div> */}

      {data.map(
        (
          feature: {
            prosEn: any;
            descriptionEn2: string;
            titleEn: string;
            _id: string;
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
            <div className="container" id={feature._id}>
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
                    dangerouslySetInnerHTML={{
                      __html:
                        curlanguage.changeLanguage.value == "en"
                          ? feature.titleEn
                          : feature.title,
                    }}
                  />
                  <p
                    className="mb-8 text-lg"
                    dangerouslySetInnerHTML={{
                      __html:
                        curlanguage.changeLanguage.value == "en"
                          ? feature.descriptionEn2
                          : feature.description2,
                    }}
                  />
                  <ul>
                    {curlanguage.changeLanguage.value == "en"
                      ? feature.prosEn.map((bullet: string) => (
                          <li className="relative mb-4 pl-6" key={bullet}>
                            <FaCheck className={"absolute left-0 top-1.5"} />
                            <span
                              dangerouslySetInnerHTML={{
                                __html: bullet,
                              }}
                            />
                          </li>
                        ))
                      : feature.pros.map((bullet: string) => (
                          <li className="relative mb-4 pl-6" key={bullet}>
                            <FaCheck className={"absolute left-0 top-1.5"} />
                            <span
                              dangerouslySetInnerHTML={{
                                __html: bullet,
                              }}
                            />
                          </li>
                        ))}
                  </ul>

                  <Link
                    className="btn btn-primary mt-5"
                    href={`/Solution/${encryptId(feature._id).toString()}`}
                  >
                    {curlanguage.changeLanguage.value == "en"
                      ? DataEn["text3"].name
                      : Data["text3"].name}
                  </Link>
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
