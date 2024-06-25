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

const SeoMeta = dynamic(() => import("@/partials/SeoMeta"));
interface RecruitBanner {
  status: string;

  _id: string;

  title: string;

  description: string;
  numberOfRecruitment: string;
  salary: string;
}
const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    quantity: 3,
    location: "Hồ Chí Minh",
    salary: "Thỏa thuận",
    image: "/images/frontend-developer.jpg",
    description: "Mô tả công việc cho vị trí Frontend Developer...",
  },
  {
    id: 2,
    title: "Backend Developer",
    quantity: 2,
    location: "Hồ Chí Minh",
    salary: "Thỏa thuận",
    image: "/images/backend-developer.jpg",
    description: "Mô tả công việc cho vị trí Backend Developer...",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    quantity: 1,
    location: "Hồ Chí Minh",
    salary: "Thỏa thuận",
    image: "/images/ui-ux-designer.jpg",
    description: "Mô tả công việc cho vị trí UI/UX Designer...",
  },
  {
    id: 4,
    title: "Mobile Developer",
    quantity: 2,
    location: "Hồ Chí Minh",
    salary: "Thỏa thuận",
    image: "/images/mobile-developer.jpg",
    description: "Mô tả công việc cho vị trí Mobile Developer...",
  },
  {
    id: 5,
    title: "Data Scientist",
    quantity: 1,
    location: "Hồ Chí Minh",
    salary: "Thỏa thuận",
    image: "/images/data-scientist.jpg",
    description: "Mô tả công việc cho vị trí Data Scientist...",
  },
  {
    id: 6,
    title: "DevOps Engineer",
    quantity: 1,
    location: "Hồ Chí Minh",
    salary: "Thỏa thuận",
    image: "/images/devops-engineer.jpg",
    description: "Mô tả công việc cho vị trí DevOps Engineer...",
  },
];
export default function Recruitment() {
  const [recruitBannerData, setRecruitBannerData] = useState<RecruitBanner[]>(
    [],
  );
  const [isMounted, setIsMounted] = useState(false);

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

        setRecruitBannerData(recruitBannersCheck.RecruitBanner);
      } else {
      }
    };

    // call the function

    fetchNew()
      // make sure to catch any error

      .catch(console.error);
  }, []);
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
            ? DataEn["recruitment"].name
            : Data["recruitment"].name
        }
      />
      <div>
        {/* Banner Tuyển Dụng */}
        <div className="bg-cover bg-center h-64 flex items-center justify-center bg-recruitment-banner">
          <h1 className="text-white text-4xl font-bold">Tuyển Dụng</h1>
        </div>

        {/* Job Hot Title */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-center">Công việc hot</h2>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {jobs.map((job: any) => {
            return (
              <div
                key={job.id}
                className="flex flex-col border rounded-lg p-4 shadow-lg"
              >
                <img
                  src={job.image}
                  alt={job.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-xl font-bold mt-4">{job.title}</h3>
                <p>Số lượng: {job.quantity}</p>
                <p>Vị trí: {job.location}</p>
                <p>Lương: {job.salary}</p>
                <Link href={`/recruitment/${job.id}`}>
                  <a className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                    {curlanguage.changeLanguage.value === "en"
                      ? "Details"
                      : "Xem chi tiết"}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
