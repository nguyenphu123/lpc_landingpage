"use client";
import ProductCard from "../../layouts/components/productCard";
import SeoMeta from "@/partials/SeoMeta";
import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
import { useSelector } from "react-redux";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import Breadcrumbs from "@/components/Breadcrumbs";
import { product } from "@/feature/data/productSlice";
const RegularPages = () => {
  const productInfo = useSelector((rootState) => product(rootState));
  let products = [];
  let data: any = {};
  products = productInfo.productData.value.product.filter(
    (item: { type: string }) => item.type == "Service",
  );
  data = products[0];
  const curlanguage = useSelector((rootState) => language(rootState));
  return (
    <section>
      <SeoMeta
        title={data?.title}
        meta_title={data?.meta_title}
        description={data?.title}
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
            <div className={`grid grid-cols-${data?.content.length} gap-4`}>
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
