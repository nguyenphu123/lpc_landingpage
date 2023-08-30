"use client";

import { language } from "@/feature/changeLanguage/changeLanguageSlice";

import dateFormat from "@/lib/utils/dateFormat";

import similerItems from "@/lib/utils/similarItems";

import Link from "next/link";

import { useRouter, useParams } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";

import Data from "@/config/data.json";

import DataEn from "@/config/dataEn.json";

import { companyNew, news } from "@/feature/data/newSlice";

import { useEffect, useState } from "react";
import { useUrl } from "nextjs-current-url";
import { loadNews } from "@/lib/loadData";
import dynamic from "next/dynamic";
const BlogCard = dynamic(() => import("@/components/BlogCard"));
// const Share = dynamic(() => import("@/components/Share"));
const SeoMeta = dynamic(() => import("@/partials/SeoMeta"));
const PostSingle = () => {
  const { href } = useUrl() ?? {};
  const newInfo = useSelector((rootState) => news(rootState));

  const posts: any[] = newInfo.newData.value.companyNews;

  const curlanguage = useSelector((rootState) => language(rootState));

  const params: any = useParams();

  let [data, setData] = useState(
    posts.filter((post) => post._id === params.single)[0] || {},
  );

  let [similarPosts, setSimilarPosts] = useState(
    (Object.keys(data).length != 0 && similerItems(data, posts, data._id!)) ||
      [],
  );

  const dispatch = useDispatch();

  const router = useRouter();

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
            image: 1,
            categories: 1,

            content: 1,
            contentEn: 1,
            date: 1,
          },
          href,
        );

        if (newsCheck.news.length == 0) {
          router.replace("http://localhost:3000/");
        }
        setData(newsCheck.news.filter((item) => item._id == params.single)[0]);
        setSimilarPosts(data && similerItems(data, newsCheck.news, data._id!));
        dispatch(companyNew(newsCheck));
      } else {
        if (Object.keys(data).length == 0) {
          router.replace("http://localhost:3000/");
        }

        setSimilarPosts(
          data &&
            similerItems(
              data,

              posts,

              data._id!,
            ),
        );
      }
    };

    // call the function

    fetchNew()
      // make sure to catch any error

      .catch(console.error);
  }, [data]);

  return (
    Object.keys(data).length != 0 && (
      <>
        <SeoMeta
          title={data.title}
          meta_title={""}
          description={""}
          image={data.image}
        />

        <section className="section pt-7">
          <div className="container">
            <div className="row justify-center">
              <article className="lg:col-10">
                <div style={{ margin: "200px" }}></div>

                <h1
                  dangerouslySetInnerHTML={{
                    __html:
                      curlanguage.changeLanguage.value == "en"
                        ? data.titleEn
                        : data.title,
                  }}
                  className="h3 mb-4"
                />

                <ul className="mb-4">
                  <li className="mr-4 inline-block">
                    {/* <FaRegFolder className={"-mt-1 mr-2 inline-block"} /> */}

                    {data.categories?.map((category: string, index: number) => (
                      <Link key={category} href={`/categories/${category}`}>
                        {category}

                        {index !== data.categories.length - 1 && ", "}
                      </Link>
                    ))}
                  </li>

                  {data.date && (
                    <li className="mr-4 inline-block">
                      {/* <FaRegClock className="-mt-1 mr-2 inline-block" /> */}

                      {dateFormat(data.date)}
                    </li>
                  )}
                </ul>

                <div
                  className="content mb-10"
                  dangerouslySetInnerHTML={{
                    __html:
                      curlanguage.changeLanguage.value == "en"
                        ? data.contentEn
                        : data.content,
                  }}
                ></div>

                <div className="row items-start justify-between">
                  <div className="flex items-center lg:col-4">
                    <h5 className="mr-3">
                      {curlanguage.changeLanguage.value == "en"
                        ? DataEn["text6"].name
                        : Data["text6"].name}
                      :
                    </h5>

                    {/* <Share
                      className="social-icons"
                      title={
                        curlanguage.changeLanguage.value == "en"
                          ? data.titleEn
                          : data.title
                      }
                      description={""}
                      slug={post.slug!}
                    /> */}
                  </div>
                </div>

                {/* <Disqus className="mt-20" /> */}
              </article>
            </div>

            {/* <!-- Related posts --> */}

            <div className="section pb-0">
              <h2 className="h3 mb-12 text-center">
                {curlanguage.changeLanguage.value == "en"
                  ? DataEn["text7"].name
                  : Data["text7"].name}
              </h2>

              <div className="row justify-center">
                {similarPosts &&
                  similarPosts.map((post) => (
                    <div key={post.slug} className="lg:col-4">
                      <BlogCard data={post} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </>
    )
  );
};

export default PostSingle;
