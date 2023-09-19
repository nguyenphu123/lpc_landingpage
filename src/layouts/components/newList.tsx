"use client";
import { useSelector } from "react-redux";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import { Grid } from "@mantine/core";
import { useEffect, useState } from "react";
import { loadNews } from "@/lib/loadData";
import dynamic from "next/dynamic";
import { useUrl } from "nextjs-current-url";
const NewITem = dynamic(() => import("./newItem"));
// posts will be populated at build time by getStaticProps()
export default function Blog() {
  const { href } = useUrl() ?? {};
  const curlanguage = useSelector((rootState) => language(rootState));
  // const newsCheck = await loadNews();

  let [newList, setNewList]: any = useState([]);
  const getDate = (createDate) => {
    let date = new Date(createDate);
    return date.getTime();
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
    <Grid className="w-3/4" justify="center" grow gutter="sm">
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
              <Grid.Col key={svc._id} md={4} lg={2.5}>
                <NewITem
                  src={svc.image}
                  title={
                    curlanguage.changeLanguage.value == "en"
                      ? svc.titleEn
                      : svc.title
                  }
                  id={svc._id}
                  i={i}
                />
              </Grid.Col>
            );
          },
        )}
    </Grid>
  );
}
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
