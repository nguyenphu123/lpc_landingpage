"use client";
import { companyNew, news } from "@/feature/data/newSlice";
import { loadNews } from "@/lib/loadData";
import PageHeader from "@/partials/PageHeader";
import { Post } from "@/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";
import { useUrl } from "nextjs-current-url";
const BlogCard = dynamic(() => import("@/components/BlogCard"));
const SeoMeta = dynamic(() => import("@/partials/SeoMeta"));
const CategorySingle = () => {
  const { href } = useUrl() ?? {};
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
        posts = newsCheck.news;

        setFilterByCategories(
          posts.filter((product) =>
            product.categories.some((item: string) => item === params.single),
          ),
        );
        dispatch(companyNew(newsCheck));
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
      <SeoMeta title={params.single} />
      <PageHeader title={params.single} />
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
