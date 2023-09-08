"use client";
import { useEffect, useState } from "react";
import BannerContent from "./bannerContent";
import { loadBanner } from "@/lib/loadData";
import Image from "next/image";
import "@/styles/main.scss";
import { useUrl } from "nextjs-current-url";
const delay = 5000;
const Banner = () => {
  const { href } = useUrl() ?? {};
  const [banners, setBanners] = useState<any[]>([]);
  const [index, setIndex] = useState(0);
  const timeoutRef: any = useState(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

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
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === banners.length - 1 ? 0 : prevIndex + 1,
        ),
      delay,
    );

    return () => {
      resetTimeout();
    };
  }, [index, banners]);
  return banners.length == 0 ? (
    <></>
  ) : (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {banners.map((banner) =>
          banner.status != "Active" ? (
            <></>
          ) : (
            <div key={banner._id} className="slide">
              <Image
                fill
                className={`bg-cover bg-center bg-no-repeat `}
                src={`${banner.image}`}
                alt={""}
                priority
              />
              <BannerContent banner={banner} />
            </div>
          ),
        )}
      </div>
    </div>
  );
};
export default Banner;
