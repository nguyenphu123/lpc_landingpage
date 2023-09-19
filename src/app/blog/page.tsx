"use client";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
import PageHeader from "@/partials/PageHeader";
import PostSidebar from "@/partials/PostSidebar";
import { Pagination } from "@mantine/core";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loadNews } from "@/lib/loadData";
import dynamic from "next/dynamic";
import { useUrl } from "nextjs-current-url";
const BlogCard = dynamic(() => import("@/components/BlogCard"));

const SeoMeta = dynamic(() => import("@/partials/SeoMeta"));
// for all regular pages
const Posts = () => {
  const { href } = useUrl() ?? {};
  const curlanguage = useSelector((rootState) => language(rootState));
  const [activePage, setPage] = useState(1);
  const [newList, setNewList] = useState([]);
  const [showList, setShowList] = useState([]);
  const onpageChange = (page) => {
    setPage(page);
    const startIndex = (page - 1) * 4;
    setShowList(newList.slice(startIndex, startIndex + 4));
  };

  useEffect(() => {
    // declare the data fetching function
    const fetchNew = async () => {
      if (newList.length == 0) {
        const newsCheck = await loadNews(
          "",
          {
            _id: 1,
            title: 1,
            titleEn: 1,
            image: 1,
            categories: 1,
            // content: 1,
            // contentEn: 1,
            date: 1,
          },
          href,
        );
        setNewList(newsCheck.news.reverse());
        const startIndex = (activePage - 1) * 4;
        setShowList(newsCheck.news.slice(startIndex, startIndex + 4));
      } else {
      }
    };
    // call the function
    fetchNew()
      // make sure to catch any error
      .catch(console.error);
  }, [showList]);

  const metadata = {
    title: "Tin tức",
    meta_title: "",
    description: "this is meta description",
    image: "",
  };
  const categories = ["Events", "Security"];
  const getDate = (createDate) => {
    let date = new Date(createDate);
    return date.getTime();
  };
  return newList.length == 0 ? (
    <section className="section pt-7">
      <div className="container">
        <div className="row justify-center">
          <article className="lg:col-10">
            <div style={{ margin: "200px" }}></div>
            <div className="text-center">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  ) : (
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
                {showList.map((post: any, index: number) => (
                  <div key={index} className="mb-14 md:col-6">
                    <BlogCard data={post} />
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center ">
                <div className=" w-fit ">
                  {newList.length > 4 ? (
                    <Pagination
                      align="content-center"
                      value={activePage}
                      onChange={(page) => onpageChange(page)}
                      total={Math.ceil(newList.length / 4)}
                      withEdges
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>

            <PostSidebar categories={categories} allCategories={showList} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
