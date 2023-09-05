"use client";
import dateFormat from "@/lib/utils/dateFormat";
import { humanize, plainify, slugify } from "@/lib/utils/textConverter";
import { Post } from "@/types";
import Link from "next/link";
import { FaRegFolder } from "react-icons/fa/index.js";
import ImageFallback from "../helpers/ImageFallback";
import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
import { useSelector } from "react-redux";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import encryptId from "@/lib/utils/encrypt";
const BlogCard = ({ data }: { data: Post }) => {
  const curlanguage = useSelector((rootState) => language(rootState));
  return (
    <div className="bg-body dark:bg-darkmode-body">
      {data.image && (
        <ImageFallback
          className="mb-6 w-full rounded"
          src={data.image}
          alt={data.title}
          width={445}
          height={230}
        />
      )}
      <h4 className="mb-3">
        <Link href={`/blog/${encryptId(data._id)}`}>
          {curlanguage.changeLanguage.value == "en" ? data.titleEn : data.title}
        </Link>
      </h4>
      <ul className="mb-4">
        <li className="mr-4 inline-block">
          <FaRegFolder className={"-mt-1 mr-2 inline-block"} />
          {data.categories?.map((category: string, index: number) => (
            <Link key={index} href={`/categories/${slugify(category)}`}>
              {humanize(category)}
              {index !== data.categories.length - 1 && ", "}
            </Link>
          ))}
        </li>
        {data.date && <li className="inline-block">{dateFormat(data.date)}</li>}
      </ul>
      {/* <p
        className="mb-6"
        dangerouslySetInnerHTML={{
          __html: plainify(
            curlanguage.changeLanguage.value == "en"
              ? data.contentEn!
              : data.content!,
          ).slice(0, Number(200)),
        }}
      ></p> */}
      <Link
        className="btn btn-outline-primary btn-sm"
        href={`/blog/${encryptId(data._id)}`}
      >
        {curlanguage.changeLanguage.value == "en"
          ? DataEn["text2"].name
          : Data["text2"].name}
      </Link>
    </div>
  );
};

export default BlogCard;
