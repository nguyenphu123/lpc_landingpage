"use client";
import BlogCard from "@/components/BlogCard";
import { companyNew, news } from "@/feature/data/newSlice";
import { loadNews } from "@/lib/loadData";
import { humanize } from "@/lib/utils/textConverter";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { Post } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// remove dynamicParams
export const dynamicParams = false;

// generate static params

const CategorySingle = () => {
  const newInfo = useSelector((rootState) => news(rootState));
  let posts: any[] = newInfo.newData.value.companyNews;
  const params: any = useParams();
  let [filterByCategories, setFilterByCategories]: any[] = useState(
    posts != undefined
      ? posts.filter((product) =>
          product.categories.some((item: string) => item === params.single),
        )
      : [],
  );
  const dispatch = useDispatch();
  useEffect(() => {
    // declare the data fetching function
    const fetchNew = async () => {
      if (filterByCategories.length == 0) {
        const newsCheck = await loadNews("");
        dispatch(companyNew(newsCheck));

        posts = newsCheck.news;

        setFilterByCategories(
          posts.filter((product) =>
            product.categories.some((item: string) => item === params.single),
          ),
        );
      } else {
        setFilterByCategories(
          posts.filter((product) =>
            product.categories.some((item: string) => item === params.single),
          ),
        );
      }
    };
    // call the function
    fetchNew()
      // make sure to catch any error
      .catch(console.error);
  }, [setFilterByCategories]);

  return filterByCategories.length == 0 ? (
    <></>
  ) : (
    <>
      <SeoMeta title={humanize(params.single)} />
      <PageHeader title={humanize(params.single)} />
      <div className="section-sm pb-0">
        <div className="container">
          <div className="row">
            {filterByCategories.map((post: Post, index: number) => (
              <div className="mb-14 md:col-6 lg:col-4" key={index}>
                <BlogCard data={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorySingle;
