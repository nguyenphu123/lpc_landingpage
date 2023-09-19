import React, { useEffect, useState } from "react";
import chartData from "../../config/chartData.json";
import { useSelector } from "react-redux";
import ChartItem from "./chartItem";
import { language } from "../../feature/changeLanguage/changeLanguageSlice";

export default function Chart({}) {
  const curlanguage = useSelector((rootState) => language(rootState));
  let data = chartData.data;
  // get current path
  const [width, setWidth] = useState(
    typeof window !== "undefined" && window.innerWidth,
  ); // default width, detect on server.
  const handleResize = () =>
    setWidth(typeof window !== "undefined" && window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <div className=" flex justify-center items-center  ">
      <div
        className={`lg:grid lg:grid-cols-5 lg:gap-2  ${
          width < 1030 ? "space-y-7 mt-20" : "mt-40"
        } `}
      >
        {data.map((item, index) => (
          <ChartItem key={index} index={index} item={item} />
        ))}
      </div>
    </div>
  );
}
