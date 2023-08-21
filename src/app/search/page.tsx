"use client"
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import { news } from "@/feature/data/newSlice";
import Search, { SearchItem } from "@/layouts/Search";
import SeoMeta from "@/partials/SeoMeta";
import { useSelector } from "react-redux";


const SearchPage = () => {
  const curlanguage = useSelector(language);
 
  const searchList: SearchItem[] = []
  return (
    <>
      <SeoMeta title={"Search"} />
      <Search searchList={searchList} />
    </>
  );
};

export default SearchPage;
