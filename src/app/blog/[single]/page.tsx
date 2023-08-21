"use client";
import BlogCard from "@/components/BlogCard";
import Share from "@/components/Share";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import ImageFallback from "@/helpers/ImageFallback";
import dateFormat from "@/lib/utils/dateFormat";
import similerItems from "@/lib/utils/similarItems";
import { humanize, markdownify, slugify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import Link from "next/link";
import { notFound, useRouter, useParams } from "next/navigation";
import { FaRegClock, FaRegFolder } from "react-icons/fa/index.js";
import { useDispatch, useSelector } from "react-redux";
import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
import { companyNew, news } from "@/feature/data/newSlice";
import { useEffect, useState } from "react";
import { loadViaId, loadNews } from "@/lib/loadData";

const PostSingle = () => {
  const newInfo = useSelector((rootState) => news(rootState));
  const posts: any[] = newInfo.newData.value.companyNews;
  const curlanguage = useSelector((rootState) => language(rootState));
  const params: any = useParams();
  let [data, setData] = useState(
    posts.filter((post) => post._id === params.single)[0],
  );
  const post = data;
  let [similarPosts, setSimilarPosts] = useState(
    data && similerItems(data, posts, data._id!),
  );
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    // declare the data fetching function
    const fetchNew = async () => {
      if (data == undefined) {
        if (
          JSON.parse(window.localStorage.getItem("newList") || "[]").filter(
            (post) => post._id === params.single,
          )[0] == undefined
        ) {
          const newCheck = await loadViaId(params.single,"New");
          setData(newCheck.data);
          const newsCheck = await loadNews("");
          if (data == undefined) {
            router.replace("http://localhost:3000/");
          }
          dispatch(companyNew(newsCheck));
          setSimilarPosts(data && similerItems(data, newsCheck, data._id!));
        } else {
          setData(
            JSON.parse(window.localStorage.getItem("newList") || "[]").filter(
              (post) => post._id === params.single,
            )[0],
          );

          setSimilarPosts(
            data &&
              similerItems(
                data,
                JSON.parse(window.localStorage.getItem("newList") || "[]"),
                data._id!,
              ),
          );
          if (data == undefined) {
            router.replace("http://localhost:3000/");
          }
        }
      } else {
        if (data == undefined) {
          router.replace("http://localhost:3000/");
        }
        setSimilarPosts(
          data &&
            similerItems(
              data,
              posts.length == 0
                ? JSON.parse(window.localStorage.getItem("newList") || "[]")
                : posts,
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
    data && (
      <>
        <SeoMeta
          title={data.title}
          meta_title={data.meta_title}
          description={data.description}
          image={data.image}
        />
        <section className="section pt-7">
          <div className="container">
            <div className="row justify-center">
              <article className="lg:col-10">
                {data.image && (
                  <div className="mb-10">
                    <ImageFallback
                      src={data.image}
                      height={500}
                      width={1200}
                      alt={data.title}
                      className="w-full rounded"
                    />
                  </div>
                )}
                <h1
                  dangerouslySetInnerHTML={markdownify(
                    curlanguage.changeLanguage.value == "en"
                      ? data.titleEn
                      : data.title,
                  )}
                  className="h2 mb-4"
                />
                <ul className="mb-4">
                  <li className="mr-4 inline-block">
                    <FaRegFolder className={"-mt-1 mr-2 inline-block"} />
                    {data.categories?.map((category: string, index: number) => (
                      <Link
                        key={category}
                        href={`/categories/${slugify(category)}`}
                      >
                        {humanize(category)}
                        {index !== data.categories.length - 1 && ", "}
                      </Link>
                    ))}
                  </li>
                  {data.date && (
                    <li className="mr-4 inline-block">
                      <FaRegClock className="-mt-1 mr-2 inline-block" />
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
                  <div className="mb-10 flex items-center lg:col-5 lg:mb-0">
                    <h5 className="mr-3">
                      {curlanguage.changeLanguage.value == "en"
                        ? DataEn["text5"].name
                        : Data["text5"].name}
                    </h5>
                    <ul>
                      {data.tags?.map((tag: string) => (
                        <li key={tag} className="inline-block">
                          <Link
                            className="m-1 block rounded bg-theme-light px-3 py-1 hover:bg-primary hover:text-white dark:bg-darkmode-theme-light dark:hover:bg-darkmode-primary dark:hover:text-dark"
                            href={`/tags/${slugify(tag)}`}
                          >
                            {humanize(tag)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center lg:col-4">
                    <h5 className="mr-3">
                      {curlanguage.changeLanguage.value == "en"
                        ? DataEn["text6"].name
                        : Data["text6"].name}{" "}
                      :
                    </h5>
                    <Share
                      className="social-icons"
                      title={
                        curlanguage.changeLanguage.value == "en"
                          ? data.titleEn
                          : data.title
                      }
                      description={data.description}
                      slug={post.slug!}
                    />
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
