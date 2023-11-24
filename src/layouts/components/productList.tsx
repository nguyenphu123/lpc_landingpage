"use client";
import { useSelector } from "react-redux";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import { SimpleGrid } from "@mantine/core";
import { memo, useEffect, useState } from "react";
import { loadProduct } from "@/lib/loadData";
import ServiceCard from "./ServiceCard";
import { useUrl } from "nextjs-current-url";
import encryptId from "../../lib/utils/encrypt";
import languageChange from "@/models/language";
// posts will be populated at build time by getStaticProps()
function ProductList() {
  const { href } = useUrl() ?? {};
  const curlanguage = useSelector(
    (rootState: languageChange) => language(rootState).changeLanguage.value,
  );
  // const newsCheck = await loadNews();

  let [serviceList, setServiceList] = useState([]);
  const [width, setWidth]: any = useState(
    typeof window !== "undefined" && window.innerWidth,
  ); // default width, detect on server.
  const handleResize = () =>
    setWidth(typeof window !== "undefined" && window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);
  useEffect(() => {
    // declare the data fetching function
    const fetchNew = async () => {
      if (serviceList.length == 0) {
        const productCheck = await loadProduct(
          {
            title: 1,
            _id: 1,
            type: 1,
            titleEn: 1,
            image: 1,
            descriptionEn1: 1,
            description1: 1,
            status: 1,
          },
          href,
        );
        // dispatch(companyProduct(productCheck.products));
        setServiceList(
          productCheck.products.filter((item) => item.status == "Active"),
        );
      } else {
      }
    };
    // call the function
    fetchNew()
      // make sure to catch any error
      .catch(console.error);
  }, [serviceList]);
  return serviceList.length == 0 ? (
    <></>
  ) : (
    <div
      className={
        width > 1030
          ? "w-3/4 gap-4 grid grid-cols-4"
          : "w-3/4 gap-4 grid grid-cols-1"
      }
    >
      {serviceList.map(
        (
          svc: {
            status: string;
            type: any;
            descriptionEn1: any;
            titleEn: any;
            _id: any | null | undefined;
            image: any;
            title: any;
            description1: any;
            link: any;
          },
          i: any,
        ) => (
          <ServiceCard
            key={i}
            src={svc.image}
            title={curlanguage == "en" ? svc.titleEn : svc.title}
            description={
              curlanguage == "en" ? svc.descriptionEn1 : svc.description1
            }
            link={
              svc.type == "Solution"
                ? `/${svc.type}/${encryptId(svc._id)}`
                : `/${svc.type}`
            }
            i={i}
          />
        ),
      )}
    </div>
  );
}
export default memo(ProductList);
