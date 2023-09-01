"use client";
import Fuse from "fuse.js";
import React, { Key, useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa/index.js";
import { useSelector } from "react-redux";
import { news } from "@/feature/data/newSlice";
import { Grid } from "@mantine/core";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import dynamic from "next/dynamic";
import { searchNews } from "@/lib/loadData";
import { useUrl } from "nextjs-current-url";
const ImageFallback = dynamic(() => import("./helpers/ImageFallback"));
const NewITem = dynamic(() => import("../layouts/components/newItem"));
export type SearchItem = {
  _id: any;
  title: any;
  image: React.JSX.Element;
  slug: string;
  frontmatter: any;
  content: any;
};

interface Props {
  searchList: SearchItem[];
}

interface SearchResult {
  _id: Key | null | undefined;
  image: any;
  titleEn: any;
  title: any;
  item: SearchItem;
  refIndex: number;
}

const Search = ({ searchList }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVal, setInputVal] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const newInfo = useSelector((rootState) => news(rootState));
  const { href } = useUrl() ?? {};
  const curlanguage = useSelector((rootState) => language(rootState));
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputVal(e.currentTarget.value);
  };
  const onSearch = async () => {
    const searchResult =  await searchNews(
     
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
     
    );
    setSearchResults(searchResult.news);
  };
  const fuse = new Fuse(searchList, {
    keys: ["frontmatter.title", "frontmatter.categories", "frontmatter.tags"],
    includeMatches: true,
    minMatchCharLength: 3,
    threshold: 0.5,
  });

  useEffect(() => {
    const searchUrl = new URLSearchParams(window.location.search);
    const searchStr = searchUrl.get("q");
    if (searchStr) setInputVal(searchStr);

    setTimeout(function () {
      inputRef.current!.selectionStart = inputRef.current!.selectionEnd =
        searchStr?.length || 0;
    }, 50);
  }, []);

  useEffect(() => {
    let inputResult: any = inputVal.length > 2 ? fuse.search(inputVal) : [];
    setSearchResults(inputResult);

    if (inputVal.length > 0) {
      const searchParams = new URLSearchParams(window.location.search);
      searchParams.set("q", inputVal);
      const newRelativePathQuery =
        window.location.pathname + "?" + searchParams.toString();
      history.pushState(null, "", newRelativePathQuery);
    } else {
      history.pushState(null, "", window.location.pathname);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputVal]);

  return (
    <section className="section-sm">
      <div className="container">
        <div className="row mb-10 justify-center">
          <div className="lg:col-8">
            <div className="flex flex-nowrap">
              <input
                className="form-input rounded-r-none"
                placeholder="Search posts"
                type="search"
                name="search"
                value={inputVal}
                onChange={handleChange}
                autoComplete="off"
                autoFocus
                ref={inputRef}
              />
              <button
                className="btn btn-primary rounded-l-none"
                onClick={(e) => onSearch()}
                type="submit"
              >
                <FaSearch />
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          {searchResults?.length < 1 ? (
            <div className="mx-auto pt-5 text-center">
              <ImageFallback
                className="mx-auto mb-6"
                src="/images/no-search-found.png"
                alt="no-search-found"
                width={211}
                height={184}
              />
              <h1 className="h2 mb-4">
                {inputVal.length < 1 ? "Search Post Here" : "No Search Found!"}
              </h1>
              <p>
                {inputVal.length < 1
                  ? "Search for posts by title."
                  : "We couldn't find what you searched for. Try searching again."}
              </p>
            </div>
          ) : (
            <Grid className="flex justify-center" justify="center">
              {searchResults.map((svc, i) => {
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
              })}
            </Grid>
          )}
        </div>
      </div>
    </section>
  );
};

export default Search;
