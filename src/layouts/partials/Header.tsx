"use client";

import { language } from "../../feature/changeLanguage/changeLanguageSlice";
import Logo from "@/components/Logo";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import menuEn from "@/config/menuEn.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5/index.js";
import useScroll from "../../lib/utils/use-scroll";
import { useSelector } from "react-redux";
import { UrlObject } from "url";
import { product } from "@/feature/data/productSlice";
import { loadProduct } from "@/lib/loadData";
import { useUrl } from "nextjs-current-url";
import encryptId from "../../lib/utils/encrypt";
//  child navigation link interface
const Header = () => {
  const { href } = useUrl() ?? {};
  // distructuring the main menu from menu object
  const curlanguage = useSelector((rootState) => language(rootState));
  const { main } = curlanguage.changeLanguage.value == "en" ? menuEn : menu;
  const productInfo = useSelector((rootState) => product(rootState));
  let [isLoading, setIsLoading] = useState(true);
  const pathname: any = usePathname();
  let servicesMenu: any = [];
  const scrolled = useScroll(25);
  let [dataHeader, setDataHeader] = useState();
  useEffect(() => {
    // declare the data fetching function
    const fetchProduct = async () => {
      setIsLoading(true);
      const productCheck = await loadProduct(
        {
          title: 1,
          _id: 1,
          type: 1,
          titleEn: 1,
          "content._id": 1,
          "content.title": 1,
          "content.titleEn": 1,
          status: 1,
          "content.status": 1,
        },
        href,
      );
      // dispatch(companyProduct(productCheck));
      servicesMenu = productCheck.products.filter(
        (item: { status: string; type: string }) =>
          item.type == "Service" && item.status == "Active",
      );
      main[1].children = productCheck.products.filter(
        (item: { status: string; type: string }) =>
          item.type == "Solution" && item.status == "Active",
      );
      main[2].children = servicesMenu[0].content.filter(
        (item) => item.status == "Active",
      );
      setIsLoading(false);
    };
    fetchProduct().catch(console.error);

    // call the function

    // make sure to catch any error
  }, [main]);
  useEffect(() => {
    // call the function

    window.scrollTo(0, 0);
    // make sure to catch any error
  }, [pathname]);

  const { settings } = config;

  // get current path

  return isLoading ? (
    <></>
  ) : (
    <header
      className={`fixed top-0 w-full flex justify-center ${
        scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0"
      } z-30 transition-all`}
    >
      <nav className="navbar container">
        {/* logo */}
        <div className="order-0">
          <Logo />
        </div>
        {/* navbar toggler */}
        <input id="nav-toggle" type="checkbox" className="hidden" />
        <label
          id="show-button"
          htmlFor="nav-toggle"
          className="order-3 flex cursor-pointer items-center text-dark dark:text-white lg:order-1 lg:hidden"
        >
          <svg className="h-6 fill-current" viewBox="0 0 20 20">
            <title>Menu Open</title>
            <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
          </svg>
        </label>
        <label
          id="hide-button"
          htmlFor="nav-toggle"
          className="order-3 hidden cursor-pointer items-center text-dark dark:text-white lg:order-1"
        >
          <svg className="h-6 fill-current" viewBox="0 0 20 20">
            <title>Menu Close</title>
            <polygon
              points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
              transform="rotate(45 10 10)"
            ></polygon>
          </svg>
        </label>
        {/* /navbar toggler */}

        <ul
          id="nav-menu"
          className="navbar-nav order-3 hidden w-full pb-6 lg:order-1 lg:flex lg:w-auto lg:space-x-2 lg:pb-0 xl:space-x-8"
        >
          {main.map((menu, i) => (
            <React.Fragment key={`menu-${i}`}>
              {menu.hasChildren ? (
                <li className="nav-item nav-dropdown group relative">
                  <Link
                    className={`nav-link inline-flex items-center ${
                      menu.children
                        ?.map(({ url }: any) => url)
                        .includes(pathname) ||
                      menu.children
                        ?.map(({ url }: any) => `${url}/`)
                        .includes(pathname)
                        ? "active"
                        : ""
                    }`}
                    href={menu.link}
                  >
                    {menu.name}
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </Link>
                  <div
                    className={`nav-dropdown-list hidden group-hover:block gap-2 lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100  grid-cols-${Math.round(
                      menu.children.length / 4,
                    )}`}
                  >
                    {menu.children?.map(
                      (
                        child: {
                          [x: string]: any;
                          titleEn: any;
                          link: string | UrlObject;
                          title: any;
                          _id: any;
                        },
                        i: any,
                      ) => (
                        <div
                          className="nav-dropdown-item"
                          key={`children-${i}`}
                        >
                          <Link
                            href={`/${
                              child.type ? "Solution" : "Service"
                            }/${encryptId(child._id)}`}
                            className={`nav-dropdown-link block ${
                              (pathname === `${child._id}/` ||
                                pathname === child._id) &&
                              "active"
                            }`}
                          >
                            {curlanguage.changeLanguage.value == "en"
                              ? child.titleEn
                              : child.title}
                          </Link>
                        </div>
                      ),
                    )}
                  </div>
                </li>
              ) : (
                <li className="nav-item">
                  <Link
                    href={menu.link}
                    className={`nav-link block ${
                      (pathname === `${menu.link}/` ||
                        pathname === menu.link) &&
                      "active"
                    }`}
                  >
                    {menu.name}
                  </Link>
                </li>
              )}
            </React.Fragment>
          ))}
          {/* {navigation_button.enable && (
            <li className="mt-4 inline-block lg:hidden">
              <Link
                className="btn btn-outline-primary btn-sm"
                href={navigation_button.link}
              >
                {navigation_button.label}
              </Link>
            </li>
          )} */}
        </ul>
        <div className="order-1 ml-auto flex items-center md:order-2 lg:ml-0">
          {settings.search && (
            <Link
              className="mr-5 inline-block border-r border-border pr-5 text-xl text-dark hover:text-primary dark:border-darkmode-border dark:text-white"
              href={`/search`}
              aria-label="search"
            >
              <IoSearch />
            </Link>
          )}
          <ThemeSwitcher />

          {/* {navigation_button.enable && (
            <Link
              className="btn btn-outline-primary btn-sm hidden lg:inline-block"
              href={navigation_button.link}
            >
              {curlanguage.changeLanguage.value == "en"
                ? navigation_button.labelEn
                : navigation_button.label}
            </Link>
          )} */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
