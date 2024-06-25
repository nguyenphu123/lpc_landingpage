"use client";
import { loadRecruitBanners } from "@/lib/loadData";
import { useEffect, useState } from "react";
import { useUrl } from "nextjs-current-url";
interface RecruitBanner {
  status: string;

  _id: string;

  title: string;

  description: string;
  numberOfRecruitment: string;
  salary: string;
}
export default function Recruitment() {
  const [recruitBannerData, setRecruitBannerData] = useState<RecruitBanner[]>(
    [],
  );
  const { href } = useUrl() ?? {};
  useEffect(() => {
    const fetchNew = async () => {
      if (recruitBannerData.length == 0) {
        const recruitBannersCheck = await loadRecruitBanners(href);

        setRecruitBannerData(recruitBannersCheck.RecruitBanner);
      } else {
      }
    };

    // call the function

    fetchNew()
      // make sure to catch any error

      .catch(console.error);
  }, []);
  return <></>;
}
