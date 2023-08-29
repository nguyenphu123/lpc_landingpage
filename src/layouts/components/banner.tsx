"use client";
import { useEffect, useState } from "react";
import BannerContent from "./bannerContent";
import Carousel from "./carousel";
import { loadBanner } from "@/lib/loadData";
import Image from "next/image";
import "@/styles/main.scss";
const Banner = () => {
  const [banners, setBanners] = useState<any[]>([]);
  useEffect(() => {
    // declare the data fetching function
    const fetchNew = async () => {
      if (banners.length == 0) {
        const bannerCheck = await loadBanner();
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
            style={{ objectFit: "cover" }}
            blurDataURL="blur"
            className={`bg-cover bg-center bg-no-repeat `}
            priority
            src={`${banner.image}`}
            alt={""}
          />
          <BannerContent banner={banner} />
          {/* </Image> */}
        </div>
      ))}
    </Carousel>
  );
};
export default Banner;
