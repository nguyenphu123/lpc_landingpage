"use client";

import { language } from "@/feature/changeLanguage/changeLanguageSlice";

import similerItems from "@/lib/utils/similarItems";

import { useParams } from "next/navigation";

import { useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { useUrl } from "nextjs-current-url";
import { loadNews } from "@/lib/loadData";
import dynamic from "next/dynamic";
const BlogCard = dynamic(() => import("@/components/BlogCard"));
// const Share = dynamic(() => import("@/components/Share"));

const SimilarItem = ({ data }) => {
  const { href } = useUrl() ?? {};
  const curlanguage = useSelector((rootState) => language(rootState));
  const params: any = useParams();
  const [isBusy, setBusy] = useState(true);

  let [similarPosts, setSimilarPosts]: any = useState([]);

  useEffect(() => {
    // declare the data fetching function

    const fetchNew = async () => {
      if (Object.keys(data).length == 0) {
        const newsCheck = await loadNews(
          "",
          {
            _id: 1,
            title: 1,
            titleEn: 1,
            categories: 1,
            // content: 1,
            // contentEn: 1,
            date: 1,
            image: 1,
          },
          href,
        );

        setSimilarPosts((prev) => [
          ...prev,
          ...(data &&
            similerItems(
              data,
              newsCheck.news,
              newsCheck.news.filter((item) => item._id == params.single)[0],
            )),
        ]);

        setBusy(false);
      } else {
        const newsCheck = await loadNews(
          "",
          {
            _id: 1,
            title: 1,
            titleEn: 1,
            categories: 1,
            // content: 1,
            // contentEn: 1,
            date: 1,
            image: 1,
          },
          href,
        );

        setSimilarPosts(
          data &&
            similerItems(
              data,
              newsCheck.news,
              newsCheck.news.filter((item) => item._id == params.single)[0],
            ),
        );

        setBusy(false);
      }
    };

    // call the function

    fetchNew()
      // make sure to catch any error

      .catch(console.error);
  }, [isBusy]);

  return isBusy ? (
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
    <div className="row justify-center">
      {similarPosts.map((post) => (
        <div key={post._id} className="lg:col-4">
          <BlogCard data={post} />
        </div>
      ))}
    </div>
  );
};

export default SimilarItem;
