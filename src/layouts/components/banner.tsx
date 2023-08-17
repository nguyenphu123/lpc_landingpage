"use client";
import { useEffect, useState } from "react";
import BannerContent from "./bannerContent";
import Carousel from "./carousel";
import { loadBanner } from "@/lib/loadData";
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
        <div key={banner._id} className="flex-[0_0_100%] md:flex-[0_0_100%]">
          <section
            style={{
              width: "auto",
              height: "auto",
              backgroundImage: `url('${banner.image}')`,
            }}
            placeholder="blur"
            className={`relative bg-cover bg-center bg-no-repeat `}
          >
            <BannerContent banner={banner} />
          </section>
        </div>
      ))}
    </Carousel>
  );
};
export default Banner;
