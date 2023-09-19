import React from "react";
import chartData from "../../config/chartData.json";
import { useSelector } from "react-redux";
import Image from "next/image";
import { language } from "../../feature/changeLanguage/changeLanguageSlice";
export default function ChartItem({ item, index }) {
  const curlanguage = useSelector((rootState) => language(rootState));

  return (
    <div
      key={index}
      className=" relative z-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 "
    >
      <div className="-mt-16 ml-10 rounded-full absolute w-28 h-28 inset-0 flex justify-center items-center z-10 bg-white">
        <div
          style={{ backgroundColor: item.background }}
          className="rounded-full absolute w-24 h-24   flex items-center justify-center font-bold text-white text-lg"
        >
          <div>{item.year}</div>
        </div>
      </div>
      <div
        style={{ backgroundColor: item.background }}
        className="w-48 h-60  content-center grid  "
      >
        <div>
          <Image
            src={"/images/logo.png"}
            width={175}
            height={80}
            alt={"alt"}
            priority
          />
          <div className=" flex items-center justify-center font-bold text-white text-lg">
            {item.revenue}
          </div>
          <div className=" flex items-center justify-center font-light text-white text-base">
            {curlanguage.changeLanguage.value == "en"
              ? "BILLION VND"
              : "TỶ ĐỒNG"}
          </div>
        </div>
      </div>
    </div>
  );
}
