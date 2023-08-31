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
