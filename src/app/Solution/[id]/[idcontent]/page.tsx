"use client";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import "../../../../styles/scroll.scss";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
import { companyProduct, product } from "@/feature/data/productSlice";
import { loadProduct } from "@/lib/loadData";
import { useEffect, useState } from "react";
const RegularPages = () => {
  const params: any = useParams();
  const productInfo = useSelector((rootState) => product(rootState));
  let products = [];
  let data: any = [];
  let [resultData, setResultData]: any = useState({});
  products = productInfo.productData.value.product.filter(
    (item: { type: string }) => item.type == "Solution",
  );

  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    // declare the data fetching function
    const fetchSolution = async () => {
      if (products.length == 0) {
        if (
          JSON.parse(localStorage.getItem("productList") || "[]").length == 1
        ) {
          const productCheck = await loadProduct();
          dispatch(companyProduct(productCheck));
          data = productCheck.products
            .filter((item: { type: string }) => item.type == "Solution")
            .filter(
              (item: { [x: string]: any; link: string; type: string }) =>
                params.id == item._id,
            )[0]
            .content.filter(
              (item: { [x: string]: any; link: string; type: string }) =>
                params.idcontent == item._id,
            );

          setResultData(data);
          if (data == undefined) {
            router.replace("http://localhost:3000/");
          }
        } else {
          data = JSON.parse(localStorage.getItem("productList") || "[]")
            .filter((item: { type: string }) => item.type == "Solution")
            .filter(
              (item: { [x: string]: any; link: string; type: string }) =>
                params.id == item._id,
            )[0]
            .content.filter(
              (item: { [x: string]: any; link: string; type: string }) =>
                params.idcontent == item._id,
            );
          setResultData(data);
          if (data == undefined) {
            router.replace("http://localhost:3000/");
          }
        }
      } else {
        const solution: any = products.filter(
          (item: { [x: string]: any; link: string; type: string }) =>
            params.id == item._id,
        );
        const contain = solution[0].content.filter(
          (item: { [x: string]: any; link: string; type: string }) =>
            params.idcontent == item._id,
        );
        data = contain[0];
        if (data == undefined) {
          router.replace("http://localhost:3000/");
        }
        setResultData(data);
      }
    };
    // call the function
    fetchSolution()
      // make sure to catch any error
      .catch(console.error);
  }, [resultData]);
  console.log(resultData);
  const curlanguage = useSelector((rootState) => language(rootState));
  const onClickAbout = (e, id) => {
    e && e.preventDefault(); // to avoid the link from redirecting
    var elementToView = document.getElementById(id);
    if (elementToView) (elementToView as HTMLFormElement).scrollIntoView();
  };
  return resultData == undefined || Object.keys(resultData).length == 0 ? (
    <></>
  ) : (
    <section>
      <SeoMeta
        title={resultData?.title}
        meta_title={resultData?.meta_title}
        description={resultData?.content}
        image={resultData?.image}
      />
      <PageHeader
        title={
          curlanguage.changeLanguage.value == "en"
            ? resultData?.titleEn
            : resultData?.title
        }
      />
      <div className="relative">
        {/* <div className="border-b border-gray-200 dark:border-gray-700 sticky top-20 left-0 right-0 bg-white">
          <nav
            className="-mb-0.5 flex justify-center space-x-6 sticky top-10"
            aria-label="Tabs"
            role="tablist"
          >
            {resultData?.description.map((content: any, i: any) => {
              return (
                <a
                  key={content._id}
                  // href={`#${content._id}`}
                  className="cursor-pointer hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600"
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
            <div className="content">
              {resultData?.description.map((content: any, i: any) => {
                return (
                  <div key={content._id}>
                    <h2
                      id={content._id}
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
