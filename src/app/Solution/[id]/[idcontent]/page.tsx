"use client";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import "../../../../styles/scroll.scss";
import PageHeader from "@/partials/PageHeader";
const SeoMeta = dynamic(() => import("@/partials/SeoMeta"));
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
import { companyProduct, product } from "@/feature/data/productSlice";
import { loadProduct } from "@/lib/loadData";
import { useEffect, useState } from "react";
import { useUrl } from "nextjs-current-url";
import dynamic from "next/dynamic";
const RegularPages = () => {
  const params: any = useParams();
  const productInfo = useSelector((rootState) => product(rootState));
  let products = [];
  let data: any = [];
  let [resultData, setResultData]: any = useState({});
  products = productInfo.productData.value.product.filter(
    (item: { type: string }) => item.type == "Solution",
  );
  const { href } = useUrl() ?? {};
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    // declare the data fetching function
    const fetchSolution = async () => {
      if (products.length == 0) {
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
        if (
          productCheck.products
            .filter((item: { type: string }) => item.type == "Solution")
            .filter(
              (item: { [x: string]: any; link: string; type: string }) =>
                params.id == item._id,
            )[0] == undefined
        ) {
          router.replace("http://localhost:3000/");
        }
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

        setResultData(data[0]);
        dispatch(companyProduct(productCheck));

        if (data == undefined) {
          router.replace("http://localhost:3000/");
        }
      } else {
        const solution: any = products.filter(
          (item: { [x: string]: any; link: string; type: string }) =>
            params.id == item._id,
        );
        if (solution[0] == undefined) {
          router.replace("http://localhost:3000/");
        }
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
  const curlanguage = useSelector((rootState) => language(rootState));
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
                    ? resultData.descriptionEn
                    : resultData.description,
              }}
            ></div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default RegularPages;
