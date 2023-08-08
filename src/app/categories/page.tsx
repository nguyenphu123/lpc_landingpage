"use client"
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import { company } from "@/feature/data/dataSlice";
import { humanize } from "@/lib/utils/textConverter";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import Link from "next/link";
import { useSelector } from "react-redux";

const Categories = () => {
  const curlanguage = useSelector(language);
  const companyInfo = useSelector(company);
  const posts: any[] = companyInfo.data.value.companyNews
 
  const categories = ["Events", "Security"];
 

  return (
    <>
      <SeoMeta title={"Categories"} />
      <PageHeader title={"Categories"} />
      <section className="section">
        <div className="container text-center">
          <ul>
            {categories.map((category: string) => {
              const count = posts.filter(
                (c : any) => c.categories.some((item: string) =>item === category) 
              ).length;
              return (
                <li className="m-3 inline-block" key={category}>
                  <Link
                    href={`/categories/${category}`}
                    className="block rounded bg-theme-light px-4 py-2 text-xl text-dark dark:bg-darkmode-theme-light dark:text-darkmode-dark"
                  >
                    {humanize(category)}{" "}
                    <span className="ml-2 rounded bg-body px-2 dark:bg-darkmode-body">
                      {count}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Categories;
