"use client";
import Link from "next/link";
import "../../styles/card.scss";
import { useSelector } from "react-redux";
import { language } from "@/feature/changeLanguage/changeLanguageSlice";
import Data from "@/config/data.json";
import DataEn from "@/config/dataEn.json";
import Image from "next/image";
export default function ServiceCard({ src, title, description, link, i }: any) {
  const curlanguage = useSelector((rootState) => language(rootState));
  return (
    <div className="card-container">
      <div className="card-body">
        <div className="card-side side-back">
          <div className="container-fluid">
            <h2 className="text-center text-lg font-semibold leading-8 text-slate-50">
              {title}
            </h2>
            <div
              className="description"
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            ></div>
            <Link
              href={{
                pathname: `${link}`,
              }}
              className="float-right "
            >
              {curlanguage.changeLanguage.value == "en"
                ? DataEn["text1"].name
                : Data["text1"].name}{" "}
              &rarr;
            </Link>
          </div>
        </div>

        <div className="card-side side-front">
          <div className="container-fluid" style={{ height: "100%" }}>
            <div className="row " style={{ height: "100%" }}>
              <div className="relative col-xs-6" style={{ height: "100%" }}>
                <Image
                  width={300}
                  height={300}
                  loading="lazy"
                  objectFit="cover"
                  className="card-img bg-cover bg-center bg-no-repeat"
                  src={src}
                  alt=""
                />
                <div className="centered-title">{title}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
