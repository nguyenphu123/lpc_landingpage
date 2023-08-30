"use client";

import Search, { SearchItem } from "@/layouts/Search";
import dynamic from "next/dynamic";
const SeoMeta = dynamic(() => import("@/partials/SeoMeta"));

const SearchPage = () => {
  const searchList: SearchItem[] = [];
  return (
    <>
      <SeoMeta title={"Search"} />
      <Search searchList={searchList} />
    </>
  );
};

export default SearchPage;
