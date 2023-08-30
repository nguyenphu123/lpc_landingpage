"use client";

import Search, { SearchItem } from "@/layouts/Search";
import SeoMeta from "@/partials/SeoMeta";

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
