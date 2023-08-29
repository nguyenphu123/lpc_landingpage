"use client";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import Link from "next/link";
import { useSelector } from "react-redux";
import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
import Image from "next/image";
export default function ProductCard({ title, content, id, link, srcImg }: any) {
  const curlanguage = useSelector((rootState) => language(rootState));
  return (
    <div
      key={id}
      className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <Image
        width={300}
        height={300}
        loading="lazy"
        objectFit="cover"
        className="rounded-t-lg"
        src={srcImg}
        alt=""
      />
      <span>
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </span>
      <p
        className="mb-3 font-normal text-gray-500 dark:text-gray-400"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></p>
      <Link
        href={{
          pathname: `${link}`,
        }}
        className="inline-flex items-center text-blue-600 hover:underline"
      >
        {curlanguage.changeLanguage.value == "en"
          ? DataEn["text1"].name
          : Data["text1"].name}
        <svg
          className="w-3 h-3 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
          />
        </svg>
      </Link>
    </div>
  );
}
