"use client";
import { useSelector } from "react-redux";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import { Grid } from "@mantine/core";
import { useEffect, useState } from "react";
import { loadProduct } from "@/lib/loadData";
import { product } from "@/feature/data/productSlice";
import ServiceCard from "./ServiceCard";
import { useUrl } from "nextjs-current-url";
import encryptId from "../../lib/utils/encrypt";
// posts will be populated at build time by getStaticProps()
export default function ProductList() {
  const { href } = useUrl() ?? {};
  const curlanguage = useSelector((rootState) => language(rootState));
  // const newsCheck = await loadNews();
  const productInfo = useSelector((rootState) => product(rootState));
  let keyUtf8 = "";
  let [serviceList, setServiceList] = useState(
    productInfo.productData.value.product,
  );

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
          },
          href,
        );
        // dispatch(companyProduct(productCheck.products));
        setServiceList(productCheck.products);
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
    <Grid className="w-3/4" justify="center" grow gutter="xs">
      {serviceList.map(
        (
          svc: {
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
        ) => {
          return (
            <Grid.Col key={svc._id} md={6} lg={2}>
              <ServiceCard
                src={svc.image}
                title={
                  curlanguage.changeLanguage.value == "en"
                    ? svc.titleEn
                    : svc.title
                }
                description={
                  curlanguage.changeLanguage.value == "en"
                    ? svc.descriptionEn1
                    : svc.description1
                }
                link={
                  svc.type == "Solution"
                    ? `/${svc.type}/${encryptId(svc._id)}`
                    : `/${svc.type}`
                }
                i={i}
              />
            </Grid.Col>
          );
        },
      )}
    </Grid>
  );
}
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
