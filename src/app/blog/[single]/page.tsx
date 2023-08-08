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
import { useParams } from "next/navigation";
import { FaRegClock, FaRegFolder } from "react-icons/fa/index.js";
import { useSelector } from "react-redux";
import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
import { company } from "@/feature/data/dataSlice";
const PostSingle = () => {
  const companyInfo = useSelector(company);
  const posts: any[] = companyInfo.data.value.companyNews;
  const curlanguage = useSelector(language);
  const params = useParams();
  const data = posts.filter((post) => post.id === params.single)[0];
  const post = data;
  const similarPosts = similerItems(data, posts, data.id!);
  return (
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
              {similarPosts.map((post) => (
                <div key={post.slug} className="lg:col-4">
                  <BlogCard data={post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostSingle;
