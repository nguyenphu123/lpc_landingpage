import NewITem from "./newItem";
import { useDispatch, useSelector } from "react-redux";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import { Grid } from "@mantine/core";
import { companyNew, news } from "@/feature/data/newSlice";
import { useEffect } from "react";
import { loadNews } from "@/lib/loadData";
// posts will be populated at build time by getStaticProps()
export default function Blog() {
  const curlanguage = useSelector((rootState) => language(rootState));
  // const newsCheck = await loadNews();
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
  return (
    <Grid className="flex justify-center" justify="center">
      {newList.slice(0,4).map(
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
