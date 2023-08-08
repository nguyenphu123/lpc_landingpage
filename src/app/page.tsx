"use client";
import SeoMeta from "@/partials/SeoMeta";
import { motion } from "framer-motion";
import Image from "next/image";
import Carousel from "../layouts/components/carousel";
import { company } from "@/feature/data/dataSlice";
import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
import ServiceCard from "../layouts/components/ServiceCard";
import NewITem from "../layouts/components/newItem";
import Banner from "../layouts/components/banner";
import { Grid } from "@mantine/core";
import Link from "next/link";
import { useSelector } from "react-redux";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import "../styles/homepage.scss"
const Home = () => {
  const curlanguage = useSelector(language);
  const companyInfo = useSelector(company);
  const partnerList = companyInfo.data.value.partnerList;
  const customerList = companyInfo.data.value.customerList;
  const serviceList = companyInfo.data.value.product;
  const newList = companyInfo.data.value.companyNews;
  return (
    <div className="container-snap">
      <SeoMeta />
      <div
        className={`flex flex-col justify-between`}
        style={{ height: "95vh" }}
      >
        <Carousel loop>
          <div className="flex-[0_0_100%] md:flex-[0_0_100%]">
            <Banner />
          </div>
          <div className="flex-[0_0_100%] md:flex-[0_0_100%]">
            <Banner />
          </div>
        </Carousel>
      </div>

      <h2 className="text-center text-3xl font-semibold leading-8 text-gray-900 mt-3">
        {curlanguage.changeLanguage.value == "en"
          ? DataEn["service_title"].name
          : Data["service_title"].name}
      </h2>

      <Grid className="flex justify-center">
        {serviceList.map(
          (
            svc: {
              descriptionEn1: any;
              titleEn: any;
              id: any | null | undefined;
              image: any;
              title: any;
              description1: any;
              link: any;
            },
            i: any,
          ) => {
            return (
              <Grid.Col key={svc.id} md={6} lg={2}>
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
                  link={svc.link}
                  i={i}
                />
              </Grid.Col>
            );
          },
        )}
      </Grid>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-white py-5 sm:py-5 h-4/5">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <h2 className="text-center text-3xl font-semibold leading-8 text-gray-900 ">
              {curlanguage.changeLanguage.value == "en"
                ? DataEn["customer"].name
                : Data["customer"].name}
            </h2>
            <p>
              {curlanguage.changeLanguage.value == "en"
                ? DataEn["customer"].description
                : Data["customer"].description}
            </p>
            <div className="h-48 grid  content-center">
              <Carousel loop>
                {partnerList.map((img: { src: string; type: string }) => {
                  return (
                    <Image
                      key={img.src}
                      className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                      src={img.src + ""}
                      alt={img.type + ""}
                      width={158}
                      height={60}
                    />
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="bg-white py-5 sm:py-5">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <h2 className="text-center text-3xl font-semibold leading-8 text-gray-900">
              {curlanguage.changeLanguage.value == "en"
                ? DataEn["partner"].name
                : Data["partner"].name}
            </h2>
            <p>
              {curlanguage.changeLanguage.value == "en"
                ? DataEn["partner"].description
                : Data["partner"].description}
            </p>
            <div className="h-48 grid  content-center">
              <Carousel loop>
                {customerList.map((img: { src: string; type: string }) => {
                  return (
                    <Image
                      key={img.src}
                      className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                      src={img.src + ""}
                      alt={img.type + ""}
                      width={158}
                      height={48}
                    />
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </motion.div>

      <h2 className="text-center text-3xl font-semibold leading-8 text-gray-900">
        {curlanguage.changeLanguage.value == "en"
          ? DataEn["news"].name
          : Data["news"].name}
      </h2>
      <Link href={"/blog"} className="float-right mr-14">
        {" "}
        {curlanguage.changeLanguage.value == "en"
          ? DataEn["text1"].name
          : Data["text1"].name}{" "}
        &rarr;
      </Link>
      <hr className="w-4/5 h-px mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

      <Grid className="flex justify-center">
        {newList.map(
          (
            svc: {
              titleEn: any;
              image: any;
              title: any;
              id: any;
            },
            i: any,
          ) => {
            return (
              <Grid.Col key={svc.id} md={4} lg={2.5}>
                <NewITem
                  src={svc.image}
                  title={
                    curlanguage.changeLanguage.value == "en"
                      ? svc.titleEn
                      : svc.title
                  }
                  id={svc.id}
                  i={i}
                />
              </Grid.Col>
            );
          },
        )}
      </Grid>
    </div>
  );
};

export default Home;
