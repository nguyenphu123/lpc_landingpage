"use client";

import Image from "next/image";

import config from "@/config/config.json";

import menu from "@/config/menu.json";

import menuEn from "@/config/menuEn.json";

import { language } from "@/feature/changeLanguage/changeLanguageSlice";

import { loadContact } from "@/lib/loadData";

import { markdownify } from "@/lib/utils/textConverter";

import Link from "next/link";

import { memo, useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { useUrl } from "nextjs-current-url";
import languageChange from "@/models/language";
const Footer = () => {
  const { copyright } = config.params;

  const curlanguage = useSelector((rootState: languageChange) =>
    language(rootState),
  );

  const { footer } = curlanguage.changeLanguage.value == "en" ? menuEn : menu;

  const [companyLinks, setCompanyLinks]: any = useState({});

  const { href } = useUrl() ?? {};

  useEffect(() => {
    // declare the data fetching function

    async function fetchNew() {
      if (Object.keys(companyLinks).length == 0) {
        const companyCheck = await loadContact(href);

        setCompanyLinks(companyCheck.contact[0]);
      }
    }

    // call the function

    fetchNew()
      // make sure to catch any error

      .catch(console.error);
  }, [companyLinks]);

  return Object.keys(companyLinks).length == 0 ? (
    <></>
  ) : (
    <footer className="bg-theme-light dark:bg-darkmode-theme-light w-screen">
      <div className="container">
        <div className="row items-center py-2">
          <div className="w-fit max-w-screen-xl content-end">
            <div className="grid grid-cols-12 gap-5 px-4 py-6 lg:py-8 md:grid-cols-12 content-end">
              <div className="col-span-12 md:col-span-3 flex justify-center items-center">
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link
                      href="/"
                      className="navbar-brand inline-block max-w-xs"
                    >
                      <Image
                        width="400"
                        height="200"
                        src="/images/logo.png"
                        alt={""}
                      />
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-12 md:col-span-3 flex flex-col justify-center items-center">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {footer.name}
                </h2>

                <ul className="text-gray-500 dark:text-gray-400 font-medium grid grid-cols-2 gap-2 max-w-fit">
                  {footer.children.map((item) => (
                    <li key={item.link}>
                      <Link href={`${item.link}`} className=" hover:underline">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-span-12 md:col-span-3 flex flex-col justify-center items-center">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {curlanguage.changeLanguage.value == "en" ? (
                    <>Contact</>
                  ) : (
                    <>Liên hệ</>
                  )}
                </h2>

                <ul className="text-gray-500 dark:text-gray-400 font-medium max-w-fit">
                  <li className="flex">
                    <svg
                      className="h-5 w-5 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>

                    <ul className="ml-2">
                      {companyLinks.phoneNumber.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </li>

                  <li className="flex">
                    <svg
                      className="h-5 w-5 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <rect x="3" y="5" width="18" height="14" rx="2" />{" "}
                      <polyline points="3 7 12 13 21 7" />
                    </svg>

                    <span className="ml-2">{companyLinks.email}</span>
                  </li>
                </ul>
              </div>

              <div className="col-span-12 md:col-span-3 flex flex-col justify-center items-center">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {curlanguage.changeLanguage.value == "en" ? (
                    <>Address</>
                  ) : (
                    <>Địa chỉ</>
                  )}
                </h2>

                <ul className="text-gray-500 dark:text-gray-400 font-medium max-w-fit">
                  <li className="flex">
                    <svg
                      className="h-5 w-10 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>

                    <span className="ml-2">
                      <Link
                        href={companyLinks.addressLink}
                        className=" hover:underline"
                        target="_blank"
                      >
                        {curlanguage.changeLanguage.value == "en"
                          ? companyLinks.addressEn
                          : companyLinks.address}
                      </Link>
                    </span>
                  </li>
                  {companyLinks.socialAccount.map((item) => (
                    <li key={item} className="flex">
                      <Link href={`${item}`} className=" hover:underline flex">
                        <svg
                          className="h-5 w-5 text-black"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>

                        <span className="ml-2">
                          Lien Phat Technology Corporation
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-7 dark:border-darkmode-border">
        <div className="container text-center text-light dark:text-darkmode-light">
          <p dangerouslySetInnerHTML={markdownify(copyright)} />
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
