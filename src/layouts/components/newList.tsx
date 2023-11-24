"use client";
import { useSelector } from "react-redux";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import { Grid } from "@mantine/core";
import { memo, useEffect, useState } from "react";
import { loadNews } from "@/lib/loadData";
import dynamic from "next/dynamic";
import { useUrl } from "nextjs-current-url";
import languageChange from "@/models/language";
const NewITem = dynamic(() => import("./newItem"));
// posts will be populated at build time by getStaticProps()
function Blog() {
  const { href } = useUrl() ?? {};
  const curlanguage = useSelector(
    (rootState: languageChange) => language(rootState).changeLanguage.value,
  );
  // const newsCheck = await loadNews();

  let [newList, setNewList]: any = useState([]);
  const [width, setWidth]: any = useState(
    typeof window !== "undefined" && window.innerWidth,
  ); // default width, detect on server.
  const handleResize = () =>
    setWidth(typeof window !== "undefined" && window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);
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
            date: 1,
          },
          href,
        );
        setNewList(newsCheck.news);
      } else {
      }
    };
    // call the function
    fetchNew()
      // make sure to catch any error
      .catch(console.error);
  }, [newList]);
  return newList.length == 0 ? (
    <></>
  ) : (
    <div
      className={
        width > 1030
          ? "w-3/4 gap-4 grid grid-cols-4"
          : "w-3/4 gap-4 grid grid-cols-1"
      }
    >
      {newList
        .reverse()
        .slice(0, 4)
        .map(
          (
            svc: {
              [x: string]: any;
              titleEn: any;
              image: any;
              title: any;
              id: any;
            },
            i: any,
          ) => {
            return (
              <NewITem
                key={i}
                src={svc.image}
                title={curlanguage == "en" ? svc.titleEn : svc.title}
                id={svc._id}
                i={i}
              />
            );
          },
        )}
    </div>
  );
}
export default memo(Blog);
