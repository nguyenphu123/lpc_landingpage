"use client"
import BlogCard from "@/components/BlogCard";
import config from "@/config/config.json";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import { company } from "@/feature/data/dataSlice";
import { getTaxonomy } from "@/lib/taxonomyParser";
import { humanize } from "@/lib/utils/textConverter";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { Post } from "@/types";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";



// remove dynamicParams
export const dynamicParams = false;

// generate static params

const CategorySingle = () => {
  const curlanguage = useSelector(language);
  const companyInfo = useSelector(company);
  const posts: any[] = companyInfo.data.value.companyNews
  const params : any = useParams() 
  const filterByCategories =  posts.filter((product) => product.categories.some((item: string) => item === params.single));
  console.log(params.single)
  return (
    <>
      <SeoMeta title={humanize(params.single)} />
      <PageHeader title={humanize(params.single)} />
      <div className="section-sm pb-0">
        <div className="container">
          <div className="row">
            {filterByCategories.map((post: Post, index: number) => (
              <div className="mb-14 md:col-6 lg:col-4" key={index}>
                <BlogCard data={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorySingle;
