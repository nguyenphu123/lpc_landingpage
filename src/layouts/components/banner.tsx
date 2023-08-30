"use client";
import { useEffect, useState } from "react";
import BannerContent from "./bannerContent";

import { loadBanner } from "@/lib/loadData";
import Image from "next/image";
import "@/styles/main.scss";
import dynamic from "next/dynamic";
import { useUrl } from "nextjs-current-url";

const Carousel = dynamic(() => import("./carousel"));
const Banner = () => {
  const { pathname, href } = useUrl() ?? {};
  const [banners, setBanners] = useState<any[]>([]);
  useEffect(() => {
    // declare the data fetching function
    const fetchNew = async () => {
      if (banners.length == 0) {
        const bannerCheck = await loadBanner(href);
        setBanners(bannerCheck.banner);
      } else {
      }
    };
    // call the function
    fetchNew()
      // make sure to catch any error
      .catch(console.error);
  }, [banners]);
  return banners.length == 0 ? (
    <></>
  ) : (
    <Carousel loop>
      {banners.map((banner) => (
        <div
          key={banner._id}
          className="flex-[0_0_100%] md:flex-[0_0_100%] relative"
        >
          <Image
            fill
            className={`bg-cover bg-center bg-no-repeat`}
            src={`${banner.image}`}
            alt={""}
            priority
          />
          <BannerContent banner={banner} />
          {/* </Image> */}
        </div>
      ))}
    </Carousel>
  );
};
export default Banner;
