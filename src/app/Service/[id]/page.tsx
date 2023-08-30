"use client";
const SeoMeta = dynamic(() => import("@/partials/SeoMeta"));
import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import { companyProduct, product } from "@/feature/data/productSlice";
import PageHeader from "@/partials/PageHeader";
import { useEffect, useState } from "react";
import { loadProduct } from "@/lib/loadData";
import "../../../styles/scroll.scss";
import { useUrl } from "nextjs-current-url";
import dynamic from "next/dynamic";
const RegularPages = () => {
  const { href } = useUrl() ?? {};
  const params: any = useParams();
  const productInfo = useSelector((rootState) => product(rootState));
  let products: any = [];
  const [data, setData]: any = useState({});
  products =
    productInfo.productData.value.product != undefined
      ? productInfo.productData.value.product.filter(
          (item: { type: string }) => item.type == "Service",
        )
      : [];

  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      if (products.length == 0) {
        const serviceCheck = await loadProduct(
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
        const result = serviceCheck.products.filter(
          (item: { type: string }) => item.type == "Service",
        );

        if (result.length == 0) {
          router.replace("http://localhost:3000/");
        }
        setData(
          result[0].content.filter(
            (item: { [x: string]: any; link: string; type: string }) =>
              params.id == item._id,
          )[0],
        );
        setIsLoading(false);
        dispatch(companyProduct(serviceCheck));
      } else {
        const service = products[0].content.filter(
          (item: { [x: string]: any; link: string; type: string }) =>
            params.id == item._id,
        );
        if (service.length == 0) {
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
  }, [data, isLoading]);
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
            ></div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default RegularPages;
