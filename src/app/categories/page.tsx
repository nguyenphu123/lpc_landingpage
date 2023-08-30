"use client";
import { companyNew, news } from "@/feature/data/newSlice";
import { loadNews } from "@/lib/loadData";
import { humanize } from "@/lib/utils/textConverter";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useUrl } from "nextjs-current-url";
const Categories = () => {
  const { href } = useUrl() ?? {};
  const newInfo = useSelector((rootState) => news(rootState));
  let posts: any[] = newInfo.newData.value.companyNews;

  const categories = ["Events", "Security"];
  const dispatch = useDispatch();
  useEffect(() => {
    // declare the data fetching function
    const fetchNew = async () => {
      if (posts.length == 0) {
        const newsCheck = await loadNews(
          "",
          {
            _id: 1,
            title: 1,
            titleEn: 1,
            image: 1,
            categories: 1,
            description: 1,
            meta_title: 1,
            content: 1,
            contentEn: 1,
            date: 1,
          },
          href,
        );
        dispatch(companyNew(newsCheck));
        posts = newsCheck.news;
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
      <SeoMeta title={"Categories"} />
      <PageHeader title={"Categories"} />
      <section className="section">
        <div className="container text-center">
          <ul>
            {categories.map((category: string) => {
              const count = posts.filter((c: any) =>
                c.categories.some((item: string) => item === category),
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
