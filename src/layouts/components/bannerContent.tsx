import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import { useSelector } from "react-redux";
export default function BannerContent({ banner }) {
  const curlanguage = useSelector((rootState) => language(rootState));
  return (
    <div className="relative w-3xl whitespace-normal mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-5 containerbanner">
      <div
        className=" whitespace-normal ltr:sm:text-left rtl:sm:text-right"
        style={{
          maxWidth:
            curlanguage.changeLanguage.value == "en" ? "550px" : "600px",
        }}
      >
        <h1 className="text-3xl whitespace-normal font-extrabold sm:text-3xl">
          {curlanguage.changeLanguage.value == "en"
            ? banner.titleEn
            : banner.title}
        </h1>

        <p className="mt-4 whitespace-normal max-w-lg sm:text-xl/relaxed">
          {curlanguage.changeLanguage.value == "en"
            ? banner.contentEn
            : banner.content}
        </p>

        <div className="mt-8 whitespace-normal flex flex-wrap gap-4 text-center">
          <a
            href="/Solution"
            className="block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          >
            {curlanguage.changeLanguage.value == "en"
              ? DataEn["bannertext1"].name
              : Data["bannertext1"].name}
          </a>

          <a
            href="/contact"
            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-600 shadow hover:blue-rose-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
          >
            {curlanguage.changeLanguage.value == "en"
              ? DataEn["bannertext2"].name
              : Data["bannertext2"].name}
          </a>
        </div>
      </div>
    </div>
  );
}
