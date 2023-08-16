"use client";
import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
import PageHeader from "@/partials/PageHeader";
import PostSidebar from "@/partials/PostSidebar";
import SeoMeta from "@/partials/SeoMeta";
import { useDispatch, useSelector } from "react-redux";
import { companyNew, news } from "@/feature/data/newSlice";
import { useEffect } from "react";
import { loadNews } from "@/lib/loadData";
// for all regular pages
const Posts = () => {
  const curlanguage = useSelector((rootState) => language(rootState));
  const newInfo = useSelector((rootState) => news(rootState));

  const newList = newInfo.newData.value.companyNews;
  const dispatch = useDispatch();
  useEffect(() => {
    // declare the data fetching function
    const fetchNew = async () => {
      if (newList.length == 0) {
        const newsCheck = await loadNews("");
        dispatch(companyNew(newsCheck));
      } else {
      }
    };
    // call the function
    fetchNew()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  const posts: any[] = newInfo.newData.value.companyNews;
  const metadata = {
    title: "Sp1",
    meta_title: "",
    description: "this is meta description",
    image: "",
  };
  const categories = ["Events", "Security"];
  const tags = [
    "saasbox",
    "npm",
    "sass",
    "pug",
    "gulp",
    "css",
    "bootstrap",
    "html5",
    "jquery",
    "design",
  ];
  const totalPages = Math.ceil(posts.length / 2);

  return (
    <>
      <SeoMeta
        title={metadata.title}
        meta_title={metadata.meta_title}
        description={metadata.description}
        image={metadata.image}
      />
      <PageHeader
        title={
          curlanguage.changeLanguage.value == "en"
            ? DataEn["news"].name
            : Data["news"].name
        }
      />
      <section className="section">
        <div className="container">
          <div className="row gx-5">
            <div className="lg:col-8">
              <div className="row">
                {posts.map((post: any, index: number) => (
                  <div key={index} className="mb-14 md:col-6">
                    <BlogCard data={post} />
                  </div>
                ))}
              </div>
              <Pagination
                section={"blog"}
                currentPage={1}
                totalPages={totalPages}
              />
            </div>

            <PostSidebar
              categories={categories}
              tags={tags}
              allCategories={posts}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
