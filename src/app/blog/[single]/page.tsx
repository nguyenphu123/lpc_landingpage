"use client";

import { language } from "@/feature/changeLanguage/changeLanguageSlice";

import dateFormat from "@/lib/utils/dateFormat";

import Link from "next/link";

import { useRouter, useParams } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";

import Data from "@/config/data.json";

import DataEn from "@/config/dataEn.json";

import { useEffect, useState } from "react";
import { useUrl } from "nextjs-current-url";
import { loadNew } from "@/lib/loadData";
import dynamic from "next/dynamic";
import SimilarItem from "@/components/similarItem";

const SeoMeta = dynamic(() => import("@/partials/SeoMeta"));
const PostSingle = () => {
  const { href } = useUrl() ?? {};
  const curlanguage = useSelector((rootState) => language(rootState));
  const params: any = useParams();
  const [isBusy, setBusy] = useState(true);
  let [data, setData]: any = useState({});

  const router = useRouter();

  useEffect(() => {
    // declare the data fetching function

    const fetchNew = async () => {
      if (Object.keys(data).length == 0) {
        const newCheck = await loadNew(
          "",
          {
            _id: 1,
            title: 1,
            titleEn: 1,
            categories: 1,
            content: 1,
            contentEn: 1,
            date: 1,
            image: 1,
          },
          href,
          params.single,
        );
        if (newCheck.news.length == 0) {
          router.replace("/");
        }
        setData(newCheck.news[0]);

        setBusy(false);
      } else {
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

            <SimilarItem data={data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default PostSingle;
