"use client";
import SeoMeta from "@/partials/SeoMeta";
import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import { product } from "@/feature/data/productSlice";
import PageHeader from "@/partials/PageHeader";
import { useEffect, useState } from "react";
import { loadViaId } from "@/lib/loadData";
import "../../../styles/scroll.scss";
const RegularPages = () => {
  const params: any = useParams();
  const productInfo = useSelector((rootState) => product(rootState));
  let products: any = [];
  const [data, setData]: any = useState({});
  products = productInfo.productData.value.product.filter(
    (item: { type: string }) => item.type == "Service",
  );

  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      if (products.length == 0) {
        if (
          JSON.parse(localStorage.getItem("productList") || "[]").length == 0
        ) {
          const serviceCheck = await loadViaId(params.id, "Product");
          setData(serviceCheck.data);
          if (Object.keys(serviceCheck.data).length == 0) {
            router.replace("http://localhost:3000/");
          }
          setIsLoading(false);
        } else {
          if (
            JSON.parse(localStorage.getItem("productList") || "[]")
              .filter((item: { type: string }) => item.type == "Service")[0]
              .content.filter((post) => post._id === params.id)[0] == undefined
          ) {
            router.replace("http://localhost:3000/");
          } else {
            setData(
              JSON.parse(localStorage.getItem("productList") || "[]")
                .filter((item: { type: string }) => item.type == "Service")[0]
                .content.filter((post) => post._id === params.id)[0],
            );

            setIsLoading(false);
          }
        }
      } else {
        const service = products[0].content.filter(
          (item: { [x: string]: any; link: string; type: string }) =>
            params.id == item._id,
        );
        if (Object.keys(service[0]).length == 0) {
          router.replace("http://localhost:3000/");
        }
        setData(service[0]);

        setIsLoading(false);
      }
    };
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [setData, setIsLoading]);
  const onClickAbout = (e, id) => {
    e && e.preventDefault(); // to avoid the link from redirecting
    var elementToView = document.getElementById(id);
    if (elementToView) (elementToView as HTMLFormElement).scrollIntoView();
  };
  const curlanguage = useSelector((rootState) => language(rootState));
  return isLoading ? (
    <></>
  ) : (
    <section>
      <SeoMeta
        title={data?.title}
        meta_title={data?.meta_title}
        description={data?.content}
        image={data?.image}
      />
      <PageHeader
        title={
          curlanguage.changeLanguage.value == "en" ? data?.titleEn : data?.title
        }
      />
      <div className="relative">
        {/* <div className="border-b border-gray-200 dark:border-gray-700 sticky top-20 left-0 right-0 bg-white">
          <nav
            className="-mb-0.5 flex justify-center space-x-6 sticky top-10"
            aria-label="Tabs"
            role="tablist"
          >
            {data?.description.map((content: any, i: any) => {
              return (
                <a
                  key={content._id}
                  // href={`#${content._id}`}
                  className=" cursor-pointer hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600"
                  id="horizontal-alignment-item-2"
                  data-hs-tab="#horizontal-alignment-2"
                  aria-controls="horizontal-alignment-2"
                  role="tab"
                  onClick={(e) => onClickAbout(e, content._id)}
                >
                  {content.title}
                </a>
              );
            })}
          </nav>
        </div> */}
        <div className="h-52 w-full bg-cover  bg-[url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)]">
          <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
              <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">
                {curlanguage.changeLanguage.value == "en"
                  ? DataEn["service_detail"]?.name
                  : Data["service_detail"]?.name}
              </h1>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html:
                  curlanguage.changeLanguage.value == "en"
                    ? data.descriptionEn
                    : data.description,
              }}
            >
              {/* {data?.description.map((content: any, i: any) => {
                return (
                  <div key={content._id}>
                    <h2 className="text-3xl font-semibold leading-8 text-gray-900">
                      {i + 1}-
                      {curlanguage.changeLanguage.value == "en"
                        ? content.titleEn
                        : content.title}
                    </h2>
                    <div
                      id={content._id}
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
              })} */}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default RegularPages;
