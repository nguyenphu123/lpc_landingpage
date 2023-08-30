"use client";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import { humanize } from "@/lib/utils/textConverter";
import Link from "next/link";
import { useSelector } from "react-redux";
import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
const PostSidebar = ({
  categories,
  allCategories,
}: {
  categories: string[];
  allCategories: string[];
}) => {
  const curlanguage = useSelector(language);
  return (
    <div className="lg:col-4">
      {/* <!-- categories --> */}
      <div className="mb-8">
        <h5 className="mb-6">
          {curlanguage.changeLanguage.value == "en"
            ? DataEn["text4"].name
            : Data["text4"].name}
        </h5>
        <div className="rounded bg-theme-light p-8 dark:bg-darkmode-theme-light">
          <ul className="space-y-4">
            {categories.map((category) => {
              const count = allCategories.filter((c: any) =>
                c.categories.some((item: string) => item === category),
              ).length;
              return (
                <li key={category}>
                  <Link
                    className="flex justify-between hover:text-primary dark:hover:text-darkmode-primary"
                    href={`/categories/${category}`}
                  >
                    {humanize(category)} <span>({count})</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostSidebar;
