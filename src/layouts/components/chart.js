import React from "react";
import chartData from "../../config/chartData.json";
import { useSelector } from "react-redux";
import ChartItem from "./chartItem";
import { language } from "../../feature/changeLanguage/changeLanguageSlice";
export default function Chart({}) {
  const curlanguage = useSelector((rootState) => language(rootState));
  let data = chartData.data;

  return (
    <div className=" flex justify-center items-center  ">
      <div className=" grid grid-cols-5 gap-2 mt-40">
        {data.map((item, index) => (
          <ChartItem key={index} index={index} item={item} />
        ))}
      </div>
    </div>
  );
}
