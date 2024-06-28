"use client";
import { loadRecruitBanners } from "@/lib/loadData";
import { useEffect, useState } from "react";
import { useUrl } from "nextjs-current-url";
import { useSelector } from "react-redux";
import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import PageHeader from "@/partials/PageHeader";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useSearchParams, useParams } from "next/navigation";
const SeoMeta = dynamic(() => import("@/partials/SeoMeta"));
interface RecruitBanner {
  status: string;

  _id: string;

  title: string;

  description: string;
  numberOfRecruitment: string;
  salary: string;
}

export default function RecruitmentDetail() {
  const [recruitBannerData, setRecruitBannerData] = useState<RecruitBanner[]>(
    [],
  );
  const [recruitBannerDetail, setRecruitBannerDetail]: any = useState();
  const [isMounted, setIsMounted] = useState(false);
  const searchParams = useParams();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // page metadata
  const data = {
    title: "Recruitment",
    meta_title: "",
    description: "this is meta description",
    image: "",
  };

  // language
  const curlanguage = useSelector((rootState: any) => language(rootState));
  const { href } = useUrl() ?? {};
  useEffect(() => {
    const fetchNew = async () => {
      if (recruitBannerData.length == 0) {
        const recruitBannersCheck = await loadRecruitBanners(href);
        let indexOf = recruitBannersCheck.recruitBanners
          .map((item) => item._id)
          .indexOf(searchParams.id);
        setRecruitBannerDetail(recruitBannersCheck.recruitBanners[indexOf]);
        setRecruitBannerData(recruitBannersCheck.recruitBanners.splice(indexOf, 1));
      } else {
      }
    };

    // call the function

    fetchNew()
      // make sure to catch any error

      .catch(console.error);
  }, []);
  console.log(recruitBannerDetail);
  return (
    <>
      <SeoMeta
        title={data.title}
        meta_title={data.meta_title}
        description={data.description}
        image={data.image}
      />
      <PageHeader
        title={
          curlanguage.changeLanguage.value === "en"
            ? "Recruitment detail"
            : "Chi tiết"
        }
      />

      <div>
        <div>
          {recruitBannerDetail != null || recruitBannerDetail != undefined ? (
            <>
              {curlanguage.changeLanguage.value === "en"
                ? recruitBannerDetail.titleEn
                : recruitBannerDetail.title}
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    curlanguage.changeLanguage.value === "en"
                      ? recruitBannerDetail.descriptionEn
                      : recruitBannerDetail.description,
                }}
              ></div>
            </>
          ) : (
            <></>
          )}
        </div>

        {/* Job Hot Title */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-center">Công việc khác</h2>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {recruitBannerData.map((job: any) => {
            return (
              <div
                key={job._id}
                className="flex flex-col border rounded-lg p-4 shadow-lg"
              >
                <img
                  src={"/images/devops-engineer.jpg"}
                  alt={job.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-xl font-bold mt-4">{job.title}</h3>
                <p>Số lượng: {job.quantity}</p>
                <p>Vị trí: {job.location}</p>
                <p>Lương: {job.salary}</p>
                <Link
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                  href={`/recruitment/${job._id}`}
                >
                  {curlanguage.changeLanguage.value === "en"
                    ? "Details"
                    : "Xem chi tiết"}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
