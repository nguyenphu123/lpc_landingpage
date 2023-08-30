"use client";
import ProductCard from "../../../layouts/components/productCard";
const SeoMeta = dynamic(() => import("@/partials/SeoMeta"));
import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import { companyProduct, product } from "@/feature/data/productSlice";
import { useEffect, useState } from "react";
import { loadProduct } from "@/lib/loadData";
import PageHeader from "@/partials/PageHeader";
import { useUrl } from "nextjs-current-url";
import dynamic from "next/dynamic";
const RegularPages = () => {
  const params: any = useParams();
  const productInfo = useSelector((rootState) => product(rootState));
  let products = [];
  const { href } = useUrl() ?? {};
  let [data, setData]: any = useState({});
  products =
    productInfo.productData.value.product != undefined
      ? productInfo.productData.value.product.filter(
          (item: { type: string }) => item.type == "Solution",
        )
      : [];

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
        const result = productCheck.products.filter(
          (item: { type: string }) => item.type == "Solution",
        );
        setData(
          result.filter(
            (item: { [x: string]: any; link: string; type: string }) =>
              params.id == item._id,
          )[0],
        );
        dispatch(companyProduct(productCheck));
      } else {
        const solution = products.filter(
          (item: { [x: string]: any; link: string; type: string }) =>
            params.id == item._id,
        );
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
      <PageHeader
        title={
          curlanguage.changeLanguage.value == "en"
            ? data?.titleEn.toUpperCase()
            : data?.title.toUpperCase()
        }
      />

      <div className="h-52 w-full bg-cover  bg-[url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)]">
        <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">
              {curlanguage.changeLanguage.value == "en"
                ? DataEn["product_solution"]?.name
                : Data["product_solution"]?.name}
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
