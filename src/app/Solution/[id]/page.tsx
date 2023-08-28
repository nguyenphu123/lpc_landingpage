"use client";
import ProductCard from "../../../layouts/components/productCard";
import SeoMeta from "@/partials/SeoMeta";
import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import Breadcrumbs from "@/components/Breadcrumbs";
import { companyProduct, product } from "@/feature/data/productSlice";
import { useEffect, useState } from "react";
import { loadProduct } from "@/lib/loadData";

const RegularPages = () => {
  const params: any = useParams();
  const productInfo = useSelector((rootState) => product(rootState));
  let products = [];
  let [data, setData]: any = useState({});
  products = productInfo.productData.value.product.filter(
    (item: { type: string }) => item.type == "Solution",
  );
  const solution = products.filter(
    (item: { [x: string]: any; link: string; type: string }) =>
      params.id == item._id,
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
          const result = productCheck.products.filter(
            (item: { type: string }) => item.type == "Solution",
          );
          setData(
            result.filter(
              (item: { [x: string]: any; link: string; type: string }) =>
                params.id == item._id,
            )[0],
          );
          if (data == undefined) {
            router.replace("http://localhost:3000/");
          }
        } else {
          setData(
            JSON.parse(localStorage.getItem("productList") || "[]")
              .filter((item: { type: string }) => item.type == "Solution")
              .filter(
                (item: { [x: string]: any; link: string; type: string }) =>
                  params.id == item._id,
              )[0],
          );
          if (data == undefined) {
            router.replace("http://localhost:3000/");
          }
        }
      } else {
        setData(solution[0]);
        if (data == undefined) {
          router.replace("http://localhost:3000/");
        }
      }
    };
    // call the function
    fetchSolution()
      // make sure to catch any error
      .catch(console.error);
  }, [data]);
  
  const curlanguage = useSelector((rootState) => language(rootState));
  return data == undefined || Object.keys(data).length == 0 ? (
    <></>
  ) : (
    <section>
      <SeoMeta
        title={data?.title}
        meta_title={data?.meta_title}
        description={data?.description}
        image={data?.image}
      />

      <div className="container text-center">
        <div className="rounded-2xl bg-gradient-to-b from-body to-theme-light px-8 py-14 dark:from-darkmode-body dark:to-darkmode-theme-light">
          <h1>
            {curlanguage.changeLanguage.value == "en"
              ? data?.titleEn.toUpperCase()
              : data?.title.toUpperCase()}
          </h1>
          <Breadcrumbs className="mt-6" />
        </div>
      </div>

      <div className="h-52 w-full bg-cover  bg-[url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)]">
        <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">
              {curlanguage.changeLanguage.value == "en"
                ? DataEn["product"]?.name
                : Data["product"]?.name}
            </h1>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="content">
            <div className={`grid grid-cols-4 gap-4`}>
              {data?.content.map(
                (
                  content: {
                    [x: string]: any;
                    contentEn: any;
                    titleEn: any;
                    link: any;
                    id: any;
                    imgSrc: any;
                    title: any;
                    content: any;
                  },
                  i: any,
                ) => {
                  return (
                    <ProductCard
                      key={content.id}
                      srcImg={content.imgSrc}
                      title={
                        curlanguage.changeLanguage.value == "en"
                          ? content.titleEn
                          : content.title
                      }
                      content={
                        curlanguage.changeLanguage.value == "en"
                          ? content.contentEn
                          : content.content
                      }
                      id={content.id}
                      link={`${data?._id}/${content._id}`}
                    ></ProductCard>
                  );
                },
              )}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default RegularPages;
